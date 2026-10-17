import type { Scene, PlotPoint } from '@graphlearning/flow'

const sigmoid: PlotPoint[] = Array.from({ length: 81 }, (_, i) => {
  const z = -6 + i * 0.15
  return [z, 1 / (1 + Math.exp(-z))]
})
// Orders at their scores: late ones (y = 1) mostly at high scores, on-time (y = 0) mostly low.
const late: PlotPoint[] = [-1.5, 0.4, 1.2, 1.9, 2.6, 3.4, 4.5].map((z) => [z, 1])
const onTime: PlotPoint[] = [-5, -4, -3.1, -2.4, -1.8, -0.9, -0.2, 0.7, 2.1].map((z) => [z, 0])

// §4 — the logistic link from score to probability, over the log loss a few predictions earn:
// −ln 0.9 = 0.11, −ln 0.6 = 0.51, −ln 0.4 = 0.92, −ln 0.1 = 2.30.
export const logistic: Scene = {
  id: 'logistic',
  title: 'From score to probability to loss',
  flow: 'TB',
  nodes: [
    {
      id: 'link',
      kind: 'plot',
      label: 'P(late) = σ(score)',
      sub: 'training orders at y = 0 or 1',
      plot: {
        x: { min: -6, max: 6, step: 2, label: 'score  w·x + b' },
        y: { min: 0, max: 1, step: 0.25, label: 'P(late)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: sigmoid, color: 'service', label: 'σ(score)', labelAt: [2.2, 0.72] },
          { kind: 'scatter', points: late, color: 'warn', size: 7, label: 'late', labelAt: [4.6, 0.9] },
          { kind: 'scatter', points: onTime, color: 'network', size: 7, label: 'on time', labelAt: [-5.6, 0.1] },
        ],
      },
    },
    {
      id: 'losses',
      kind: 'table',
      label: 'Log loss = −ln P(observed class)',
      headers: ['P(late)', 'late?', 'loss'],
      values: [
        ['0.9', 'yes', '0.11'],
        ['0.6', 'yes', '0.51'],
        ['0.6', 'no', '0.92'],
        ['0.1', 'no', '0.11'],
        ['0.1', 'yes', '2.30 — confident and wrong'],
      ],
    },
  ],
  edges: [{ source: 'link', target: 'losses', label: 'score each order' }],
}
