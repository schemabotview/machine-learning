import type { Scene, PlotPoint } from '@graphlearning/flow'
import { dbscan, kmeansTrace } from '../points'
import { moonA, moonB, noise } from './customers'

// DBSCAN at three eps values and k-means on the same half-moons; every count in the table is
// computed here. eps 0.3 shatters the moons, 0.4 recovers them, 0.45 merges them.
const pts: PlotPoint[] = [...moonA, ...moonB, ...noise]
const truth = pts.map((_, i) => (i < moonA.length ? 0 : i < moonA.length + moonB.length ? 1 : -1))
const labels = dbscan(pts, 0.4, 5)
const run = (eps: number) => {
  const l = dbscan(pts, eps, 5)
  return { l, clusters: new Set(l.filter((x) => x >= 0)).size, noise: l.filter((x) => x === -1).length }
}
const km = kmeansTrace(pts, [[-0.5, 0.5], [1.5, 0]], 10).at(-1)!.labels
// Share of moon points correctly grouped when each moon is matched to a DIFFERENT cluster (the best
// one-to-one matching), so merging both moons into one cluster cannot score well. Noise counts wrong.
const matched = (lab: number[]) => {
  const ids = [...new Set(lab.filter((l) => l >= 0))]
  const count = (m: number, c: number) => lab.filter((l, i) => truth[i] === m && l === c).length
  let best = 0
  for (const a of [...ids, -9]) for (const b of [...ids, -9]) if (a !== b || a === -9) best = Math.max(best, count(0, a) + count(1, b))
  return best / (moonA.length + moonB.length)
}
const byLabel = (l: number) => pts.filter((_, i) => labels[i] === l)

// §4 — density clusters with a noise label, against k-means on the same shapes.
export const dbscanScene: Scene = {
  id: 'dbscan',
  title: 'Dense regions and noise',
  flow: 'TB',
  nodes: [
    {
      id: 'moons',
      kind: 'plot',
      label: 'DBSCAN, eps = 0.4, min_samples = 5',
      sub: 'synthetic half-moons',
      plot: {
        x: { min: -1.8, max: 2.8, step: 1, label: 'feature 1' },
        y: { min: -1.2, max: 1.8, step: 1, label: 'feature 2' },
        axes: 'corner',
        equal: true,
        series: [
          { kind: 'scatter', points: byLabel(0), color: 'service', size: 6, label: 'cluster 1', labelAt: [-1.5, 1.4] },
          { kind: 'scatter', points: byLabel(1), color: 'network', size: 6, label: 'cluster 2', labelAt: [1.9, -0.95] },
          { kind: 'scatter', points: byLabel(-1), color: 'warn', size: 8, label: 'noise', labelAt: [2.3, 1.45] },
        ],
      },
    },
    {
      id: 'compare',
      kind: 'table',
      label: 'Same points, four settings · min_samples = 5',
      headers: ['method', 'clusters', 'noise points', 'moon points grouped right'],
      values: [
        ...[0.3, 0.4, 0.45].map((eps) => {
          const r = run(eps)
          return [`DBSCAN, eps ${eps}`, String(r.clusters), String(r.noise), `${Math.round(matched(r.l) * 100)} %`]
        }),
        ['k-means, k = 2', '2', '0 — forced', `${Math.round(matched(km) * 100)} %`],
      ],
    },
  ],
  edges: [{ source: 'moons', target: 'compare' }],
}
