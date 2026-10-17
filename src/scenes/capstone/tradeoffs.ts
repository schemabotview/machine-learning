import type { Scene, PlotPoint } from '@graphlearning/flow'

// Candidates by CV log loss and prediction latency per 1,000 orders (log10 ms, illustrative). The
// frontier joins candidates no other beats on both axes; the forest sits behind it.
const cands: [string, number, number][] = [
  ['base rate', -1, 0.41],
  ['logistic', -0.7, 0.36],
  ['forest', 1.65, 0.33],
  ['boosting', 0.78, 0.31],
]
const pts: PlotPoint[] = cands.map(([, x, y]) => [x, y])
const frontier: PlotPoint[] = [[-1, 0.41], [-0.7, 0.36], [0.78, 0.31]]

// §3 — the accuracy–cost frontier, and the decision policy that turns the chosen model into actions.
export const tradeoffs: Scene = {
  id: 'tradeoffs',
  title: 'Accuracy, cost and the policy',
  flow: 'TB',
  nodes: [
    {
      id: 'frontier',
      kind: 'plot',
      label: 'Log loss against latency',
      sub: 'CV evidence · latency on one machine',
      plot: {
        x: { min: -1.3, max: 2, step: 0.5, label: 'log₁₀ ms per 1,000 orders' },
        y: { min: 0.28, max: 0.43, step: 0.03, label: 'CV log loss' },
        axes: 'corner',
        series: [
          { kind: 'line', points: frontier, color: 'service', dashed: true, label: 'frontier', labelAt: [0, 0.345] },
          { kind: 'scatter', points: pts, color: 'user', size: 9 },
          ...cands.map(([name, x, y]) => ({ kind: 'marker' as const, at: [x, y] as PlotPoint, color: 'user', size: 1, label: name, labelAt: [x + 0.06, y + 0.006] as PlotPoint })),
        ],
      },
    },
    {
      id: 'policy',
      kind: 'table',
      label: 'Decision policy · fixed on validation',
      headers: ['rule', 'setting', 'why'],
      values: [
        ['offer express', 'P(late) > 0.3', 'lowest cost: FN £8, FP £3'],
        ['capacity cap', 'top 200 per 1,000', 'courier limit'],
        ['abstain', 'new zone, < 90 days', 'coverage 61 %'],
        ['holdout', 'random 5 % of flagged', 'honest labels'],
      ],
    },
  ],
  edges: [{ source: 'frontier', target: 'policy', label: 'then decide' }],
}
