import type { Scene, PlotPoint } from '@graphlearning/flow'

// Training and validation MSE for polynomial fits of increasing degree on the same orders
// (illustrative). Training error keeps falling; validation error bottoms out at degree 4.
const train = [120, 80, 52, 40, 36, 33, 30, 27, 24, 21, 18, 15]
const val = [125, 86, 60, 52, 54, 60, 70, 84, 102, 125, 152, 185]
const pts = (ys: number[]): PlotPoint[] => ys.map((y, i) => [i + 1, y])

// §1 — the capacity curve: empirical risk on training data versus error on held-out data.
export const capacity: Scene = {
  id: 'capacity',
  title: 'More capacity, smaller training error',
  flow: 'TB',
  nodes: [
    {
      id: 'curve',
      kind: 'plot',
      label: 'Error against polynomial degree',
      sub: 'illustrative',
      plot: {
        x: { min: 0, max: 13, step: 1, label: 'degree (capacity)' },
        y: { min: 0, max: 200, step: 50, label: 'MSE (min²)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: pts(train), color: 'service', label: 'training', labelAt: [10, 32] },
          { kind: 'line', points: pts(val), color: 'warn', label: 'validation', labelAt: [9.2, 150] },
          { kind: 'marker', at: [4, 52], label: 'best on validation', labelAt: [4.3, 70] },
        ],
      },
    },
    {
      id: 'terms',
      label: 'Three words for the same picture',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'risk', label: 'Empirical risk', sub: 'mean loss on train', pattern: 'service', icon: 'sigma' },
        { id: 'cap', label: 'Capacity', sub: 'shapes it can fit', pattern: 'network', icon: 'layers' },
        { id: 'gap', label: 'Gap', sub: 'validation − training', pattern: 'warn', icon: 'ruler' },
      ],
    },
  ],
  edges: [],
}
