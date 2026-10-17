import type { Scene } from '@graphlearning/flow'

// §1 — the late-risk task's manifest: everything a second person needs to rebuild the same evaluation,
// fixed before any candidate is compared. Values restate chapters 1–2.
export const manifest: Scene = {
  id: 'manifest',
  title: 'Fix the ground first',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Task manifest · late-delivery risk',
      headers: ['item', 'entry'],
      values: [
        ['unit · target', 'one order · delivered after the promise shown'],
        ['prediction time', 'the checkout click'],
        ['claim', 'future orders; new customers checked separately'],
        ['data', 'snapshot 2025-03-31, 106,400 orders after exclusions'],
        ['split', 'temporal: develop to Jan, test Feb–Mar, locked'],
        ['baseline', 'zone base rate · log loss 0.41'],
        ['metric', 'log loss; cost at threshold; subgroup recall'],
      ],
    },
    {
      id: 'pinned',
      label: 'Pinned before comparing',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'snapshot', label: 'Data snapshot', sub: 'versioned, hashed', pattern: 'storage', icon: 'database' },
        { id: 'splitdef', label: 'Split code', sub: 'not a saved index', pattern: 'service', icon: 'code' },
        { id: 'base', label: 'Baseline', sub: 'scored the same way', pattern: 'external', icon: 'ruler' },
        { id: 'metric', label: 'Metric', sub: 'named before results', pattern: 'user', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'pinned' }],
}
