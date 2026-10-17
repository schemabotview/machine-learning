import type { Scene } from '@graphlearning/flow'

// §3 — bagging and feature subsampling: many decorrelated trees, averaged. The table compares one tree
// with a forest across 10 random seeds (illustrative): similar typical error, far less seed variance.
export const forest: Scene = {
  id: 'forest',
  title: 'Many trees, averaged',
  flow: 'TB',
  nodes: [
    { id: 'fold', label: 'Training fold', sub: 'n orders', pattern: 'storage', icon: 'database' },
    {
      id: 'trees',
      label: 'Each tree: bootstrap rows, random features per split',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 't1', label: 'Tree 1', sub: 'resample 1', pattern: 'service', icon: 'tree' },
        { id: 't2', label: 'Tree 2', sub: 'resample 2', pattern: 'service', icon: 'tree' },
        { id: 't500', label: 'Tree 500', sub: 'resample 500', pattern: 'service', icon: 'tree' },
      ],
    },
    { id: 'average', label: 'Average', sub: 'mean of 500 predictions', pattern: 'user', icon: 'sigma' },
    {
      id: 'seeds',
      kind: 'table',
      label: 'Validation MAE over 10 seeds',
      headers: ['', 'one deep tree', 'forest, 500 trees'],
      values: [
        ['mean', '12.4 min', '9.1 min'],
        ['spread (sd)', '1.8 min', '0.2 min'],
      ],
    },
  ],
  edges: [
    { source: 'fold', target: 'trees', label: 'bootstrap' },
    { source: 'trees', target: 'average' },
    { source: 'average', target: 'seeds', label: 'vs one tree' },
  ],
}
