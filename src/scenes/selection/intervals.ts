import type { Scene, PlotPoint } from '@graphlearning/flow'
import { rng } from '../points'

// 10th–90th percentile prediction intervals from two quantile models (illustrative), over validation
// orders. Nominal coverage is 80 %; observed coverage is reported by slice in the table.
const r = rng(71)
const orders: PlotPoint[] = Array.from({ length: 34 }, () => {
  const x = 1 + r() * 18
  return [Math.round(x * 10) / 10, Math.round(25 + 4 * x + (r() - 0.5) * (14 + 2.2 * x))]
})
const band = (a: number, b: number): PlotPoint[] => [[0, a], [20, a + 20 * b]]

// §7 — a quantile band and the coverage it actually achieves.
export const intervals: Scene = {
  id: 'intervals',
  title: 'A range, not a point',
  flow: 'TB',
  nodes: [
    {
      id: 'band',
      kind: 'plot',
      label: '80 % prediction interval',
      sub: '10th and 90th percentile models',
      plot: {
        x: { min: 0, max: 20, step: 5, label: 'distance (km)' },
        y: { min: 0, max: 140, step: 20, label: 'duration (min)' },
        axes: 'corner',
        series: [
          { kind: 'scatter', points: orders, color: 'network', size: 6 },
          { kind: 'line', points: band(25, 4), color: 'service', label: 'median', labelAt: [15.5, 80] },
          { kind: 'line', points: band(18, 3.2), color: 'service', dashed: true, label: '10th', labelAt: [17.5, 66] },
          { kind: 'line', points: band(32, 5.2), color: 'service', dashed: true, label: '90th', labelAt: [16.2, 128] },
        ],
      },
    },
    {
      id: 'coverage',
      kind: 'table',
      label: 'Coverage: nominal 80 %',
      headers: ['slice', 'orders', 'inside the band'],
      values: [
        ['all validation', '2,000', '78 %'],
        ['rush hour', '520', '71 %'],
        ['new zone (west)', '90', '61 %'],
      ],
    },
  ],
  edges: [{ source: 'band', target: 'coverage', label: 'check on held-out data' }],
}
