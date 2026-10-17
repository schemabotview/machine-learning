import type { Scene, PlotPoint } from '@graphlearning/flow'

// Partial dependence of predicted duration on distance (illustrative), with a few ICE lines — one per
// order. Beyond 14 km most zones have few training orders, so the curve there is extrapolation.
const xs = Array.from({ length: 21 }, (_, i) => i)
const pd: PlotPoint[] = xs.map((x) => [x, 30 + 3.6 * x - 0.03 * x * x])
const ice = [-9, -4, 3, 8].map((off, k) => xs.map((x) => [x, 30 + off + (3.6 + 0.25 * (k - 1.5)) * x - 0.03 * x * x] as PlotPoint))

// §3 — held-out permutation importance, and a dependence plot with its caveat.
export const permutationPdp: Scene = {
  id: 'permutation-pdp',
  title: 'Shuffle a column, sweep a column',
  flow: 'TB',
  nodes: [
    {
      id: 'perm',
      kind: 'evolution',
      label: 'Permutation importance · test set',
      evolution: {
        unit: 'increase in MAE when shuffled (minutes)',
        stages: [
          { label: 'rush_hour', value: 3.4, valueLabel: '+3.4' },
          { label: 'distance', value: 2.1, valueLabel: '+2.1' },
          { label: 'history', value: 1.8, valueLabel: '+1.8' },
          { label: 'road_km', value: 1.6, valueLabel: '+1.6' },
          { label: 'zone', value: 0.4, valueLabel: '+0.4' },
        ],
      },
    },
    {
      id: 'pdp',
      kind: 'plot',
      label: 'Partial dependence on distance, with ICE',
      sub: 'average and per-order curves',
      plot: {
        x: { min: 0, max: 20, step: 5, label: 'distance (km)' },
        y: { min: 0, max: 120, step: 20, label: 'predicted duration (min)' },
        axes: 'corner',
        series: [
          ...ice.map((pts) => ({ kind: 'line' as const, points: pts, color: '#4b5563' })),
          { kind: 'line', points: pd, color: 'service', label: 'partial dependence', labelAt: [1, 75] },
          { kind: 'segment', from: [14, 0], to: [14, 120], color: 'warn', dashed: true, label: 'few orders beyond', labelAt: [14.3, 15] },
        ],
      },
    },
  ],
  edges: [{ source: 'perm', target: 'pdp', label: 'then: how, not just how much' }],
}
