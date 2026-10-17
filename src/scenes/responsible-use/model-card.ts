import type { Scene } from '@graphlearning/flow'

// §8 — the use boundaries written down: a short model card for the late-risk model, every number
// labelled with the evidence it is.
export const modelCard: Scene = {
  id: 'model-card',
  title: 'Write down the boundaries',
  flow: 'TB',
  nodes: [
    {
      id: 'card',
      kind: 'table',
      label: 'Model card · late-delivery risk at checkout',
      headers: ['field', 'entry'],
      values: [
        ['intended use', 'offer express when P(late) > 0.3'],
        ['not for', 'pricing, customer scoring, courier review'],
        ['data', 'checkout orders, 12 months, 3 zones'],
        ['claim', 'future orders; new customers checked separately'],
        ['test result', 'log loss 0.32 · final test, once'],
        ['subgroups', 'west recall 0.40 (25 late) · wide interval'],
        ['limits', 'new zones; policy feedback; batched scans'],
        ['owner · review', 'delivery analytics · every quarter'],
      ],
    },
    {
      id: 'habits',
      label: 'Keep it true',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'versioned', label: 'Versioned', sub: 'with the model', pattern: 'service', icon: 'history' },
        { id: 'reviewed', label: 'Reviewed', sub: 'when data changes', pattern: 'network', icon: 'repeat' },
      ],
    },
  ],
  edges: [{ source: 'card', target: 'habits' }],
}
