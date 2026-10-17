import type { Scene, PlotPoint } from '@graphlearning/flow'

// Alerts per day at each score threshold on a month of validation orders (≈ 4,000 a day,
// illustrative), and the share of reviewed alerts confirmed as data errors. The budget of 50 a day
// fixes the threshold; the score does not.
const rows: [number, number, number][] = [
  // threshold on score_samples (lower = more abnormal), alerts per day, confirmed share
  [-0.45, 220, 0.12],
  [-0.5, 120, 0.19],
  [-0.55, 50, 0.31],
  [-0.6, 22, 0.45],
  [-0.65, 9, 0.56],
]
const curve: PlotPoint[] = rows.map(([t, a]) => [t, a])

// §5 — the score convention, and a threshold chosen by review capacity.
export const alertBudget: Scene = {
  id: 'alert-budget',
  title: 'As many alerts as people can review',
  flow: 'TB',
  nodes: [
    {
      id: 'curve',
      kind: 'plot',
      label: 'Alerts per day by threshold',
      sub: 'validation month · isolation forest',
      plot: {
        x: { min: -0.7, max: -0.4, step: 0.05, label: 'threshold on score_samples (flag below)' },
        y: { min: 0, max: 240, step: 50, label: 'alerts per day' },
        axes: 'corner',
        series: [
          { kind: 'line', points: curve, color: 'service' },
          { kind: 'scatter', points: curve, color: 'service', size: 7 },
          { kind: 'segment', from: [-0.7, 50], to: [-0.4, 50], color: 'warn', dashed: true, label: 'budget: 50 a day', labelAt: [-0.69, 62] },
          { kind: 'marker', at: [-0.55, 50], color: 'user', size: 10, label: 't = −0.55', labelAt: [-0.545, 85] },
        ],
      },
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Reviewed alerts · validation month',
      headers: ['threshold', 'alerts / day', 'confirmed errors'],
      values: rows.map(([t, a, c]) => [t.toFixed(2), String(a), `${Math.round(c * 100)} %`]),
    },
    {
      id: 'sign',
      label: 'Score conventions in scikit-learn',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'samples', label: 'score_samples', sub: 'lower = more abnormal', pattern: 'network', icon: 'sortarrows' },
        { id: 'decision', label: 'Decision score', sub: 'decision_function < 0', pattern: 'external', icon: 'sortarrows' },
      ],
    },
  ],
  edges: [
    { source: 'curve', target: 'table' },
    { source: 'table', target: 'sign' },
  ],
}
