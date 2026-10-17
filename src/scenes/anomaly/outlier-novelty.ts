import type { Scene } from '@graphlearning/flow'

// §2 — the two settings and how scikit-learn exposes them. LOF is the sharp case: with
// novelty=False it only labels the data it was fitted on; with novelty=True it only scores new data.
export const outlierNovelty: Scene = {
  id: 'outlier-novelty',
  title: 'Dirty training data, or clean?',
  flow: 'TB',
  nodes: [
    {
      id: 'settings',
      label: 'Two settings',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'outlier',
          label: 'Outlier detection',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'o-train', label: 'Training data', sub: 'contains anomalies', pattern: 'warn', icon: 'database' },
            { id: 'o-ask', label: 'Question', sub: 'which of THESE are odd?', pattern: 'service', icon: 'search' },
          ],
        },
        {
          id: 'novelty',
          label: 'Novelty detection',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'n-train', label: 'Training data', sub: 'believed clean', pattern: 'service', icon: 'database' },
            { id: 'n-ask', label: 'Question', sub: 'is a NEW order odd?', pattern: 'network', icon: 'search' },
          ],
        },
      ],
    },
    {
      id: 'api',
      kind: 'table',
      label: 'Which call answers which question',
      headers: ['estimator', 'outliers in training data', 'new orders'],
      values: [
        ['LocalOutlierFactor()', 'fit_predict', 'not available'],
        ['LocalOutlierFactor(novelty=True)', 'do not use on training', 'predict, score_samples'],
        ['IsolationForest', 'fit_predict', 'predict, score_samples'],
        ['OneClassSVM', 'fit_predict', 'predict, decision_function'],
      ],
    },
  ],
  edges: [{ source: 'settings', target: 'api', label: 'in scikit-learn' }],
}
