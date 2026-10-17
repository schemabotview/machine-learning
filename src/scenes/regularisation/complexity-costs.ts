import type { Scene } from '@graphlearning/flow'

// §7 — candidates compared on one set of splits, one tuning budget and one machine (illustrative
// figures). Accuracy alone would pick the last row; the costs say whether that gain is worth it.
export const complexityCosts: Scene = {
  id: 'complexity-costs',
  title: 'What capacity costs',
  flow: 'TB',
  nodes: [
    {
      id: 'costs',
      kind: 'table',
      label: 'Same 5 folds, same 20-trial budget, same machine',
      headers: ['pipeline', 'val MAE', 'fit', 'predict / 1k', 'size'],
      values: [
        ['median by zone', '19.5', '0.1 s', '0.1 ms', '1 KB'],
        ['linear', '9.4', '0.4 s', '0.2 ms', '2 KB'],
        ['cubic + ridge', '8.7', '1.6 s', '0.4 ms', '9 KB'],
        ['degree 8 + ridge', '8.6', '22 s', '3.1 ms', '310 KB'],
      ],
    },
    {
      id: 'fair',
      label: 'A comparison is valid only if',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'splits', label: 'Same splits', sub: 'identical folds', pattern: 'service', icon: 'copy' },
        { id: 'budget', label: 'Same budget', sub: 'trials per candidate', pattern: 'network', icon: 'clock' },
        { id: 'machine', label: 'Same machine', sub: 'times are relative', pattern: 'external', icon: 'cpu' },
        { id: 'spread', label: 'Spread shown', sub: 'not one lucky fold', pattern: 'warn', icon: 'barchart' },
      ],
    },
  ],
  edges: [{ source: 'costs', target: 'fair', label: 'only if' }],
}
