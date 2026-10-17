import type { PlotPoint } from '@graphlearning/flow'
import { blob, rng } from '../points'

// The chapter's as-of customer summary, reduced to two SCALED features for drawing:
// orders in the last 90 days, and mean basket value, both standardised on the training customers.
// Three loose groups (synthetic): frequent small baskets, occasional large baskets, and lapsed.
export const customers: PlotPoint[] = [
  ...blob(101, 15, 1.3, -0.7, 0.45),
  ...blob(103, 15, -1.2, 1.1, 0.45),
  ...blob(107, 15, -0.9, -1.1, 0.45),
]

// Two interleaved half-moons plus scattered noise, for the density-based section.
const r = rng(131)
const jitter = () => (r() - 0.5) * 0.18
export const moonA: PlotPoint[] = Array.from({ length: 26 }, (_, i) => {
  const t = (i / 25) * Math.PI
  return [Math.cos(t) + jitter(), Math.sin(t) + jitter()]
})
export const moonB: PlotPoint[] = Array.from({ length: 26 }, (_, i) => {
  const t = (i / 25) * Math.PI
  return [1 - Math.cos(t) + jitter(), 0.45 - Math.sin(t) + jitter()]
})
export const noise: PlotPoint[] = [[-1.4, -0.9], [2.4, 1.2], [0.5, 1.6], [2.6, -0.9], [-0.9, 1.5], [0.5, -0.1]]
