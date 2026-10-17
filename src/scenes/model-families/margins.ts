import type { Scene, PlotPoint } from '@graphlearning/flow'
import { blob } from './points'

// Two nearly separable classes. Boundary x + y = 0 with margins x + y = ±1 (illustrative fit).
const pos = blob(31, 16, 0.8, 0.74, 0.8)
const neg = blob(37, 16, -0.8, -0.74, 0.8)
// Support vectors are COMPUTED: every point on or inside its margin, |x + y| ≤ 1 on its own side.
const support = [...pos.filter(([x, y]) => x + y <= 1), ...neg.filter(([x, y]) => x + y >= -1)]
const boundary: PlotPoint[] = [[-2.5, 2.5], [2.5, -2.5]]
const upper: PlotPoint[] = [[-1.5, 2.5], [2.5, -1.5]]
const lower: PlotPoint[] = [[-2.5, 1.5], [1.5, -2.5]]

// §5 — the soft-margin boundary, its margins and support vectors, over the effect of C.
export const margins: Scene = {
  id: 'margins',
  title: 'The widest street',
  flow: 'TB',
  nodes: [
    {
      id: 'street',
      kind: 'plot',
      label: 'Soft-margin linear SVM',
      sub: 'synthetic · margins at f(x) = ±1',
      plot: {
        x: { min: -3, max: 3, step: 1, label: 'feature 1' },
        y: { min: -2.5, max: 2.5, step: 1, label: 'feature 2' },
        axes: 'origin',
        equal: true,
        series: [
          { kind: 'scatter', points: pos, color: 'warn', size: 6, label: 'late', labelAt: [2.2, 2.2] },
          { kind: 'scatter', points: neg, color: 'network', size: 6, label: 'on time', labelAt: [-2.9, -2.3] },
          { kind: 'line', points: boundary, color: 'service', label: 'f(x) = 0', labelAt: [-2.4, 2.1] },
          { kind: 'line', points: upper, color: 'service', dashed: true },
          { kind: 'line', points: lower, color: 'service', dashed: true },
          { kind: 'scatter', points: support, color: 'user', size: 10, label: 'support vectors', labelAt: [0.9, -1.6] },
        ],
      },
    },
    {
      id: 'c-table',
      kind: 'table',
      label: 'C on the full training set (illustrative)',
      headers: ['C', 'margin', 'support vectors', 'validation error'],
      values: [
        ['0.01', 'wide', '61', '0.19'],
        ['1', 'medium', '18', '0.12'],
        ['100', 'narrow', '7', '0.15'],
      ],
    },
  ],
  edges: [{ source: 'street', target: 'c-table', label: 'tune C' }],
}
