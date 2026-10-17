import type { Scene, PlotPoint } from '@graphlearning/flow'

// Road distance is straight-line distance plus a small detour (correlation ≈ 0.98, illustrative).
const wobble = [0.6, -0.4, 0.9, -0.7, 0.2, -0.9, 0.5, 1.1, -0.3, -0.6, 0.8, -0.2, 0.4, -1.0, 0.7, -0.5, 0.3, 1.0]
const pairs: PlotPoint[] = wobble.map((e, i) => {
  const d = 1 + i
  return [d, Math.round((1.15 * d + e) * 10) / 10]
})

// §3 — two near-duplicate features, and what lasso and ridge do with them across bootstrap resamples
// of the same training fold: lasso picks one arbitrarily, ridge splits the weight steadily.
export const sparsityStability: Scene = {
  id: 'sparsity-stability',
  title: 'Which twin does lasso keep?',
  flow: 'TB',
  nodes: [
    {
      id: 'twins',
      kind: 'plot',
      label: 'Road km against straight-line km',
      sub: 'correlation ≈ 0.98',
      plot: {
        x: { min: 0, max: 20, step: 5, label: 'distance_km' },
        y: { min: 0, max: 24, step: 4, label: 'road_km' },
        axes: 'corner',
        series: [{ kind: 'scatter', points: pairs, color: 'network', size: 6 }],
      },
    },
    {
      id: 'resamples',
      kind: 'table',
      label: 'Coefficients on 5 bootstrap resamples',
      headers: ['resample', 'lasso: dist', 'lasso: road', 'ridge: dist', 'ridge: road'],
      values: [
        ['1', '3.9', '0.0', '2.0', '2.1'],
        ['2', '0.0', '4.0', '2.1', '2.0'],
        ['3', '4.1', '0.0', '2.0', '2.0'],
        ['4', '0.0', '3.8', '2.1', '2.1'],
        ['5', '2.0', '2.1', '2.0', '2.1'],
      ],
    },
  ],
  edges: [{ source: 'twins', target: 'resamples', label: 'refit 5 times' }],
}
