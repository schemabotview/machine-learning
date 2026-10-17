import type { Scene } from '@graphlearning/flow'

// §6 — rows removed, as a running total (120,000 − 1,800 − 300 − 9,400 − 2,100 = 106,400), above the
// columns minimised for privacy. Together they are the documented boundary of the modelling dataset.
export const exclusionLog: Scene = {
  id: 'exclusion-log',
  title: 'Documented exclusions',
  flow: 'TB',
  nodes: [
    {
      id: 'exclusions',
      kind: 'table',
      label: 'Rows — exclusion log',
      headers: ['rule', 'removed', 'remaining'],
      values: [
        ['raw extract', '—', '120,000'],
        ['payment-retry duplicates', '1,800', '118,200'],
        ['delivered before checkout', '300', '117,900'],
        ['immature: under 10 days', '9,400', '108,500'],
        ['cancelled or lost', '2,100', '106,400'],
      ],
    },
    {
      id: 'fields',
      label: 'Columns — minimised',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'address', label: 'Address', sub: '→ delivery zone', pattern: 'network', icon: 'globe' },
        { id: 'customer', label: 'Customer id', sub: 'group key, not feature', pattern: 'storage', icon: 'fingerprint' },
        { id: 'contact', label: 'Contact details', sub: 'dropped: not needed', pattern: 'warn', icon: 'trash' },
        { id: 'notes', label: 'Free-text notes', sub: 'dropped: may hold PII', pattern: 'warn', icon: 'pencil' },
        { id: 'payment', label: 'Payment card', sub: 'never extracted', pattern: 'warn', icon: 'lock' },
        { id: 'kept', label: 'Fields kept', sub: 'each with a reason', pattern: 'service', icon: 'shieldcheck' },
      ],
    },
  ],
  edges: [{ source: 'exclusions', target: 'fields', label: 'then minimise' }],
}
