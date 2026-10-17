import type { Scene } from '@graphlearning/flow'

// §7 — the confounded history: the old policy offered express on far orders, distance makes orders
// late, so "express" predicts lateness without causing it. Distance points at the ROW holding the
// other two — edges into a nested container's cards cross its header, an edge to the box does not.
export const predictionVsCause: Scene = {
  id: 'prediction-vs-cause',
  title: 'Prediction versus intervention',
  flow: 'TB',
  nodes: [
    {
      id: 'questions',
      label: 'Two different questions',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'predict', label: 'Will it be late?', sub: 'under current policy', pattern: 'service', icon: 'gauge' },
        { id: 'intervene', label: 'Does express help?', sub: 'if we change policy', pattern: 'warn', icon: 'zap' },
      ],
    },
    {
      id: 'history',
      label: 'How the history was made',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'distance', label: 'Distance', sub: 'the common cause', pattern: 'storage', icon: 'ruler' },
        {
          id: 'downstream',
          label: 'Correlated in the data',
          pattern: 'group',
          flow: 'LR',
          children: [
            { id: 'express', label: 'Express offer', sub: 'old policy: far only', pattern: 'external', icon: 'package' },
            { id: 'lateness', label: 'Late delivery', sub: 'the outcome', pattern: 'warn', icon: 'clock' },
          ],
          edges: [{ source: 'express', target: 'lateness', label: 'effect?', dashed: true }],
        },
      ],
      edges: [{ source: 'distance', target: 'downstream', label: 'drives both' }],
    },
  ],
  edges: [{ source: 'questions', target: 'history', label: 'same data' }],
}
