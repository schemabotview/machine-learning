import type { Scene, PlotPoint } from '@graphlearning/flow'
import { rng } from '../points'

// Two scaled, centred features that move together (road and straight-line distance). PC1 points along
// the shared direction (1, 1)/√2; PC2 is orthogonal. Arrow lengths ∝ the standard deviation along each.
const r = rng(83)
const g = () => (r() + r() + r() - 1.5) * 1.15
const pts: PlotPoint[] = Array.from({ length: 40 }, () => {
  const t = g() * 1.3
  const e = g() * 0.3
  return [Math.round((t - e) * 0.707 * 100) / 100, Math.round((t + e) * 0.707 * 100) / 100]
})

// §2 — principal directions drawn on the data, beside the computation in two lines of NumPy.
export const pca: Scene = {
  id: 'pca',
  title: 'The directions of most variance',
  flow: 'TB',
  nodes: [
    {
      id: 'axes',
      kind: 'plot',
      label: 'Centred data with principal directions',
      sub: 'two scaled features · synthetic',
      plot: {
        x: { min: -3, max: 3, step: 1, label: 'scaled distance_km' },
        y: { min: -2.2, max: 2.2, step: 1, label: 'scaled road_km' },
        axes: 'origin',
        equal: true,
        series: [
          { kind: 'scatter', points: pts, color: 'network', size: 6 },
          { kind: 'segment', from: [0, 0], to: [1.5, 1.5], color: 'service', label: 'PC1 · most variance', labelAt: [1.6, 1.35] },
          { kind: 'segment', from: [0, 0], to: [-0.3, 0.3], color: 'warn', label: 'PC2', labelAt: [-0.85, 0.5] },
        ],
      },
    },
    {
      id: 'code',
      kind: 'code',
      filename: 'pca.py',
      label: `Xc = X_train - X_train.mean(axis=0)     # centre first
U, S, Vt = np.linalg.svd(Xc, full_matrices=False)
scores = Xc @ Vt.T                       # component scores
explained = S**2 / (S**2).sum()          # share of variance
# same thing: PCA(n_components=2).fit(X_train)`,
    },
  ],
  edges: [{ source: 'axes', target: 'code', label: 'computed by SVD' }],
}
