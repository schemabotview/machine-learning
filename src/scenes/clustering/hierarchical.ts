import type { Scene, PlotPoint } from '@graphlearning/flow'

// A dendrogram for six customers, drawn with segments. Merge heights (Ward linkage, illustrative):
// c1+c2 at 0.4, c4+c5 at 0.6, c3 joins {c1,c2} at 1.1, c6 joins {c4,c5} at 1.4, all at 3.2.
// Cutting at height 2 gives two clusters.
type Node = { x: number; h: number }
const leaf = (x: number): Node => ({ x, h: 0 })
const segs: { from: PlotPoint; to: PlotPoint }[] = []
const merge = (a: Node, b: Node, h: number): Node => {
  segs.push({ from: [a.x, a.h], to: [a.x, h] }, { from: [b.x, b.h], to: [b.x, h] }, { from: [a.x, h], to: [b.x, h] })
  return { x: (a.x + b.x) / 2, h }
}
const c12 = merge(leaf(1), leaf(2), 0.4)
const c45 = merge(leaf(4), leaf(5), 0.6)
const c123 = merge(c12, leaf(3), 1.1)
const c456 = merge(c45, leaf(6), 1.4)
merge(c123, c456, 3.2)

// §3 — the dendrogram with a cut, over how the linkage choice changes the merges.
export const hierarchical: Scene = {
  id: 'hierarchical',
  title: 'Merge the closest, again and again',
  flow: 'TB',
  nodes: [
    {
      id: 'tree',
      kind: 'plot',
      label: 'Dendrogram · six customers',
      sub: 'Ward linkage · illustrative heights',
      plot: {
        x: { min: 0.3, max: 6.7, step: 1, label: 'customer c1 … c6' },
        y: { min: 0, max: 3.6, step: 0.5, label: 'merge height' },
        axes: 'corner',
        grid: false,
        series: [
          ...segs.map((s) => ({ kind: 'segment' as const, from: s.from, to: s.to, color: 'service' })),
          { kind: 'segment', from: [0.3, 2], to: [6.7, 2], color: 'warn', dashed: true, label: 'cut at 2.0 → 2 clusters', labelAt: [3.9, 2.15] },
        ],
      },
    },
    {
      id: 'linkage',
      kind: 'table',
      label: 'Linkage: distance between two groups',
      headers: ['linkage', 'uses', 'tends to'],
      values: [
        ['single', 'closest pair', 'chain into long strings'],
        ['complete', 'farthest pair', 'compact, similar sizes'],
        ['average', 'mean of all pairs', 'between the two'],
        ['Ward', 'increase in variance', 'compact, k-means-like'],
      ],
    },
  ],
  edges: [{ source: 'tree', target: 'linkage', label: 'the merge rule decides' }],
}
