import type { Scene } from '@graphlearning/flow'

// §7 — two models with the SAME ranking (B's probabilities are a monotone stretch of A's), so AUC is
// identical while log loss and Brier score separate them. Below: one-of-many versus many-at-once.
export const probabilityQuality: Scene = {
  id: 'probability-quality',
  title: 'Ranking is not probability quality',
  flow: 'TB',
  nodes: [
    {
      id: 'compare',
      kind: 'table',
      label: 'Validation evidence, same ranking',
      headers: ['metric', 'model A', 'model B', 'measures'],
      values: [
        ['ROC AUC', '0.87', '0.87', 'ranking'],
        ['log loss', '0.33', '0.52', 'probabilities'],
        ['Brier score', '0.10', '0.17', 'probabilities'],
        ['mean P(late)', '0.15', '0.27', 'vs base rate 0.15'],
      ],
    },
    {
      id: 'structure',
      label: 'Output structure',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'multiclass',
          label: 'Multiclass — one of',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'early', label: 'Early', sub: 'P = 0.20', pattern: 'service', icon: 'zap' },
            { id: 'ontime', label: 'On time', sub: 'P = 0.65', pattern: 'service', icon: 'circlecheck' },
            { id: 'lateclass', label: 'Late', sub: 'P = 0.15 · softmax: sum 1', pattern: 'service', icon: 'clock' },
          ],
        },
        {
          id: 'multilabel',
          label: 'Multilabel — any of',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'latelabel', label: 'Late', sub: 'P = 0.15', pattern: 'network', icon: 'clock' },
            { id: 'damaged', label: 'Damaged', sub: 'P = 0.04', pattern: 'network', icon: 'package' },
            { id: 'missing', label: 'Item missing', sub: 'P = 0.02 · each its own', pattern: 'network', icon: 'search' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'compare', target: 'structure', label: 'beyond yes / no' }],
}
