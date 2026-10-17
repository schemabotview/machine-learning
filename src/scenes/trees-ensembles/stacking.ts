import type { Scene } from '@graphlearning/flow'

// §6 — out-of-fold stacking: each base model's predictions for a training order come from a model
// that never saw that order, so the meta-model learns how to combine honest predictions.
export const stacking: Scene = {
  id: 'stacking',
  title: 'Combine honest predictions',
  flow: 'TB',
  nodes: [
    {
      id: 'bases',
      label: 'Base models, each refitted on 4 of 5 folds',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'lin', label: 'Linear', sub: 'smooth trends', pattern: 'service', icon: 'ruler' },
        { id: 'rf', label: 'Forest', sub: 'interactions', pattern: 'network', icon: 'tree' },
        { id: 'knn', label: 'k-NN', sub: 'local patterns', pattern: 'external', icon: 'users' },
        { id: 'gbm', label: 'Boosting', sub: 'residual structure', pattern: 'warn', icon: 'zap' },
      ],
    },
    {
      id: 'oof',
      kind: 'table',
      label: 'Out-of-fold predictions (minutes)',
      headers: ['order', 'fold', 'linear', 'forest', 'k-NN', 'boost', 'y'],
      values: [
        ['A-2001', '1', '52', '48', '50', '47', '49'],
        ['A-2002', '2', '61', '70', '66', '73', '72'],
        ['A-2003', '3', '44', '41', '47', '42', '40'],
        ['A-2004', '4', '80', '91', '85', '90', '94'],
        ['A-2005', '5', '58', '55', '61', '56', '57'],
      ],
    },
    { id: 'meta', label: 'Meta-model', sub: 'ridge on the 4 columns', pattern: 'user', icon: 'merge' },
  ],
  edges: [
    { source: 'bases', target: 'oof', label: 'predict the held-out fold' },
    { source: 'oof', target: 'meta', label: 'learn the weights' },
  ],
}
