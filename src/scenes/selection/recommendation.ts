import type { Scene } from '@graphlearning/flow'

// §8 — the closing sequence of a model-selection workflow, and the record that goes with the choice.
// Every number is labelled with the evidence it is.
export const recommendation: Scene = {
  id: 'recommendation',
  title: 'Refit once, test once, say what it means',
  flow: 'TB',
  nodes: [
    {
      id: 'sequence',
      label: 'The closing sequence',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'choose', label: '1 · Choose', sub: 'on CV, within budget', pattern: 'service', icon: 'search' },
        { id: 'refit', label: '2 · Refit', sub: 'on all development data', pattern: 'network', icon: 'gears' },
        { id: 'test', label: '3 · Test once', sub: 'the locked test set', pattern: 'warn', icon: 'lock' },
        { id: 'report', label: '4 · Report', sub: 'numbers with labels', pattern: 'user', icon: 'scroll' },
      ],
    },
    {
      id: 'record',
      kind: 'table',
      label: 'Recommendation record · late risk',
      headers: ['item', 'value', 'evidence'],
      values: [
        ['pipeline', 'hist boosting, η 0.03, 15 leaves', 'chosen on CV'],
        ['CV log loss', '0.31 ± 0.02', 'selection evidence'],
        ['nested estimate', '0.33 ± 0.02', 'procedure estimate'],
        ['test log loss', '0.32', 'final test, once'],
        ['calibration', 'isotonic, separate split', 'reliability checked'],
        ['threshold', '0.3 (cost) or 0.4 (capacity)', 'validation'],
        ['known limit', 'new zones: 61 % coverage', 'slice evidence'],
      ],
    },
  ],
  edges: [{ source: 'sequence', target: 'record', label: 'written down' }],
}
