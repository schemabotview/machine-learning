import type { Scene, PlotPoint } from '@graphlearning/flow'

const epochs = Array.from({ length: 31 }, (_, e) => e)
const train: PlotPoint[] = epochs.map((e) => [e, 20 + 80 * Math.exp(-0.18 * e)])
const inner: PlotPoint[] = epochs.map((e) => [e, 34 + 70 * Math.exp(-0.2 * e) + 0.09 * (e - 12) ** 2 * (e > 12 ? 1 : 0)])

// §5 — training loss keeps falling while the INNER early-stopping split turns up after epoch 12.
// That inner split is carved from the training fold, so the outer validation fold stays untouched.
export const earlyStopping: Scene = {
  id: 'early-stopping',
  title: 'Stop when held-out loss turns',
  flow: 'TB',
  nodes: [
    {
      id: 'curves',
      kind: 'plot',
      label: 'Loss by training epoch',
      sub: 'illustrative',
      plot: {
        x: { min: 0, max: 30, step: 5, label: 'epoch' },
        y: { min: 0, max: 110, step: 25, label: 'loss' },
        axes: 'corner',
        series: [
          { kind: 'line', points: train, color: 'service', label: 'training', labelAt: [22, 14] },
          { kind: 'line', points: inner, color: 'warn', label: 'inner stopping split', labelAt: [17, 60] },
          { kind: 'segment', from: [12, 0], to: [12, 110], color: '#4b5563', dashed: true, label: 'stop: epoch 12', labelAt: [12.4, 100] },
        ],
      },
    },
    {
      id: 'nesting',
      label: 'Where the stopping data comes from',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fit-part', label: 'Training fold', sub: '90 %: fits weights', pattern: 'service', icon: 'gears' },
        { id: 'stop-part', label: 'Inner split', sub: '10 %: picks the epoch', pattern: 'warn', icon: 'clock' },
        { id: 'outer', label: 'Validation fold', sub: 'untouched: compares', pattern: 'user', icon: 'lock' },
      ],
    },
  ],
  edges: [],
}
