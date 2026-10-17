import type { Scene } from '@graphlearning/flow'

// §1 — methods that shrink a feature table, by what they keep and what they optimise. Only the
// first uses the target; the rest preserve some property of the inputs alone.
export const reduceChoices: Scene = {
  id: 'reduce-choices',
  title: 'Keep columns, or build new ones',
  flow: 'TB',
  nodes: [
    {
      id: 'methods',
      kind: 'table',
      label: 'What each method keeps and optimises',
      headers: ['method', 'output', 'objective', 'uses y?'],
      values: [
        ['lasso selection', 'original columns', 'prediction loss', 'yes'],
        ['variance threshold', 'original columns', 'drop near-constant', 'no'],
        ['PCA', 'new combinations', 'retained variance', 'no'],
        ['truncated SVD', 'new combinations', 'reconstruction, sparse', 'no'],
        ['NMF', 'additive parts', 'non-negative fit', 'no'],
        ['t-SNE / UMAP', 'a 2-D picture', 'local neighbourhoods', 'no'],
      ],
    },
    {
      id: 'paths',
      label: 'Six features, two routes to two',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'select',
          label: 'Selection',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'keep-dist', label: 'distance_km', sub: 'kept as is', pattern: 'service', icon: 'ruler' },
            { id: 'keep-rush', label: 'rush_hour', sub: 'kept as is', pattern: 'service', icon: 'clock' },
          ],
        },
        {
          id: 'extract',
          label: 'Extraction',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'pc1', label: 'Component 1', sub: 'weighted mix of all 6', pattern: 'network', icon: 'merge' },
            { id: 'pc2', label: 'Component 2', sub: 'another mix of all 6', pattern: 'network', icon: 'merge' },
          ],
        },
      ],
    },
  ],
  edges: [{ source: 'methods', target: 'paths', label: 'for example' }],
}
