import type { Scene } from '@graphlearning/flow'

// §1 — a depth-2 late-risk tree on 100 training orders (30 late), with the root split's arithmetic.
// Root Gini = 1 − (0.3² + 0.7²) = 0.42. Distance ≤ 8: left 60 (6 late, Gini 0.18), right 40 (24 late,
// Gini 0.48); weighted 0.6 × 0.18 + 0.4 × 0.48 = 0.30, gain 0.12. Rush hour: 50 / 50 with 20 and 10
// late, weighted 0.40, gain 0.02 — so distance wins. Leaves predict their late fraction.
export const treeSplit: Scene = {
  id: 'tree-split',
  title: 'Grow by the best split',
  flow: 'TB',
  nodes: [
    {
      id: 'candidates',
      kind: 'table',
      label: 'Candidate root splits · 100 orders, Gini 0.42',
      headers: ['split', 'left', 'right', 'weighted Gini', 'gain'],
      values: [
        ['distance ≤ 8 km', '60 · 6 late', '40 · 24 late', '0.30', '0.12'],
        ['rush hour', '50 · 20 late', '50 · 10 late', '0.40', '0.02'],
      ],
    },
    { id: 'root', label: 'distance ≤ 8 km?', sub: '100 orders, 30 late', pattern: 'storage', icon: 'ruler' },
    { id: 'near', label: 'P(late) 0.10', sub: '60 orders, 6 late', pattern: 'service', icon: 'circlecheck' },
    { id: 'far', label: 'rush hour?', sub: '40 orders, 24 late', pattern: 'storage', icon: 'clock' },
    { id: 'far-rush', label: 'P(late) 0.80', sub: '20 orders, 16 late', pattern: 'warn', icon: 'zap' },
    { id: 'far-calm', label: 'P(late) 0.40', sub: '20 orders, 8 late', pattern: 'network', icon: 'gauge' },
  ],
  edges: [
    { source: 'candidates', target: 'root', label: 'best gain' },
    { source: 'root', target: 'near', label: 'yes' },
    { source: 'root', target: 'far', label: 'no' },
    { source: 'far', target: 'far-rush', label: 'yes' },
    { source: 'far', target: 'far-calm', label: 'no' },
  ],
}
