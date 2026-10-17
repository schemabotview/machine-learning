import type { Scene } from '@graphlearning/flow'

// §4 — learned state flows one way: fitted on the training fold, then reused unchanged on the
// validation fold. The code card is the same flow in scikit-learn.
export const foldState: Scene = {
  id: 'fold-state',
  title: 'State is learned once, on train',
  flow: 'LR',
  nodes: [
    {
      id: 'flow',
      label: 'One fold',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'train-fold', label: 'Training fold', sub: 'X_train', pattern: 'storage', icon: 'database' },
        { id: 'fit', label: 'fit', sub: 'learn from train only', pattern: 'service', icon: 'gears' },
        { id: 'state', label: 'Learned state', sub: 'mean 10.2, sd 5.0 km', pattern: 'service', icon: 'memory' },
        { id: 'transform', label: 'transform', sub: 'train and validation', pattern: 'network', icon: 'swap' },
        { id: 'predict', label: 'predict', sub: 'validation evidence', pattern: 'user', icon: 'gauge' },
      ],
      edges: [
        { source: 'train-fold', target: 'fit' },
        { source: 'fit', target: 'state' },
        { source: 'state', target: 'transform' },
        { source: 'transform', target: 'predict' },
      ],
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'fold.py',
      label: `scaler = StandardScaler()
scaler.fit(X_train)           # learns mean_, scale_

Z_train = scaler.transform(X_train)
Z_val = scaler.transform(X_val)   # reuses train state

# leak: scaler.fit(X_all) before splitting —
# validation rows would shape their own transform`,
    },
  ],
  edges: [{ source: 'flow', target: 'code', label: 'in code' }],
}
