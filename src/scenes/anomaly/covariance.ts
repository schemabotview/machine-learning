import type { Scene, PlotPoint } from '@graphlearning/flow'
import { mahalanobis, rng } from '../points'

// An elongated reference cloud: items and value rise together (synthetic). Euclidean distance treats
// every direction alike; Mahalanobis distance measures it in the cloud's own spread. Both COMPUTED.
const r = rng(211)
const g = () => (r() + r() + r() - 1.5) * 1.15
const cloud: PlotPoint[] = Array.from({ length: 50 }, () => {
  const t = g() * 1.1
  const e = g() * 0.22
  return [t * 0.8 - e * 0.6, t * 0.6 + e * 0.8]
})
const n = cloud.length
const mx = cloud.reduce((a, p) => a + p[0], 0) / n
const my = cloud.reduce((a, p) => a + p[1], 0) / n
const sxx = cloud.reduce((a, p) => a + (p[0] - mx) ** 2, 0) / (n - 1)
const syy = cloud.reduce((a, p) => a + (p[1] - my) ** 2, 0) / (n - 1)
const sxy = cloud.reduce((a, p) => a + (p[0] - mx) * (p[1] - my), 0) / (n - 1)
// Cholesky factor of the covariance, to draw the Mahalanobis-distance-3 ellipse.
const l11 = Math.sqrt(sxx)
const l21 = sxy / l11
const l22 = Math.sqrt(syy - l21 * l21)
const ellipse: PlotPoint[] = Array.from({ length: 73 }, (_, i) => {
  const t = (i / 72) * 2 * Math.PI
  const u = 3 * Math.cos(t)
  const v = 3 * Math.sin(t)
  return [mx + l11 * u, my + l21 * u + l22 * v]
})
const probes: { id: string; p: PlotPoint }[] = [
  { id: 'P', p: [-0.55, 0.75] },
  { id: 'Q', p: [1.45, 1.1] },
]
const euclid = (p: PlotPoint) => Math.hypot(p[0] - mx, p[1] - my)

// §4 — one Gaussian envelope, and two orders that Euclidean and Mahalanobis distance rank oppositely.
export const covariance: Scene = {
  id: 'covariance',
  title: 'Distance in the data’s own shape',
  flow: 'TB',
  nodes: [
    {
      id: 'envelope',
      kind: 'plot',
      label: 'Elliptic envelope · Mahalanobis distance 3',
      sub: 'synthetic reference orders',
      plot: {
        x: { min: -3.6, max: 3.6, step: 1, label: 'items (scaled)' },
        y: { min: -2.2, max: 2.2, step: 1, label: 'basket value (scaled)' },
        axes: 'origin',
        equal: true,
        series: [
          { kind: 'scatter', points: cloud, color: 'network', size: 6 },
          { kind: 'line', points: ellipse, color: 'service', label: 'distance 3', labelAt: [1.6, -0.4] },
          ...probes.map((x) => ({ kind: 'marker' as const, at: x.p, color: 'warn', size: 10, label: x.id, labelAt: [x.p[0] + 0.15, x.p[1] + 0.2] as PlotPoint })),
        ],
      },
    },
    {
      id: 'distances',
      kind: 'table',
      label: 'Two orders, two distances',
      headers: ['order', 'Euclidean', 'Mahalanobis', 'verdict'],
      values: probes.map((x) => {
        const m = mahalanobis(cloud, x.p)
        return [x.id, euclid(x.p).toFixed(2), m.toFixed(2), m > 3 ? 'outside' : 'inside']
      }),
    },
    {
      id: 'methods',
      label: 'Shape assumptions',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ee', label: 'Elliptic envelope', sub: 'one Gaussian cloud', pattern: 'service', icon: 'sigma' },
        { id: 'ocsvm', label: 'One-class SVM', sub: 'kernel boundary, ν', pattern: 'network', icon: 'share' },
      ],
    },
  ],
  edges: [
    { source: 'envelope', target: 'distances' },
    { source: 'distances', target: 'methods', label: 'other shapes' },
  ],
}
