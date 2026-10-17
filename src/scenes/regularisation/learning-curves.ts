import type { Scene, PlotPoint } from '@graphlearning/flow'

// Error against training-set size (thousands of orders) for two models (illustrative).
const sizes = [1, 2, 5, 10, 20, 40, 80]
const curve = (f: (n: number) => number): PlotPoint[] => sizes.map((n) => [n, f(n)])
const biasTrain = curve((n) => 16 - 3 / n)
const biasVal = curve((n) => 17 + 8 / n)
const varTrain = curve((n) => 2 + 6 * (1 - 1 / (1 + n / 10)))
const varVal = curve((n) => 9 + 30 / Math.sqrt(n))

const plot = (id: string, label: string, tr: PlotPoint[], va: PlotPoint[]) => ({
  id,
  kind: 'plot' as const,
  label,
  plot: {
    x: { min: 0, max: 80, step: 20, label: 'training orders (k)' },
    y: { min: 0, max: 40, step: 10, label: 'validation MAE' },
    axes: 'corner' as const,
    series: [
      { kind: 'line' as const, points: tr, color: 'service', label: 'training', labelAt: [50, tr[5][1] - 3] as PlotPoint },
      { kind: 'line' as const, points: va, color: 'warn', label: 'validation', labelAt: [50, va[5][1] + 3] as PlotPoint },
    ],
  },
})

// §6 — the two learning-curve shapes and what each says to do next.
export const learningCurves: Scene = {
  id: 'learning-curves',
  title: 'What more data would buy',
  flow: 'LR',
  nodes: [
    {
      id: 'pair',
      label: 'Error against training size',
      pattern: 'group',
      cols: 1,
      children: [plot('bias', 'High bias: curves meet high', biasTrain, biasVal), plot('variance', 'High variance: a wide gap', varTrain, varVal)],
    },
    {
      id: 'actions',
      label: 'Diagnosis → next step',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'more-cap', label: 'High bias', sub: 'features, less penalty', pattern: 'service', icon: 'layers' },
        { id: 'more-data', label: 'High variance', sub: 'data, more penalty', pattern: 'warn', icon: 'database' },
        { id: 'check-data', label: 'Both fine', sub: 'audit labels, slices', pattern: 'network', icon: 'search' },
      ],
    },
  ],
  edges: [{ source: 'pair', target: 'actions' }],
}
