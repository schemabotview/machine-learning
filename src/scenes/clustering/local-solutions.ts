import type { Scene, PlotPoint } from '@graphlearning/flow'
import { kmeansTrace, rng } from '../points'
import { customers } from './customers'

// k-means from 10 random starts on the §2 customers, each run to convergence: the spread of final
// inertias is computed here. Rows below it are facts about the scikit-learn estimators.
const r = rng(171)
const runs = Array.from({ length: 10 }, () => {
  const start: PlotPoint[] = [0, 1, 2].map(() => customers[Math.floor(r() * customers.length)])
  return kmeansTrace(customers, start, 15).at(-1)!.inertia
})
const best = Math.min(...runs)
const worse = runs.filter((v) => v > best + 0.5).length

// §8 — local optima, choosing component counts, and what can score a new customer.
export const localSolutions: Scene = {
  id: 'local-solutions',
  title: 'Many answers, and new customers',
  flow: 'TB',
  nodes: [
    {
      id: 'restarts',
      kind: 'table',
      label: 'k-means, k = 3, ten random starts',
      headers: ['', 'value'],
      values: [
        ['best final inertia', best.toFixed(1)],
        ['worst final inertia', Math.max(...runs).toFixed(1)],
        ['starts stuck in a worse solution', `${worse} of 10`],
        ['remedy', 'n_init > 1, keep the best'],
      ],
    },
    {
      id: 'assign',
      label: 'Placing a new customer',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'km-new', label: 'k-means', sub: 'predict: nearest centroid', pattern: 'service', icon: 'search' },
        { id: 'gmm-new', label: 'Mixture', sub: 'predict_proba: soft', pattern: 'user', icon: 'sigma' },
        { id: 'db-new', label: 'DBSCAN', sub: 'no predict: refit', pattern: 'warn', icon: 'ban' },
        { id: 'agg-new', label: 'Agglomerative', sub: 'no predict: refit', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'restarts', target: 'assign', label: 'then, for new data' }],
}
