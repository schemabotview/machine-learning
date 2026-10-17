import type { Scene } from '@graphlearning/flow'

// §1 — the as-of customer summary every clustering in this chapter starts from, and four different
// definitions of what "a cluster" is.
export const clusterDefinitions: Scene = {
  id: 'cluster-definitions',
  title: 'What counts as a group?',
  flow: 'TB',
  nodes: [
    {
      id: 'summary',
      kind: 'table',
      label: 'Customer summary as of 2025-03-31 · training customers',
      headers: ['customer', 'orders 90d', 'mean basket', 'late share', 'zone'],
      values: [
        ['c-07', '11', '£22', '0.18', 'north'],
        ['c-12', '2', '£71', '0.00', 'east'],
        ['c-31', '6', '£34', '0.33', 'north'],
        ['c-44', '0', '—', '—', 'south'],
        ['c-58', '9', '£19', '0.11', 'south'],
      ],
    },
    {
      id: 'kinds',
      label: 'Four definitions of a cluster',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'centroid', label: 'Centroid', sub: 'near a centre: k-means', pattern: 'service', icon: 'search' },
        { id: 'connect', label: 'Connectivity', sub: 'merged by links', pattern: 'network', icon: 'link' },
        { id: 'density', label: 'Density', sub: 'dense regions: DBSCAN', pattern: 'external', icon: 'boxes' },
        { id: 'model', label: 'Model-based', sub: 'a mixture component', pattern: 'user', icon: 'sigma' },
      ],
    },
  ],
  edges: [{ source: 'summary', target: 'kinds', label: 'scale, then choose a definition' }],
}
