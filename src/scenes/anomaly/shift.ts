import type { Scene, PlotPoint } from '@graphlearning/flow'

// Weekly alert rate by zone (illustrative). The west zone opens in week 6 with no reference history,
// so its ordinary orders look unusual; after its own 90-day reference is in place (week 10) the rate
// falls back. The north zone is steady throughout.
const north: PlotPoint[] = Array.from({ length: 14 }, (_, i) => [i + 1, 1.2 + 0.15 * Math.sin(i)])
const west: PlotPoint[] = [[6, 9.5], [7, 8.8], [8, 9.1], [9, 8.4], [10, 2.6], [11, 1.9], [12, 1.6], [13, 1.5], [14, 1.4]]

// §6 — a shift that looks like an anomaly wave, and how to evaluate with few labels.
export const shift: Scene = {
  id: 'shift',
  title: 'When everything new looks unusual',
  flow: 'TB',
  nodes: [
    {
      id: 'rates',
      kind: 'plot',
      label: 'Alert rate by zone and week',
      sub: '% of orders flagged · illustrative',
      plot: {
        x: { min: 0.5, max: 14.5, step: 1, label: 'week' },
        y: { min: 0, max: 11, step: 2, label: 'alert rate (%)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: north, color: 'network', label: 'north', labelAt: [1, 2.2] },
          { kind: 'line', points: west, color: 'warn', label: 'west: opens week 6', labelAt: [6.2, 10.2] },
          { kind: 'segment', from: [9.5, 0], to: [9.5, 11], color: '#4b5563', dashed: true, label: 'own reference added', labelAt: [9.7, 6] },
        ],
      },
    },
    {
      id: 'practice',
      label: 'Evaluating with scarce labels',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sample', label: 'Review a sample', sub: 'estimate precision', pattern: 'service', icon: 'search' },
        { id: 'per-group', label: 'Per-group reference', sub: 'score within zone', pattern: 'network', icon: 'users' },
        { id: 'recheck', label: 'Re-check after change', sub: 'new zone, new courier', pattern: 'warn', icon: 'repeat' },
        { id: 'feedback', label: 'Reviews become labels', sub: 'but only for flagged', pattern: 'external', icon: 'tag' },
      ],
    },
  ],
  edges: [{ source: 'rates', target: 'practice' }],
}
