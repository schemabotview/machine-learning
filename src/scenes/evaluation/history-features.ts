import type { Scene } from '@graphlearning/flow'

// §7 — two leak-free historical features, stacked top to bottom. Top: the as-of window for order A-1043 (checkout 03-15)
// counts only outcomes already DELIVERED by then. Bottom: out-of-fold target encoding — each fold's
// zone rate comes from the other folds, never from rows that include its own label.
export const historyFeatures: Scene = {
  id: 'history-features',
  title: 'History without the future',
  flow: 'TB',
  nodes: [
    {
      id: 'asof',
      label: 'c-07, as of 03-15',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'past', label: 'A-1041', sub: 'delivered 03-04: counts', pattern: 'service', icon: 'circlecheck' },
        { id: 'transit', label: 'A-1042', sub: 'delivered 03-16: not yet', pattern: 'warn', icon: 'clock' },
        { id: 'future', label: 'A-1046', sub: 'placed 03-20: future', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'encoding',
      kind: 'table',
      label: 'Target encoding of zone, cross-fitted',
      headers: ['zone', 'fold', 'rate from', 'late rate'],
      values: [
        ['north', '1', 'folds 2–5', '0.21'],
        ['north', '2', 'folds 1, 3–5', '0.19'],
        ['north', '3', 'folds 1–2, 4–5', '0.22'],
        ['east', '1', 'folds 2–5', '0.12'],
        ['north', 'naive', 'all rows, own y', '0.20 — leaks'],
      ],
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'target_encode.py',
      label: `enc = TargetEncoder(cv=5)   # scikit-learn >= 1.3
# fit_transform cross-fits: each fold gets
# rates computed from the other folds
Z_train = enc.fit_transform(Xtr[["zone"]], ytr)
# transform uses rates from all training rows
Z_val = enc.transform(Xval[["zone"]])`,
    },
  ],
  edges: [
    { source: 'asof', target: 'encoding', label: 'same rule' },
    { source: 'encoding', target: 'code', label: 'in scikit-learn' },
  ],
}
