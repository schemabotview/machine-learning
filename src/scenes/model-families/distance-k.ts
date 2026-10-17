import type { Scene, PlotPoint } from '@graphlearning/flow'

// Validation error against k (illustrative): k = 1 memorises, large k blurs every order into the
// average. The best k sits in between and is chosen on validation.
const ks = [1, 2, 3, 5, 7, 10, 15, 20, 30, 50, 75, 100]
const err = (k: number) => 9 + 9 / k + 0.06 * k
const val: PlotPoint[] = ks.map((k) => [k, err(k)])
const train: PlotPoint[] = ks.map((k) => [k, k === 1 ? 0 : 5 + 4 * (1 - 1 / k) + 0.055 * k])

// §2 — choosing k, and the two things that decide what "near" means: scaling and dimension.
export const distanceK: Scene = {
  id: 'distance-k',
  title: 'What near means',
  flow: 'TB',
  nodes: [
    {
      id: 'curve',
      kind: 'plot',
      label: 'Error against neighbourhood size',
      sub: 'k-NN regression · MAE in minutes',
      plot: {
        x: { min: 0, max: 100, step: 20, label: 'k' },
        y: { min: 0, max: 20, step: 5, label: 'MAE (min)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: val, color: 'warn', label: 'validation', labelAt: [70, 15.5] },
          { kind: 'line', points: train, color: 'service', label: 'training', labelAt: [70, 8.2] },
          { kind: 'marker', at: [10, err(10)], label: 'k = 10', labelAt: [12, 8.5] },
        ],
      },
    },
    {
      id: 'near',
      label: 'Before trusting a distance',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'scale', label: 'Scale', sub: '£ would swamp km', pattern: 'service', icon: 'scale' },
        { id: 'k', label: 'Choose k', sub: 'on validation', pattern: 'network', icon: 'search' },
        { id: 'dims', label: 'Few dims', sub: 'in 100-D all are far', pattern: 'warn', icon: 'layers' },
      ],
    },
  ],
  edges: [],
}
