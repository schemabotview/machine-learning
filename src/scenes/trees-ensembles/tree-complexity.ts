import type { Scene, PlotPoint } from '@graphlearning/flow'

// Validation and training log loss against max_depth (illustrative): deep trees memorise.
const depths = Array.from({ length: 15 }, (_, i) => i + 1)
const train: PlotPoint[] = depths.map((d) => [d, Math.max(0.02, 0.5 * Math.exp(-0.25 * d))])
// Minimum at depth 4 (≈ 0.33, the table's validation log loss).
const valAt = (d: number) => 0.33 + 0.004 * (d - 4) ** 2 + 0.15 * Math.exp(-d)
const val: PlotPoint[] = depths.map((d) => [d, valAt(d)])

// §2 — depth as capacity, and the instability of the structure: two trees from two resamples of the
// same training fold choose different first splits yet score alike.
export const treeComplexity: Scene = {
  id: 'tree-complexity',
  title: 'How deep, and how stable',
  flow: 'TB',
  nodes: [
    {
      id: 'depth',
      kind: 'plot',
      label: 'Log loss against max_depth',
      sub: 'illustrative',
      plot: {
        x: { min: 0, max: 15, step: 3, label: 'max_depth' },
        y: { min: 0, max: 0.9, step: 0.2, label: 'log loss' },
        axes: 'corner',
        series: [
          { kind: 'line', points: train, color: 'service', label: 'training', labelAt: [10, 0.08] },
          { kind: 'line', points: val, color: 'warn', label: 'validation', labelAt: [10.6, 0.66] },
          { kind: 'marker', at: [4, valAt(4)], label: 'depth 4', labelAt: [4.3, 0.42] },
        ],
      },
    },
    {
      id: 'resamples',
      kind: 'table',
      label: 'Same fold, two bootstrap resamples, depth 4',
      headers: ['', 'tree 1', 'tree 2'],
      values: [
        ['root split', 'distance ≤ 8 km', 'road_km ≤ 9 km'],
        ['second split', 'rush hour', 'zone = north'],
        ['validation log loss', '0.33', '0.34'],
      ],
    },
  ],
  edges: [{ source: 'depth', target: 'resamples', label: 'refit on a resample' }],
}
