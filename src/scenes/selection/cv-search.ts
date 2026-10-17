import type { Scene } from '@graphlearning/flow'

// §1 — a search over WHOLE pipelines (preparation and model settings together) on folds that respect
// the claim, and the per-fold scores it produces (illustrative log loss, lower is better).
export const cvSearch: Scene = {
  id: 'cv-search',
  title: 'Search the pipeline, not just the model',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'search.py',
      label: `pipe = Pipeline([("prep", pre), ("model", gbm)])
grid = {
    "prep__num__impute__strategy": ["median", "mean"],
    "model__learning_rate": [0.03, 0.1],
    "model__max_leaf_nodes": [15, 31],
}
cv = TimeSeriesSplit(n_splits=5)   # future-order claim
search = GridSearchCV(pipe, grid, cv=cv, scoring="neg_log_loss")
search.fit(X_dev, y_dev)           # dev = train + validation`,
    },
    {
      id: 'folds',
      kind: 'table',
      label: 'Fold scores for three of the 8 candidates',
      headers: ['candidate', 'f1', 'f2', 'f3', 'f4', 'f5', 'mean', 'sd'],
      values: [
        ['median · 0.03 · 15', '0.33', '0.30', '0.32', '0.31', '0.29', '0.310', '0.015'],
        ['median · 0.10 · 31', '0.34', '0.31', '0.33', '0.32', '0.31', '0.322', '0.012'],
        ['mean · 0.03 · 15', '0.33', '0.31', '0.32', '0.31', '0.30', '0.314', '0.011'],
      ],
    },
  ],
  edges: [{ source: 'code', target: 'folds', label: 'every candidate, same folds' }],
}
