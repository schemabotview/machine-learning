import type { Scene, PlotPoint } from '@graphlearning/flow'

// Training distances run 1–20 km with a gently curving trend (illustrative). A cubic basis fits that
// range well and then bends away beyond it, where no training order constrains it.
const wobble = [5, -3, 4, -6, 2, -4, 6, -2, 3, -5, 4, -1, 2, -6, 5, -3, 1, 6, -4, 2]
const train: PlotPoint[] = wobble.map((e, i) => {
  const x = i + 1
  return [x, Math.round(20 + 3 * x + 0.08 * x * x + e)]
})
const cubic = (x: number) => 20 + 3 * x + 0.08 * x * x + 0.004 * x * x * x
const inside: PlotPoint[] = Array.from({ length: 21 }, (_, i) => [i, cubic(i)])
const beyond: PlotPoint[] = Array.from({ length: 11 }, (_, i) => [20 + i, cubic(20 + i)])

// §3 — basis features inside the data range, extrapolation outside it.
export const extrapolation: Scene = {
  id: 'extrapolation',
  title: 'Curves inside the data, guesses outside',
  flow: 'TB',
  nodes: [
    {
      id: 'curve',
      kind: 'plot',
      label: 'A cubic basis in distance',
      sub: 'training range 1–20 km',
      plot: {
        x: { min: 0, max: 30, step: 5, label: 'distance (km)' },
        y: { min: 0, max: 300, step: 50, label: 'duration (min)' },
        axes: 'corner',
        series: [
          { kind: 'scatter', points: train, color: 'network', size: 6 },
          { kind: 'line', points: inside, color: 'service', label: 'fitted', labelAt: [9, 85] },
          { kind: 'line', points: beyond, color: 'warn', dashed: true, label: 'extrapolated', labelAt: [21, 250] },
          { kind: 'segment', from: [20, 0], to: [20, 300], color: '#4b5563', dashed: true, label: 'no data beyond', labelAt: [20.4, 40] },
        ],
      },
    },
    {
      id: 'bases',
      label: 'Features that bend a linear model',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'poly', label: 'Polynomial', sub: 'km, km², km³', pattern: 'service', icon: 'sigma' },
        { id: 'interaction', label: 'Interaction', sub: 'km × rush hour', pattern: 'network', icon: 'merge' },
        { id: 'bins', label: 'Bins', sub: 'distance bands', pattern: 'external', icon: 'boxes' },
      ],
    },
  ],
  edges: [],
}
