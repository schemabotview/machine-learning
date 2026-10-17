import type { Scene } from '@graphlearning/flow'

// §7 — acting on predictions changes the labels the next model learns from. A small random holdout
// that receives no intervention keeps an honest measurement (illustrative rates).
export const feedback: Scene = {
  id: 'feedback',
  title: 'The model changes its own data',
  flow: 'TB',
  nodes: [
    {
      id: 'loop',
      label: 'The loop',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'predict', label: '1 · High risk', sub: 'P(late) above 0.3', pattern: 'service', icon: 'gauge' },
        { id: 'act', label: '2 · Intervene', sub: 'express shipping', pattern: 'user', icon: 'zap' },
        { id: 'label', label: '3 · New label', sub: 'arrived on time', pattern: 'network', icon: 'tag' },
        { id: 'retrain', label: '4 · Retrain', sub: '"high risk is fine"', pattern: 'warn', icon: 'repeat' },
      ],
    },
    {
      id: 'holdout',
      kind: 'table',
      label: 'Flagged orders, one month',
      headers: ['group', 'orders', 'late rate', 'what it measures'],
      values: [
        ['flagged, express given', '9,500', '0.09', 'risk after intervention'],
        ['flagged, random 5 % holdout', '500', '0.41', 'risk without it'],
      ],
    },
    {
      id: 'review',
      label: 'Human review in the loop',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'override', label: 'Overrides', sub: 'logged with a reason', pattern: 'service', icon: 'pencil' },
        { id: 'automation', label: 'Automation bias', sub: 'audit agreed cases', pattern: 'warn', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'loop', target: 'holdout', label: 'keep a holdout' },
    { source: 'holdout', target: 'review' },
  ],
}
