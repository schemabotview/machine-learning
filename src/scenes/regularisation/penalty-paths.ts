import type { Scene, PlotPoint } from '@graphlearning/flow'

// Coefficient paths on standardised features as the penalty grows (x = log10 α). Ridge shrinks every
// coefficient smoothly toward zero; lasso soft-thresholds, setting small ones exactly to zero.
const coefs: [string, number][] = [['rush hour', 6.0], ['distance', 4.2], ['basket', 1.1], ['weekend', -2.0]]
const xs = Array.from({ length: 41 }, (_, i) => -2 + i * 0.1)
const ridge = (b: number): PlotPoint[] => xs.map((x) => [x, b / (1 + 10 ** x / 10)])
const lasso = (b: number): PlotPoint[] => xs.map((x) => [x, Math.sign(b) * Math.max(Math.abs(b) - 10 ** x / 5, 0)])
const colors = ['warn', 'service', 'network', 'user']
const paths = (f: (b: number) => PlotPoint[], labelled: boolean) =>
  coefs.map(([name, b], i) => ({ kind: 'line' as const, points: f(b), color: colors[i], ...(labelled ? { label: name, labelAt: [-1.9, b + 0.45] as PlotPoint } : {}) }))

// §2 — ridge and lasso paths stacked, beside the code that puts the penalty after the scaler.
export const penaltyPaths: Scene = {
  id: 'penalty-paths',
  title: 'Shrink, or shrink to zero',
  flow: 'LR',
  nodes: [
    {
      id: 'pair',
      label: 'Coefficient paths as α grows',
      pattern: 'group',
      cols: 1,
      children: [
        {
          id: 'ridge',
          kind: 'plot',
          label: 'Ridge (L2)',
          plot: { x: { min: -2, max: 2, step: 1, label: 'log₁₀ α' }, y: { min: -3, max: 7, step: 2, label: 'coefficient' }, axes: 'corner', series: paths(ridge, true) },
        },
        {
          id: 'lasso',
          kind: 'plot',
          label: 'Lasso (L1)',
          plot: { x: { min: -2, max: 2, step: 1, label: 'log₁₀ α' }, y: { min: -3, max: 7, step: 2, label: 'coefficient' }, axes: 'corner', series: paths(lasso, false) },
        },
      ],
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'penalised.py',
      label: `# scale first: one α must treat
# every coefficient alike
ridge = make_pipeline(
    pre, StandardScaler(),
    Ridge(alpha=1.0))
lasso = make_pipeline(
    pre, StandardScaler(),
    Lasso(alpha=0.1))
enet = make_pipeline(
    pre, StandardScaler(),
    ElasticNet(alpha=0.1, l1_ratio=0.5))`,
    },
  ],
  edges: [{ source: 'pair', target: 'code', label: 'in scikit-learn' }],
}
