import type { Scene, PlotPoint } from '@graphlearning/flow'
import { blob, isolationScores, lof } from '../points'

// A dense group of everyday orders and a sparse group of bulk orders (scaled items × value,
// synthetic). Three probe orders are scored by LOF (k = 10) and an isolation forest, both COMPUTED.
const dense = blob(201, 40, 0, 0, 0.35)
const sparse = blob(203, 16, 2.4, 1.8, 0.9)
const ref = [...dense, ...sparse]
const probes: { id: string; p: PlotPoint; note: string }[] = [
  { id: 'A', p: [1.1, 0.9], note: 'between the groups' },
  { id: 'B', p: [2.7, 2.1], note: 'inside the sparse group' },
  { id: 'C', p: [0.4, -0.05], note: 'edge of the dense group' },
]
const iso = isolationScores(ref, probes.map((x) => x.p))
const lofs = probes.map((x) => lof([...ref, x.p], x.p, 10))

// §3 — local density versus ease of isolation, on the same three orders.
export const lofIsolation: Scene = {
  id: 'lof-isolation',
  title: 'Odd for its neighbourhood, or easy to isolate',
  flow: 'TB',
  nodes: [
    {
      id: 'space',
      kind: 'plot',
      label: 'Everyday and bulk orders',
      sub: 'scaled features · synthetic',
      plot: {
        x: { min: -1.5, max: 5, step: 1, label: 'items (scaled)' },
        y: { min: -1.3, max: 4, step: 1, label: 'basket value (scaled)' },
        axes: 'corner',
        equal: true,
        series: [
          { kind: 'scatter', points: dense, color: 'network', size: 6, label: 'everyday', labelAt: [-1.3, 0.8] },
          { kind: 'scatter', points: sparse, color: 'service', size: 6, label: 'bulk', labelAt: [3.6, 3.4] },
          ...probes.map((x) => ({ kind: 'marker' as const, at: x.p, color: 'warn', size: 10, label: x.id, labelAt: [x.p[0] + 0.15, x.p[1] + 0.2] as PlotPoint })),
        ],
      },
    },
    {
      id: 'scores',
      kind: 'table',
      label: 'Scores for the probe orders',
      headers: ['order', 'where', 'LOF (≈1 normal)', 'isolation (≈0.5 normal)'],
      values: probes.map((x, i) => [x.id, x.note, lofs[i].toFixed(2), iso[i].toFixed(2)]),
    },
  ],
  edges: [{ source: 'space', target: 'scores', label: 'computed' }],
}
