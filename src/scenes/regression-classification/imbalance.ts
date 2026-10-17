import type { Scene } from '@graphlearning/flow'

// §8 — reweighting the rare late class inside the training fold, and what it does to the validation
// evidence (illustrative): more late orders caught, more false alarms, inflated probabilities.
export const imbalance: Scene = {
  id: 'imbalance',
  title: 'Rare classes, train-only fixes',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'weights.py',
      label: `clf = LogisticRegression(class_weight="balanced")
clf.fit(X_train, y_train)    # weights: training fold only

# validation keeps the natural 15 % late rate
p_val = clf.predict_proba(X_val)[:, 1]`,
    },
    {
      id: 'effect',
      kind: 'table',
      label: 'Validation evidence at threshold 0.5',
      headers: ['', 'unweighted', 'balanced'],
      values: [
        ['recall', '0.60', '0.78'],
        ['precision', '0.56', '0.38'],
        ['log loss', '0.33', '0.45'],
        ['mean P(late)', '0.15', '0.31'],
      ],
    },
    {
      id: 'rules',
      label: 'Rules for rare outcomes',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'weight', label: 'Weight', sub: 'or move the threshold', pattern: 'service', icon: 'scale' },
        { id: 'resample', label: 'Resample', sub: 'training fold only', pattern: 'network', icon: 'copy' },
        { id: 'never', label: 'Never', sub: 'resample validation', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'effect', label: 'compare' },
    { source: 'effect', target: 'rules' },
  ],
}
