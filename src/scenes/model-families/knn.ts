import type { Scene, PlotPoint } from '@graphlearning/flow'
import { blob, circle } from '../points'

// Two synthetic classes on two scaled features. The table is COMPUTED from the plotted points: the
// query's five nearest training orders, their distances and classes, and the resulting vote. The
// durations are illustrative, one per neighbour, so the k-NN regression mean is their average.
const late = blob(11, 18, 1.2, 1.0, 0.75)
const onTime = blob(23, 18, -1.0, -0.8, 0.75)
const query: PlotPoint = [0, 0.2]
const labelled = [...late.map((p) => ({ p, c: 'late' })), ...onTime.map((p) => ({ p, c: 'on time' }))]
const nearest = labelled
  .map(({ p, c }) => ({ c, d: Math.hypot(p[0] - query[0], p[1] - query[1]) }))
  .sort((a, b) => a.d - b.d)
  .slice(0, 5)
const minutes = [74, 41, 69, 81, 45]
const nLate = nearest.filter((n) => n.c === 'late').length
const radius = nearest[4].d + 0.04

// §1 — a k = 5 neighbourhood drawn around one query point, and the vote it produces.
export const knn: Scene = {
  id: 'knn',
  title: 'Ask the neighbours',
  flow: 'TB',
  nodes: [
    {
      id: 'space',
      kind: 'plot',
      label: 'k = 5 nearest training orders',
      sub: 'two scaled features · synthetic',
      plot: {
        x: { min: -4, max: 4, step: 1, label: 'scaled distance' },
        y: { min: -2.5, max: 2.5, step: 1, label: 'scaled basket size' },
        axes: 'origin',
        equal: true,
        series: [
          { kind: 'scatter', points: late, color: 'warn', size: 6, label: 'late', labelAt: [2.1, 2.1] },
          { kind: 'scatter', points: onTime, color: 'network', size: 6, label: 'on time', labelAt: [-2.8, -2.2] },
          { kind: 'line', points: circle(query[0], query[1], radius), color: 'service', dashed: true },
          { kind: 'marker', at: query, color: 'service', size: 9, label: 'query', labelAt: [0.3, -0.25] },
        ],
      },
    },
    {
      id: 'vote',
      kind: 'table',
      label: 'The five neighbours',
      headers: ['rank', 'distance', 'class', 'duration'],
      values: [
        ...nearest.map((n, i) => [String(i + 1), n.d.toFixed(2), n.c, `${minutes[i]} min`]),
        ['vote', '', `${nLate} of 5 late`, `mean ${Math.round(minutes.reduce((a, b) => a + b) / 5)} min`],
      ],
    },
  ],
  edges: [{ source: 'space', target: 'vote', label: 'sorted by distance' }],
}
