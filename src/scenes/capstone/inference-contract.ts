import type { Scene } from '@graphlearning/flow'

// §5 — the handoff to engineering: the exact inputs at prediction time, how each may be missing or new,
// and the artefacts that travel with the model. Serving, persistence and monitoring are MLOps' work.
export const inferenceContract: Scene = {
  id: 'inference-contract',
  title: 'What engineering receives',
  flow: 'TB',
  nodes: [
    {
      id: 'inputs',
      kind: 'table',
      label: 'Inference inputs · available at the checkout click',
      headers: ['field', 'type', 'if missing', 'if unseen'],
      values: [
        ['zone', 'category', 'reject request', 'all zeros + abstain'],
        ['distance_km', 'float ≥ 0', 'median imputed + flag', 'range-checked'],
        ['basket_items', 'int ≥ 1', 'reject request', '—'],
        ['rush_hour', 'bool', 'derive from timestamp', '—'],
        ['history_late_rate', 'float 0–1', '0 orders → new-customer path', '—'],
        ['promise_min', 'int', 'reject request', '—'],
      ],
    },
    {
      id: 'artefacts',
      label: 'Artefacts that travel together',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'pipeline', label: 'Fitted pipeline', sub: 'preparation + model', pattern: 'service', icon: 'package' },
        { id: 'calibrator', label: 'Calibrator', sub: 'isotonic, fitted', pattern: 'network', icon: 'gauge' },
        { id: 'policy-cfg', label: 'Policy config', sub: 'threshold, cap, abstain', pattern: 'user', icon: 'wrench' },
        { id: 'card', label: 'Model card', sub: 'uses and limits', pattern: 'external', icon: 'scroll' },
        { id: 'datav', label: 'Data version', sub: 'snapshot hash', pattern: 'storage', icon: 'fingerprint' },
        { id: 'reference', label: 'Score reference', sub: 'test distribution', pattern: 'service', icon: 'barchart' },
      ],
    },
  ],
  edges: [{ source: 'inputs', target: 'artefacts', label: 'with' }],
}
