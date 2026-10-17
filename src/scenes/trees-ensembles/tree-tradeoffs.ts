import type { Scene } from '@graphlearning/flow'

// §8 — late-risk candidates on grouped-temporal validation folds (illustrative), with the forest's
// out-of-bag estimate shown beside it: OOB rows are random rows, so it flatters a future-order claim.
export const treeTradeoffs: Scene = {
  id: 'tree-tradeoffs',
  title: 'Accuracy, probabilities, cost',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Grouped-temporal validation · late risk',
      headers: ['model', 'log loss', 'OOB log loss', 'size', 'predict / 1k'],
      values: [
        ['logistic', '0.36', '—', '4 KB', '0.2 ms'],
        ['one tree, depth 4', '0.37', '—', '3 KB', '0.1 ms'],
        ['forest, 500', '0.33', '0.27', '180 MB', '45 ms'],
        ['hist boosting, 300', '0.31', '—', '2 MB', '6 ms'],
      ],
    },
    {
      id: 'notes',
      label: 'Before choosing',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'oob', label: 'OOB is optimistic', sub: 'random rows, no time cut', pattern: 'warn', icon: 'ban' },
        { id: 'calib', label: 'Check calibration', sub: 'forests squeeze P', pattern: 'network', icon: 'gauge' },
        { id: 'cost', label: 'Count the cost', sub: 'size and latency', pattern: 'service', icon: 'cpu' },
        { id: 'same', label: 'Same folds', sub: 'for every candidate', pattern: 'user', icon: 'copy' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'notes' }],
}
