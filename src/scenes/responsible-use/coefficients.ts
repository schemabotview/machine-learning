import type { Scene } from '@graphlearning/flow'

// §2 — three "importance" readings of the same features that disagree (illustrative), and why.
export const coefficients: Scene = {
  id: 'coefficients',
  title: 'Three numbers called importance',
  flow: 'TB',
  nodes: [
    {
      id: 'readings',
      kind: 'table',
      label: 'Same features, three readings',
      headers: ['feature', 'ridge coef (scaled)', 'correlation with y', 'forest impurity'],
      values: [
        ['distance_km', '+5.1', '0.62', '0.31'],
        ['road_km', '+4.8', '0.61', '0.27'],
        ['rush_hour', '+6.3', '0.28', '0.12'],
        ['basket_items', '+0.9', '0.19', '0.16'],
        ['zone = east', '+3.0', '0.11', '0.05'],
      ],
    },
    {
      id: 'pitfalls',
      label: 'Why they disagree',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'units', label: 'Units', sub: 'compare scaled coefs', pattern: 'service', icon: 'ruler' },
        { id: 'twins', label: 'Twins', sub: 'credit is shared', pattern: 'network', icon: 'copy' },
        { id: 'marginal', label: 'Marginal', sub: 'correlation ignores rest', pattern: 'external', icon: 'link' },
        { id: 'train', label: 'Training data', sub: 'impurity: not held out', pattern: 'warn', icon: 'database' },
      ],
    },
  ],
  edges: [{ source: 'readings', target: 'pitfalls' }],
}
