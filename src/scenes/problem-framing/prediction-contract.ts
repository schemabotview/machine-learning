import type { Scene } from '@graphlearning/flow'

// §2 — the order's timeline down the left (prediction time is a point on it), and the contract that
// point fixes on the right, as a table: the two tasks share a unit and a prediction time, not a target.
export const predictionContract: Scene = {
  id: 'prediction-contract',
  title: 'The prediction contract',
  flow: 'LR',
  nodes: [
    {
      id: 'timeline',
      label: 'One order, in time',
      pattern: 'group',
      flow: 'TB',
      children: [
        { id: 'checkout', label: 'Checkout', sub: 't₀ · predict here', pattern: 'user', icon: 'clock' },
        { id: 'dispatch', label: 'Dispatch', sub: 'after t₀ — unseen', pattern: 'warn', icon: 'package' },
        { id: 'delivered', label: 'Delivered', sub: 'the outcome happens', pattern: 'storage', icon: 'circlecheck' },
        { id: 'mature', label: 'Label usable', sub: 'after the window', pattern: 'service', icon: 'calendar' },
      ],
      edges: [
        { source: 'checkout', target: 'dispatch' },
        { source: 'dispatch', target: 'delivered' },
        { source: 'delivered', target: 'mature' },
      ],
    },
    {
      id: 'contract',
      kind: 'table',
      label: 'Contract fixed at checkout',
      headers: ['element', 'duration task', 'late-risk task'],
      values: [
        ['unit', 'one order', 'one order'],
        ['target', 'minutes to door', 'after the promise?'],
        ['output', 'a number', 'a probability'],
        ['prediction time', 'checkout click', 'checkout click'],
        ['features', 'known at checkout', 'known at checkout'],
        ['decision', 'promise shown', 'express offer'],
        ['costly error', 'promise too short', 'missed late order'],
        ['claim', 'future orders', 'future orders'],
        ['baseline', 'median by zone', 'base late rate'],
      ],
    },
  ],
  edges: [{ source: 'timeline', target: 'contract', label: 't₀ fixes' }],
}
