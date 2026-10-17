import type { Scene } from '@graphlearning/flow'

// §2 — an ablation: remove one feature group, refit the whole pipeline in the same folds, and record
// the change in CV MAE (illustrative). The budget and the groups are declared before the runs.
export const ablation: Scene = {
  id: 'ablation',
  title: 'Remove a part, measure the loss',
  flow: 'TB',
  nodes: [
    {
      id: 'runs',
      kind: 'table',
      label: 'Ablation · CV MAE (min), same 5 folds',
      headers: ['pipeline', 'CV MAE', 'change'],
      values: [
        ['full', '8.7', '—'],
        ['− as-of history', '9.6', '+0.9'],
        ['− rush hour', '9.9', '+1.2'],
        ['− zone', '8.9', '+0.2'],
        ['− basket size', '8.8', '+0.1'],
      ],
    },
    {
      id: 'rules',
      label: 'Search with a declared budget',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'budget', label: 'Budget first', sub: 'trials per family', pattern: 'service', icon: 'clock' },
        { id: 'select', label: 'Select inside', sub: 'selection is a fit step', pattern: 'network', icon: 'funnel' },
        { id: 'ablate', label: 'Ablate groups', sub: 'remove, refit, compare', pattern: 'external', icon: 'scissors' },
        { id: 'log', label: 'Log every trial', sub: 'not just the winner', pattern: 'user', icon: 'scroll' },
      ],
    },
  ],
  edges: [{ source: 'runs', target: 'rules', label: 'rules for the search' }],
}
