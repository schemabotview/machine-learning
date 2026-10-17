import type { Scene } from '@graphlearning/flow'

// §3 — validation MAE (illustrative) for a baseline, an honest model and a leaky one, beside the
// audit that explains the leaky score. A result far better than the baseline is the first symptom.
export const leakageAudit: Scene = {
  id: 'leakage-audit',
  title: 'Too good to be true',
  flow: 'TB',
  nodes: [
    {
      id: 'scores',
      kind: 'evolution',
      label: 'Validation MAE',
      evolution: {
        unit: 'validation MAE (minutes)',
        stages: [
          { label: 'Median by zone', sub: 'baseline', value: 41, valueLabel: '41 min', items: ['no model', 'the bar'] },
          { label: 'Linear model', sub: 'checkout features', value: 33, valueLabel: '33 min', items: ['−8 vs bar', 'plausible'] },
          { label: 'Leaky model', sub: 'courier + scans', value: 6, valueLabel: '6 min', items: ['−35 vs bar', 'impossible'], pattern: 'warn' },
        ],
      },
    },
    {
      id: 'audit',
      kind: 'table',
      label: 'Feature audit: known at checkout?',
      headers: ['feature', 'known at t₀', 'verdict'],
      values: [
        ['distance_km', 'yes', 'keep'],
        ['promise_min', 'yes', 'keep'],
        ['courier_id', 'no: dispatch', 'leak'],
        ['scan_count', 'no: in transit', 'leak'],
        ['zone_avg_all', 'uses future', 'leak'],
        ['zone_avg_asof', 'past 30 days', 'keep'],
      ],
    },
  ],
  edges: [{ source: 'scores', target: 'audit', label: 'why 6?' }],
}
