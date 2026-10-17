import type { Scene } from '@graphlearning/flow'

// §5 — six raw rows that hide three of the four defects (a retry duplicate, one customer three times,
// mixed timezones), above the four checks that catch them.
export const sampleChecks: Scene = {
  id: 'sample-checks',
  title: 'What the rows hide',
  flow: 'TB',
  padding: 0.17, // tall board: keep the table clear of the eyebrow
  nodes: [
    {
      id: 'rows',
      kind: 'table',
      label: 'orders — raw extract',
      headers: ['order_id', 'customer', 'placed_at', 'zone'],
      values: [
        ['A-1041', 'c-07', '03-02 09:14 UTC', 'north'],
        ['A-1041', 'c-07', '03-02 09:14 UTC', 'north'],
        ['A-1042', 'c-07', '03-09 18:40 UTC', 'north'],
        ['A-1043', 'c-07', '03-15 12:05 UTC', 'north'],
        ['A-1044', 'c-12', '03-15 08:02 +05:30', 'east'],
        ['A-1045', 'c-31', '03-16 19:30 UTC', 'north'],
      ],
    },
    {
      id: 'checks',
      label: 'Four checks before any split',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'coverage', label: 'Coverage', sub: 'mostly one zone: claim narrows', pattern: 'service', icon: 'globe' },
        { id: 'duplicates', label: 'Duplicates', sub: 'retry copy of A-1041', pattern: 'warn', icon: 'copy' },
        { id: 'groups', label: 'Groups', sub: 'c-07 owns four rows', pattern: 'network', icon: 'users' },
        { id: 'timestamps', label: 'Timestamps', sub: 'mixed zones: use UTC', pattern: 'storage', icon: 'calendar' },
      ],
    },
  ],
  edges: [{ source: 'rows', target: 'checks', label: 'audit' }],
}
