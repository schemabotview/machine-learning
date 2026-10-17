import type { Scene } from '@graphlearning/flow'

// §3 — nested evaluation. Each outer fold runs its own inner search on its training part and scores
// the chosen settings on its held-out part. The inner best score (0.30) is optimistic; the outer
// mean (0.33) estimates the whole procedure. The final test set is not involved at all.
export const nested: Scene = {
  id: 'nested',
  title: 'Evaluate the choosing, too',
  flow: 'TB',
  nodes: [
    {
      id: 'loops',
      label: 'One outer fold',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'outer-train', label: 'Outer train', sub: 'inner CV picks settings', pattern: 'service', icon: 'repeat' },
        { id: 'outer-test', label: 'Outer held-out', sub: 'scores that choice', pattern: 'network', icon: 'gauge' },
      ],
    },
    {
      id: 'outer',
      kind: 'table',
      label: 'Outer folds · log loss',
      headers: ['outer fold', 'settings chosen inside', 'inner best', 'outer score'],
      values: [
        ['1', 'η 0.03 · 15 leaves', '0.29', '0.34'],
        ['2', 'η 0.03 · 15 leaves', '0.30', '0.32'],
        ['3', 'η 0.10 · 15 leaves', '0.30', '0.35'],
        ['4', 'η 0.03 · 31 leaves', '0.31', '0.33'],
        ['5', 'η 0.03 · 15 leaves', '0.30', '0.31'],
        ['mean', '', '0.30', '0.33 ± 0.02'],
      ],
    },
    { id: 'locked', label: 'Final test set', sub: 'locked until the end', pattern: 'warn', icon: 'lock' },
  ],
  edges: [
    { source: 'loops', target: 'outer', label: 'repeat for 5 outer folds' },
    { source: 'outer', target: 'locked', label: 'still untouched' },
  ],
}
