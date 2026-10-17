import type { Scene, PlotPoint } from '@graphlearning/flow'

// Validation loss against boosting rounds for two learning rates (illustrative): the fast rate reaches
// its best early and then overfits; the slow rate needs more rounds and ends lower.
const rounds = Array.from({ length: 61 }, (_, i) => i * 10)
const fast: PlotPoint[] = rounds.map((r) => [r, 0.29 + 0.25 * Math.exp(-r / 25) + 0.00012 * Math.max(0, r - 80)])
const slow: PlotPoint[] = rounds.map((r) => [r, 0.275 + 0.27 * Math.exp(-r / 120) + 0.00003 * Math.max(0, r - 420)])

// §5 — rounds × learning rate × tree size are one capacity budget; early stopping picks the rounds.
export const learningRate: Scene = {
  id: 'learning-rate',
  title: 'Slow and steady',
  flow: 'TB',
  nodes: [
    {
      id: 'rates',
      kind: 'plot',
      label: 'Inner-split log loss against rounds',
      sub: 'illustrative',
      plot: {
        x: { min: 0, max: 600, step: 100, label: 'boosting rounds' },
        y: { min: 0.2, max: 0.6, step: 0.1, label: 'log loss' },
        axes: 'corner',
        series: [
          { kind: 'line', points: fast, color: 'warn', label: 'η = 0.3', labelAt: [480, 0.36] },
          { kind: 'line', points: slow, color: 'service', label: 'η = 0.05', labelAt: [480, 0.255] },
          { kind: 'marker', at: [80, 0.29 + 0.25 * Math.exp(-80 / 25)], label: 'best at 80', labelAt: [95, 0.33] },
        ],
      },
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'boosting.py',
      label: `gbm = HistGradientBoostingClassifier(
    learning_rate=0.05,      # small steps
    max_leaf_nodes=15,       # small trees
    max_iter=2000,           # an upper bound only
    early_stopping=True,     # inner split of the training fold
    validation_fraction=0.1,
    n_iter_no_change=20)`,
    },
  ],
  edges: [{ source: 'rates', target: 'code', label: 'let stopping pick rounds' }],
}
