import type { Scene } from '@graphlearning/flow'

// §2 — a comparison anyone can rerun: one config, the same folds for every candidate, seeds and
// library versions recorded. Scores are development-set CV log loss (selection evidence).
export const comparison: Scene = {
  id: 'comparison',
  title: 'A comparison anyone can rerun',
  flow: 'TB',
  nodes: [
    {
      id: 'config',
      kind: 'code',
      filename: 'experiment.yaml',
      label: `data: orders@2025-03-31  # sha256 3f9c…e1
split: TimeSeriesSplit(n_splits=5) on dev
seed: 20250401
budget: 20 trials per family
libs: scikit-learn 1.9.1, numpy 2.3
metric: neg_log_loss`,
    },
    {
      id: 'results',
      kind: 'table',
      label: 'Same folds, same budget · CV log loss',
      headers: ['pipeline', 'mean', 'sd', 'fit', 'notes'],
      values: [
        ['zone base rate', '0.41', '0.01', '0.1 s', 'baseline'],
        ['logistic + history', '0.36', '0.02', '2 s', 'readable'],
        ['random forest', '0.33', '0.02', '95 s', '180 MB'],
        ['hist boosting', '0.31', '0.02', '14 s', 'chosen'],
      ],
    },
  ],
  edges: [{ source: 'config', target: 'results', label: 'one run' }],
}
