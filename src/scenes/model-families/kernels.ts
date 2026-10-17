import type { Scene, PlotPoint } from '@graphlearning/flow'
import { blob, circle, rng } from '../points'

// An inner class surrounded by a ring: no straight line separates them, an RBF boundary does.
const inner = blob(41, 22, 0, 0, 0.55)
const r = rng(43)
const ring: PlotPoint[] = Array.from({ length: 30 }, () => {
  const t = r() * 2 * Math.PI
  const rad = 1.9 + (r() - 0.5) * 0.5
  return [Math.round(rad * Math.cos(t) * 100) / 100, Math.round(rad * Math.sin(t) * 100) / 100]
})

// §6 — a radial boundary the linear model cannot draw, over what gamma does to it.
export const kernels: Scene = {
  id: 'kernels',
  title: 'Curved boundaries from similarity',
  flow: 'TB',
  nodes: [
    {
      id: 'ring',
      kind: 'plot',
      label: 'RBF-kernel SVM boundary',
      sub: 'synthetic · scaled features',
      plot: {
        x: { min: -3, max: 3, step: 1, label: 'feature 1' },
        y: { min: -2.6, max: 2.6, step: 1, label: 'feature 2' },
        axes: 'origin',
        equal: true,
        series: [
          { kind: 'scatter', points: inner, color: 'warn', size: 6, label: 'class A', labelAt: [0.3, 0.85] },
          { kind: 'scatter', points: ring, color: 'network', size: 6, label: 'class B', labelAt: [1.9, 2.25] },
          { kind: 'line', points: circle(0, 0, 1.25), color: 'service', label: 'boundary', labelAt: [0.95, -1.35] },
        ],
      },
    },
    {
      id: 'gamma',
      kind: 'table',
      label: 'gamma sets the reach of each point',
      headers: ['gamma', 'boundary', 'validation error'],
      values: [
        ['0.01', 'almost a line', '0.41'],
        ['1', 'one smooth circle', '0.04'],
        ['100', 'an island per point', '0.22'],
      ],
    },
  ],
  edges: [{ source: 'ring', target: 'gamma', label: 'tune gamma with C' }],
}
