import type { Scene, PlotPoint } from '@graphlearning/flow'
import { normal } from '../points'

// A two-component Gaussian mixture on mean basket value (£): weights 0.6 / 0.4, means 25 / 60,
// sds 6 / 12 (illustrative fit). Responsibilities are COMPUTED from those parameters.
const comps = [
  { w: 0.6, mu: 25, sd: 6 },
  { w: 0.4, mu: 60, sd: 12 },
]
const xs = Array.from({ length: 101 }, (_, i) => i)
const weighted = (k: number): PlotPoint[] => xs.map((x) => [x, comps[k].w * normal(x, comps[k].mu, comps[k].sd)])
const mixture: PlotPoint[] = xs.map((x) => [x, comps.reduce((a, c) => a + c.w * normal(x, c.mu, c.sd), 0)])
const resp = (x: number) => {
  const p = comps.map((c) => c.w * normal(x, c.mu, c.sd))
  return p[0] / (p[0] + p[1])
}
const traced = [30, 38, 45]

// §6 — the mixture density, its two weighted components, and three customers' soft memberships.
export const mixtureScene: Scene = {
  id: 'mixture',
  title: 'Soft membership',
  flow: 'TB',
  nodes: [
    {
      id: 'density',
      kind: 'plot',
      label: 'Two-component mixture · mean basket',
      sub: 'weights 0.6 / 0.4 · illustrative fit',
      plot: {
        x: { min: 0, max: 100, step: 20, label: 'mean basket (£)' },
        y: { min: 0, max: 0.045, step: 0.01, label: 'density' },
        axes: 'corner',
        series: [
          { kind: 'line', points: weighted(0), color: 'service', dashed: true, label: 'small baskets', labelAt: [4, 0.036] },
          { kind: 'line', points: weighted(1), color: 'network', dashed: true, label: 'large baskets', labelAt: [70, 0.016] },
          { kind: 'line', points: mixture, color: 'user', label: 'mixture', labelAt: [32, 0.042] },
          ...traced.map((x) => ({ kind: 'marker' as const, at: [x, 0] as PlotPoint, color: 'warn', size: 9 })),
        ],
      },
    },
    {
      id: 'resp',
      kind: 'table',
      label: 'E-step: responsibility = share of the density',
      headers: ['customer basket', 'P(small)', 'P(large)'],
      values: traced.map((x) => [`£${x}`, resp(x).toFixed(2), (1 - resp(x)).toFixed(2)]),
    },
  ],
  edges: [{ source: 'density', target: 'resp', label: 'at three customers' }],
}
