import type { Scene } from '@graphlearning/flow'

// §6 — the course's three tasks side by side: each kept its own contract and its own kind of evidence.
export const separateValidation: Scene = {
  id: 'separate-validation',
  title: 'Three tasks, three kinds of evidence',
  flow: 'TB',
  nodes: [
    {
      id: 'tasks',
      label: 'Recommendations, validated separately',
      pattern: 'group',
      cols: 3,
      children: [
        {
          id: 'late',
          label: 'Late risk',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'late-kind', label: 'Supervised', sub: 'labels after delivery', pattern: 'service', icon: 'gauge' },
            { id: 'late-ev', label: 'Test log loss', sub: '0.32, once', pattern: 'service', icon: 'lock' },
            { id: 'late-use', label: 'Use', sub: 'express offer', pattern: 'service', icon: 'zap' },
          ],
        },
        {
          id: 'segments',
          label: 'Customer segments',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'seg-kind', label: 'Discovery', sub: 'no labels at all', pattern: 'network', icon: 'users' },
            { id: 'seg-ev', label: 'Stability 0.91', sub: 'and domain review', pattern: 'network', icon: 'repeat' },
            { id: 'seg-use', label: 'Use', sub: 'campaign planning', pattern: 'network', icon: 'tag' },
          ],
        },
        {
          id: 'unusual',
          label: 'Unusual orders',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'un-kind', label: 'Detection', sub: 'labels from review', pattern: 'warn', icon: 'search' },
            { id: 'un-ev', label: '31 % confirmed', sub: 'at 50 alerts a day', pattern: 'warn', icon: 'circlecheck' },
            { id: 'un-use', label: 'Use', sub: 'data-quality hold', pattern: 'warn', icon: 'bug' },
          ],
        },
      ],
    },
    {
      id: 'next',
      label: 'Next: companion courses',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'mlops', label: 'MLOps', sub: 'serve, monitor, retrain', pattern: 'external', icon: 'server' },
        { id: 'dl', label: 'Deep Learning', sub: 'neural mechanisms', pattern: 'external', icon: 'brain' },
        { id: 'stats', label: 'Statistics', sub: 'experiments, causality', pattern: 'external', icon: 'sigma' },
      ],
    },
  ],
  edges: [{ source: 'tasks', target: 'next' }],
}
