import type { Scene, PlotPoint } from '@graphlearning/flow'

// Paired fold scores for two candidates (illustrative CV MAE). A is lower on 4 of 5 folds; the mean
// gap is 0.16 min. Folds share training rows, so these five numbers are not independent draws.
const a = [8.9, 8.4, 9.3, 8.6, 8.4]
const b = [9.0, 8.6, 9.2, 8.9, 8.7]
const pts = (ys: number[]): PlotPoint[] => ys.map((y, i) => [i + 1, y])

// §4 — where the error lives (slices with their counts) and how much fold scores vary.
export const slices: Scene = {
  id: 'slices',
  title: 'Where the error lives',
  flow: 'TB',
  nodes: [
    {
      id: 'paired',
      kind: 'plot',
      label: 'Two candidates, fold by fold',
      sub: 'CV MAE in minutes',
      plot: {
        x: { min: 0.5, max: 5.5, step: 1, label: 'fold' },
        y: { min: 8, max: 9.6, step: 0.4, label: 'MAE (min)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: pts(a), color: 'service', label: 'A', labelAt: [5.15, 8.35] },
          { kind: 'scatter', points: pts(a), color: 'service', size: 7 },
          { kind: 'line', points: pts(b), color: 'warn', label: 'B', labelAt: [5.15, 8.78] },
          { kind: 'scatter', points: pts(b), color: 'warn', size: 7 },
        ],
      },
    },
    {
      id: 'slices',
      kind: 'table',
      label: 'Error slices · validation MAE (min)',
      headers: ['slice', 'orders', 'MAE', 'vs overall'],
      values: [
        ['all validation', '2,000', '8.7', '—'],
        ['rush hour', '520', '10.9', '+2.2'],
        ['new customers', '300', '11.5', '+2.8'],
        ['east zone', '180', '14.2', '+5.5'],
        ['baskets over 20', '60', '16.0', '+7.3 · few rows'],
      ],
    },
  ],
  edges: [{ source: 'paired', target: 'slices', label: 'then look inside' }],
}
