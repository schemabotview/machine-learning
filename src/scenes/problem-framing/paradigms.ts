import type { Scene } from '@graphlearning/flow'

// §1 — one checkout question fanned out into the two learning paradigms and the rules/baselines a
// model has to beat. Three columns of four keep the board near the pane's ~1:1 aspect.
export const paradigms: Scene = {
  id: 'paradigms',
  title: 'Two paradigms and the bar to beat',
  flow: 'TB',
  nodes: [
    { id: 'question', label: 'Checkout data', sub: 'orders, customers, outcomes', pattern: 'storage', icon: 'database' },
    {
      id: 'supervised',
      label: 'Supervised — a target exists',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'duration', label: 'Duration', sub: 'regression, minutes', pattern: 'service', icon: 'clock' },
        { id: 'late', label: 'Late risk', sub: 'classification, P(late)', pattern: 'service', icon: 'gauge' },
        { id: 'labels', label: 'Needs labels', sub: 'observed outcomes', pattern: 'service', icon: 'tag' },
        { id: 'scored', label: 'Scored on', sub: 'held-out outcomes', pattern: 'service', icon: 'circlecheck' },
      ],
    },
    {
      id: 'unsupervised',
      label: 'Unsupervised — no target',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'groups', label: 'Customer groups', sub: 'clustering', pattern: 'network', icon: 'users' },
        { id: 'compress', label: 'Compressed features', sub: 'dimension reduction', pattern: 'network', icon: 'layers' },
        { id: 'unusual', label: 'Unusual orders', sub: 'anomaly scores', pattern: 'network', icon: 'search' },
        { id: 'judged', label: 'Judged by', sub: 'usefulness, not accuracy', pattern: 'network', icon: 'scale' },
      ],
    },
    {
      id: 'baselines',
      label: 'Rules and baselines',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'sla', label: 'Carrier SLA', sub: 'promised-days table', pattern: 'external', icon: 'scroll' },
        { id: 'median', label: 'Median by zone', sub: 'duration baseline', pattern: 'external', icon: 'sigma' },
        { id: 'majority', label: 'Base rate', sub: 'late-risk baseline', pattern: 'external', icon: 'chartpie' },
        { id: 'bar', label: 'The bar', sub: 'a model must beat it', pattern: 'warn', icon: 'ruler' },
      ],
    },
  ],
  edges: [
    { source: 'question', target: 'supervised', label: 'predict' },
    { source: 'question', target: 'unsupervised', label: 'discover' },
    { source: 'question', target: 'baselines', label: 'compare' },
  ],
}
