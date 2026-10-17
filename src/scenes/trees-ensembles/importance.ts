import type { Scene } from '@graphlearning/flow'

// §7 — impurity importance (computed on training data) inflates a high-cardinality noise column;
// permutation importance on validation data exposes it (illustrative values).
export const importance: Scene = {
  id: 'importance',
  title: 'Importance that misleads',
  flow: 'TB',
  nodes: [
    {
      id: 'compare',
      kind: 'table',
      label: 'Two importance measures, one forest',
      headers: ['feature', 'impurity (train)', 'permutation (validation)'],
      values: [
        ['distance_km', '0.38', '0.31'],
        ['order_hash (random)', '0.21', '0.00'],
        ['rush_hour', '0.14', '0.12'],
        ['zone', '0.12', '0.09'],
        ['basket_items', '0.15', '0.04'],
      ],
    },
    {
      id: 'support',
      label: 'Missing values and categories',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'hgb', label: 'Hist boosting', sub: 'learns where NaN goes', pattern: 'service', icon: 'boxes' },
        { id: 'cats', label: 'Categories', sub: 'native, if declared', pattern: 'network', icon: 'tag' },
        { id: 'others', label: 'Other trees', sub: 'support varies by version', pattern: 'warn', icon: 'search' },
        { id: 'impute', label: 'Otherwise', sub: 'impute inside the pipeline', pattern: 'external', icon: 'wrench' },
      ],
    },
  ],
  edges: [{ source: 'compare', target: 'support' }],
}
