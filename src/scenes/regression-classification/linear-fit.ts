import type { Scene, PlotPoint } from '@graphlearning/flow'

// Validation-style orders: duration ≈ 25 + 4.2 × distance plus a fixed wobble (illustrative).
const wobble = [6, -4, 9, -7, 2, -9, 5, 11, -3, -6, 8, -2, 4, -10, 7, -5, 3, 10, -8, 1]
const orders: PlotPoint[] = wobble.map((e, i) => {
  const km = 1 + i * 0.95
  return [Math.round(km * 10) / 10, Math.round(25 + 4.2 * km + e)]
})
const fit: PlotPoint[] = [[0, 25], [20, 109]]

// §1 — one feature's fitted line on top; below, two fits with a near-duplicate feature that make
// the same predictions while splitting the coefficient differently (collinearity).
export const linearFit: Scene = {
  id: 'linear-fit',
  title: 'A line, and what its coefficients mean',
  flow: 'TB',
  nodes: [
    {
      id: 'line',
      kind: 'plot',
      label: 'Duration against distance',
      sub: 'training rows · illustrative',
      plot: {
        x: { min: 0, max: 20, step: 5, label: 'distance (km)' },
        y: { min: 0, max: 120, step: 20, label: 'duration (min)' },
        axes: 'corner',
        series: [
          { kind: 'scatter', points: orders, color: 'network', size: 6 },
          { kind: 'line', points: fit, color: 'service', label: '25 + 4.2 × km', labelAt: [12.5, 70] },
        ],
      },
    },
    {
      id: 'coefs',
      kind: 'table',
      label: 'Two fits, same predictions',
      headers: ['term', 'fit A', 'fit B'],
      values: [
        ['intercept', '25.0', '25.0'],
        ['distance_km', '4.2', '1.9'],
        ['road_km (≈ distance)', '0.0', '2.4'],
        ['basket_items', '1.1', '1.1'],
        ['validation MAE', '8.9 min', '8.9 min'],
      ],
    },
  ],
  edges: [{ source: 'line', target: 'coefs', label: 'add road_km' }],
}
