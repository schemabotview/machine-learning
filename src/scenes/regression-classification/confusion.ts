import type { Scene } from '@graphlearning/flow'

// §5 — one order's chain from score to decision, over the confusion matrix for 1,000 validation
// orders at threshold 0.5 (150 late): TP 90, FN 60, FP 70, TN 780.
export const confusion: Scene = {
  id: 'confusion',
  title: 'Score, probability, label, decision',
  flow: 'TB',
  nodes: [
    {
      id: 'chain',
      label: 'One order, in reading order',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'score', label: '1 · Score', sub: 'w·x + b = 1.4', pattern: 'storage', icon: 'hash' },
        { id: 'prob', label: '2 · Probability', sub: 'σ(1.4) = 0.80', pattern: 'service', icon: 'gauge' },
        { id: 'label', label: '3 · Label', sub: 'late, at ≥ 0.5', pattern: 'network', icon: 'tag' },
        { id: 'decision', label: '4 · Decision', sub: 'offer express', pattern: 'user', icon: 'zap' },
      ],
    },
    {
      id: 'matrix',
      kind: 'table',
      label: 'Confusion matrix · 1,000 validation orders',
      headers: ['', 'predicted late', 'predicted on time', 'total'],
      values: [
        ['actually late', 'TP 90', 'FN 60', '150'],
        ['actually on time', 'FP 70', 'TN 780', '850'],
        ['total', '160', '840', '1,000'],
      ],
    },
    {
      id: 'rates',
      label: 'Read off the matrix',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'precision', label: 'Precision 0.56', sub: '90 / 160 flagged', pattern: 'service', icon: 'search' },
        { id: 'recall', label: 'Recall 0.60', sub: '90 / 150 late', pattern: 'network', icon: 'circlecheck' },
        { id: 'accuracy', label: 'Accuracy 0.87', sub: 'all on time: 0.85', pattern: 'warn', icon: 'scale' },
      ],
    },
  ],
  edges: [
    { source: 'chain', target: 'matrix', label: 'for every order' },
    { source: 'matrix', target: 'rates' },
  ],
}
