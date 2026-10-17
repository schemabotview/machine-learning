import type { Scene } from '@graphlearning/flow'

// §6 — two zones with different true late rates (0.12 and 0.24). With the same calibrated model and one
// threshold, flag rates and precision differ; forcing equal flag rates moves recall instead. The table
// is illustrative; the point is that the criteria cannot all be equal when base rates differ.
export const fairness: Scene = {
  id: 'fairness',
  title: 'Fair by which measure?',
  flow: 'TB',
  nodes: [
    {
      id: 'criteria',
      kind: 'table',
      label: 'Two zones, base late rates 0.12 and 0.24',
      headers: ['policy', 'zone', 'flag rate', 'recall', 'precision'],
      values: [
        ['one threshold, calibrated', 'A', '0.14', '0.62', '0.53'],
        ['one threshold, calibrated', 'B', '0.29', '0.71', '0.59'],
        ['equal flag rates (0.20)', 'A', '0.20', '0.75', '0.45'],
        ['equal flag rates (0.20)', 'B', '0.20', '0.55', '0.66'],
      ],
    },
    {
      id: 'context',
      label: 'Before choosing a criterion',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'proxy', label: 'Proxies', sub: 'zone can stand in', pattern: 'warn', icon: 'link' },
        { id: 'harm', label: 'Harm', sub: 'who bears each error?', pattern: 'network', icon: 'users' },
        { id: 'privacy', label: 'Privacy', sub: 'measure with care', pattern: 'service', icon: 'lock' },
        { id: 'law', label: 'Law and policy', sub: 'not settled here', pattern: 'external', icon: 'scale' },
      ],
    },
  ],
  edges: [{ source: 'criteria', target: 'context', label: 'a choice, in context' }],
}
