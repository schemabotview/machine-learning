import type { Scene } from '@graphlearning/flow'

// §1 — the separately specified unusual-order task: what "unusual" is relative to, what happens to a
// flagged order, and what a flag does NOT claim.
export const contract: Scene = {
  id: 'unusual-contract',
  title: 'Unusual compared with what?',
  flow: 'TB',
  nodes: [
    {
      id: 'spec',
      kind: 'table',
      label: 'The unusual-order contract',
      headers: ['element', 'decision'],
      values: [
        ['unit', 'one order, at checkout'],
        ['reference population', 'checkout orders, same zone, last 90 days'],
        ['features', 'items, basket value, distance, hour'],
        ['action', 'hold for a data-quality check'],
        ['budget', 'at most 50 reviews a day'],
        ['not claimed', 'fraud, intent, or wrongdoing'],
      ],
    },
    {
      id: 'kinds',
      label: 'What an unusual order can be',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'rare', label: 'Rare, legitimate', sub: '40 items for an office', pattern: 'service', icon: 'building' },
        { id: 'corrupt', label: 'Corrupt record', sub: '30 items, basket £0', pattern: 'warn', icon: 'bug' },
        { id: 'change', label: 'Process change', sub: 'a new zone opens', pattern: 'network', icon: 'globe' },
        { id: 'unknown', label: 'Unexplained', sub: 'review, then label', pattern: 'external', icon: 'search' },
      ],
    },
  ],
  edges: [{ source: 'spec', target: 'kinds', label: 'a flag can be any of these' }],
}
