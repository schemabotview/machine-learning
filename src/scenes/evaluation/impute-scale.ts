import type { Scene } from '@graphlearning/flow'

// §5 — five validation rows through a train-fitted median imputer (9.0 km) and a train-fitted
// scaler (mean 10.2, sd 5.0): z = (x − 10.2) / 5.0, so 4.1 → −1.22, 9.0 → −0.24, 15.3 → 1.02,
// 22.0 → 2.36.
export const imputeScale: Scene = {
  id: 'impute-scale',
  title: 'Impute, flag, scale',
  flow: 'TB',
  padding: 0.17, // tall board: keep the table clear of the eyebrow
  nodes: [
    {
      id: 'rows',
      kind: 'table',
      label: 'distance_km — validation rows',
      headers: ['raw', 'imputed', 'missing', 'scaled'],
      values: [
        ['4.1', '4.1', '0', '−1.22'],
        ['—', '9.0', '1', '−0.24'],
        ['15.3', '15.3', '0', '1.02'],
        ['22.0', '22.0', '0', '2.36'],
        ['—', '9.0', '1', '−0.24'],
      ],
    },
    {
      id: 'steps',
      label: 'Each step learns on train',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'imputer', label: 'Median imputer', sub: 'learns 9.0 km', pattern: 'service', icon: 'sigma' },
        { id: 'flag', label: 'Missing flag', sub: 'absence can predict', pattern: 'network', icon: 'tag' },
        { id: 'scaler', label: 'Standard scaler', sub: 'mean 10.2, sd 5.0', pattern: 'service', icon: 'scale' },
        { id: 'why', label: 'Why scale', sub: 'distances, penalties', pattern: 'external', icon: 'ruler' },
      ],
    },
  ],
  edges: [{ source: 'rows', target: 'steps', label: 'fitted on train' }],
}
