import type { Scene, PlotPoint } from '@graphlearning/flow'
import { kmeansTrace } from '../points'
import { customers } from './customers'

// Lloyd's algorithm from a deliberately poor start, traced exactly: the table is computed from the
// plotted points, so the inertia column is the real sum of squared distances at each step.
const start: PlotPoint[] = [[0.2, 0.4], [0.6, -0.2], [1.9, -1.6]]
const trace = kmeansTrace(customers, start, 4)
const last = trace[trace.length - 1]
const groups = [0, 1, 2].map((j) => customers.filter((_, i) => last.labels[i] === j))
const colors = ['service', 'network', 'external']
const fmt = (c: PlotPoint) => `(${c[0].toFixed(1)}, ${c[1].toFixed(1)})`

// §2 — the start, the paths the centroids take, and where they settle.
export const kmeans: Scene = {
  id: 'kmeans',
  title: 'Assign, update, repeat',
  flow: 'TB',
  nodes: [
    {
      id: 'moves',
      kind: 'plot',
      label: 'k-means, k = 3, from a poor start',
      sub: 'scaled customer summary · synthetic',
      plot: {
        x: { min: -2.6, max: 2.8, step: 1, label: 'orders, 90 days (scaled)' },
        y: { min: -2.2, max: 2.2, step: 1, label: 'mean basket (scaled)' },
        axes: 'origin',
        equal: true,
        series: [
          ...groups.map((g, j) => ({ kind: 'scatter' as const, points: g, color: colors[j], size: 6 })),
          ...[0, 1, 2].map((j) => ({ kind: 'line' as const, points: trace.map((t) => t.centroids[j]), color: 'user', dashed: true })),
          { kind: 'scatter', points: start, color: '#9ca3af', size: 9, label: 'start', labelAt: [1.95, -1.95] },
          { kind: 'scatter', points: last.centroids, color: 'user', size: 11, label: 'final centroids', labelAt: [0.2, 1.75] },
        ],
      },
    },
    {
      id: 'steps',
      kind: 'table',
      label: 'The trace · inertia = Σ squared distance to own centroid',
      headers: ['step', 'centroid 1', 'centroid 2', 'centroid 3', 'inertia'],
      values: trace.map((t, s) => [String(s), ...t.centroids.map(fmt), t.inertia.toFixed(1)]),
    },
  ],
  edges: [{ source: 'moves', target: 'steps' }],
}
