import type { Scene } from '@graphlearning/flow'

// §4 — every number with its kind of evidence, then the one final-test row and what it leaves open.
export const finalTest: Scene = {
  id: 'final-test',
  title: 'One test, honestly labelled',
  flow: 'TB',
  nodes: [
    {
      id: 'evidence',
      kind: 'table',
      label: 'Evidence ladder · chosen pipeline',
      headers: ['number', 'value', 'kind of evidence'],
      values: [
        ['training log loss', '0.22', 'training observation'],
        ['CV log loss, best of 20', '0.31 ± 0.02', 'selection evidence'],
        ['nested CV', '0.33 ± 0.02', 'procedure estimate'],
        ['test log loss, Feb–Mar', '0.32', 'final test, once'],
        ['test cost at t = 0.3', '£628 per 1,000', 'final test, once'],
        ['test recall, west zone', '0.40 (25 late)', 'final test, wide interval'],
      ],
    },
    {
      id: 'open',
      label: 'What the test does not settle',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'season', label: 'Seasons', sub: 'two months only', pattern: 'warn', icon: 'calendar' },
        { id: 'zones', label: 'New zones', sub: 'too few orders', pattern: 'warn', icon: 'globe' },
        { id: 'policy', label: 'Policy effect', sub: 'needs the holdout', pattern: 'network', icon: 'zap' },
        { id: 'drift', label: 'Later drift', sub: 'monitoring: MLOps', pattern: 'external', icon: 'history' },
      ],
    },
  ],
  edges: [{ source: 'evidence', target: 'open' }],
}
