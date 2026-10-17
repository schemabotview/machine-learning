import type { Scene, PlotPoint } from '@graphlearning/flow'

// Explained-variance ratios for 8 scaled order features (illustrative), and the cumulative curve.
const ratios = [0.46, 0.21, 0.12, 0.08, 0.06, 0.04, 0.02, 0.01]
let run = 0
const cumulative: PlotPoint[] = ratios.map((v, i) => [i + 1, (run += v)])
const single: PlotPoint[] = ratios.map((v, i) => [i + 1, v])

// §3 — how much each component retains, and how scaling decides what "variance" means.
export const explainedVariance: Scene = {
  id: 'explained-variance',
  title: 'How much is kept',
  flow: 'TB',
  nodes: [
    {
      id: 'scree',
      kind: 'plot',
      label: 'Explained variance · 8 scaled features',
      sub: 'training fold · illustrative',
      plot: {
        x: { min: 0.5, max: 8.5, step: 1, label: 'component' },
        y: { min: 0, max: 1, step: 0.25, label: 'share of variance' },
        axes: 'corner',
        series: [
          { kind: 'line', points: cumulative, color: 'service', label: 'cumulative', labelAt: [5.6, 0.9] },
          { kind: 'scatter', points: cumulative, color: 'service', size: 7 },
          { kind: 'line', points: single, color: 'network', label: 'per component', labelAt: [3.4, 0.2] },
          { kind: 'marker', at: [3, 0.79], color: 'user', size: 10, label: '3 components: 79 %', labelAt: [3.2, 0.68] },
        ],
      },
    },
    {
      id: 'scaling',
      kind: 'table',
      label: 'What PC1 is made of',
      headers: ['feature', 'unscaled', 'scaled'],
      values: [
        ['basket_value (£)', '0.99', '0.41'],
        ['distance_km', '0.08', '0.52'],
        ['road_km', '0.09', '0.53'],
        ['basket_items', '0.03', '0.48'],
      ],
    },
  ],
  edges: [{ source: 'scree', target: 'scaling', label: 'depends on units' }],
}
