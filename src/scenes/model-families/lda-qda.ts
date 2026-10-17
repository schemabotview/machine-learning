import type { Scene, PlotPoint } from '@graphlearning/flow'
import { blob } from './points'

// Class A is round and tight; class B is wide. LDA must assume one shared covariance, so its
// boundary is a line. QDA fits one covariance per class: far from both centres the wider class B is
// always more likely, so A's region is a CLOSED curve around A — an ellipse, not a half-plane.
const a = blob(5, 22, -1.2, 0, 0.45)
const b = blob(9, 22, 1.4, 0, 1.0, 0.55)
const qda: PlotPoint[] = Array.from({ length: 65 }, (_, i) => {
  const t = (i / 64) * 2 * Math.PI
  return [-1.05 + 1.05 * Math.cos(t), 0.95 * Math.sin(t)]
})

// §4 — linear versus quadratic boundaries from the covariance assumption alone.
export const ldaQda: Scene = {
  id: 'lda-qda',
  title: 'One covariance or two',
  flow: 'TB',
  nodes: [
    {
      id: 'boundaries',
      kind: 'plot',
      label: 'LDA and QDA on the same classes',
      sub: 'synthetic',
      plot: {
        x: { min: -3, max: 4, step: 1, label: 'feature 1' },
        y: { min: -2.5, max: 2.5, step: 1, label: 'feature 2' },
        axes: 'corner',
        equal: true,
        series: [
          { kind: 'scatter', points: a, color: 'network', size: 6, label: 'class A', labelAt: [-2.8, 1.6] },
          { kind: 'scatter', points: b, color: 'warn', size: 6, label: 'class B', labelAt: [2.6, 1.6] },
          { kind: 'segment', from: [0.05, -2.5], to: [0.05, 2.5], color: '#9ca3af', dashed: true, label: 'LDA', labelAt: [0.15, -2.2] },
          { kind: 'line', points: qda, color: 'service', label: 'QDA', labelAt: [-1.3, 1.1] },
        ],
      },
    },
    {
      id: 'assumptions',
      kind: 'table',
      label: 'Assumptions and their price',
      headers: ['', 'LDA', 'QDA'],
      values: [
        ['class model', 'Gaussian', 'Gaussian'],
        ['covariance', 'shared', 'one per class'],
        ['boundary', 'linear', 'quadratic'],
        ['parameters, d = 20', '≈ 250', '≈ 460'],
        ['fails when', 'shapes differ', 'few rows per class'],
      ],
    },
  ],
  edges: [{ source: 'boundaries', target: 'assumptions', label: 'why they differ' }],
}
