import type { Scene, PlotPoint } from '@graphlearning/flow'

// Training loss by iteration for three step sizes on the same objective (illustrative).
const ts = Array.from({ length: 41 }, (_, t) => t)
const slow: PlotPoint[] = ts.map((t) => [t, 10 + 90 * Math.exp(-0.03 * t)])
const good: PlotPoint[] = ts.map((t) => [t, 10 + 90 * Math.exp(-0.25 * t)])
const bouncy: PlotPoint[] = ts.map((t) => [t, 48 + 30 * Math.cos(0.8 * t)])

// §4 — what an optimiser's loss trace says, and the checks that go with it. The gradient mathematics
// lives in the Calculus and Optimisation course; this is the diagnostic reading of it.
export const optimisation: Scene = {
  id: 'optimisation',
  title: 'Reading an optimiser',
  flow: 'TB',
  nodes: [
    {
      id: 'traces',
      kind: 'plot',
      label: 'Training loss by iteration',
      sub: 'same objective, three step sizes',
      plot: {
        x: { min: 0, max: 40, step: 10, label: 'iteration' },
        y: { min: 0, max: 110, step: 25, label: 'training loss' },
        axes: 'corner',
        series: [
          { kind: 'line', points: slow, color: 'network', label: 'too small: not converged', labelAt: [18, 66] },
          { kind: 'line', points: good, color: 'service', label: 'converged', labelAt: [26, 17] },
          { kind: 'line', points: bouncy, color: 'warn', label: 'too large: never settles', labelAt: [24, 86] },
        ],
      },
    },
    {
      id: 'checks',
      label: 'Checks before reading the model',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'converged', label: 'Converged?', sub: 'warnings, n_iter_', pattern: 'service', icon: 'circlecheck' },
        { id: 'scaled', label: 'Scaled?', sub: 'evens the curvature', pattern: 'network', icon: 'scale' },
        { id: 'tolerance', label: 'Tolerance', sub: 'tol and max_iter', pattern: 'external', icon: 'ruler' },
      ],
    },
  ],
  edges: [],
}
