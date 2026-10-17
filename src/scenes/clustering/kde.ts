import type { Scene, PlotPoint } from '@graphlearning/flow'
import { kde, rng } from '../points'

// 100 basket values drawn from the §6 mixture (seeded), split 70 / 30 into training and held-out.
// KDE is fitted on the 70 and judged by mean log-density on the 30 — all computed here.
const r = rng(151)
const gauss = () => Math.sqrt(-2 * Math.log(1 - r())) * Math.cos(2 * Math.PI * r())
const sample = Array.from({ length: 100 }, (_, i) => (i % 5 < 3 ? 25 + 6 * gauss() : 60 + 12 * gauss()))
const train = sample.filter((_, i) => i % 10 < 7)
const held = sample.filter((_, i) => i % 10 >= 7)
const hs = [1.5, 5, 20]
const xs = Array.from({ length: 121 }, (_, i) => i * (100 / 120))
const curve = (h: number): PlotPoint[] => xs.map((x) => [x, kde(train, h)(x)])
const heldLL = (h: number) => held.reduce((a, x) => a + Math.log(Math.max(kde(train, h)(x), 1e-12)), 0) / held.length
const best = hs.reduce((a, b) => (heldLL(b) > heldLL(a) ? b : a))

// §7 — three bandwidths on the same sample, and which one the held-out data prefers.
export const kdeScene: Scene = {
  id: 'kde',
  title: 'How wide is each bump?',
  flow: 'TB',
  nodes: [
    {
      id: 'curves',
      kind: 'plot',
      label: 'Kernel density estimate · 70 training customers',
      sub: 'Gaussian kernel, three bandwidths',
      plot: {
        x: { min: 0, max: 100, step: 20, label: 'mean basket (£)' },
        y: { min: 0, max: 0.08, step: 0.02, label: 'density' },
        axes: 'corner',
        series: [
          { kind: 'line', points: curve(1.5), color: 'warn', label: 'h = 1.5: spiky', labelAt: [36, 0.072] },
          { kind: 'line', points: curve(5), color: 'service', label: 'h = 5', labelAt: [4, 0.045] },
          { kind: 'line', points: curve(20), color: 'network', label: 'h = 20: oversmoothed', labelAt: [62, 0.03] },
        ],
      },
    },
    {
      id: 'heldout',
      kind: 'table',
      label: 'Held-out mean log-density · 30 customers',
      headers: ['bandwidth', 'held-out log-density', ''],
      values: hs.map((h) => [String(h), heldLL(h).toFixed(2), h === best ? 'best' : '']),
    },
  ],
  edges: [{ source: 'curves', target: 'heldout', label: 'judge on held-out' }],
}
