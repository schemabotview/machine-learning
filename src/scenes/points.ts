import type { PlotPoint } from '@graphlearning/flow'

// Seeded synthetic data for the geometry plots, shared by every course. A fixed LCG keeps every frame
// reproducible: the same seed always draws the same points, so a recorded video never shifts.
export function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0
    return s / 2 ** 32
  }
}

/** n points around (cx, cy), roughly Gaussian (sum of uniforms), spread sx × sy, rounded. */
export function blob(seed: number, n: number, cx: number, cy: number, sx: number, sy = sx): PlotPoint[] {
  const r = rng(seed)
  const g = () => (r() + r() + r() - 1.5) * 1.15
  return Array.from({ length: n }, () => [Math.round((cx + g() * sx) * 100) / 100, Math.round((cy + g() * sy) * 100) / 100])
}

/** A circle as a closed line, for neighbourhoods and radial boundaries. */
export function circle(cx: number, cy: number, r: number, steps = 64): PlotPoint[] {
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * 2 * Math.PI
    return [cx + r * Math.cos(t), cy + r * Math.sin(t)]
  })
}

// ---- small, exact implementations for traced clustering frames (chapter 9) ----------------------

const d2 = (a: PlotPoint, b: PlotPoint) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2

/** Lloyd's k-means from given starting centroids; returns centroids and inertia after each step. */
export function kmeansTrace(pts: PlotPoint[], start: PlotPoint[], steps: number) {
  let cents = start.map((c) => [...c] as PlotPoint)
  const trace: { centroids: PlotPoint[]; inertia: number; labels: number[] }[] = []
  for (let s = 0; s <= steps; s++) {
    const labels = pts.map((p) => cents.reduce((best, c, j) => (d2(p, c) < d2(p, cents[best]) ? j : best), 0))
    const inertia = pts.reduce((sum, p, i) => sum + d2(p, cents[labels[i]]), 0)
    trace.push({ centroids: cents, inertia, labels })
    cents = cents.map((c, j) => {
      const mine = pts.filter((_, i) => labels[i] === j)
      return mine.length ? ([mine.reduce((a, p) => a + p[0], 0) / mine.length, mine.reduce((a, p) => a + p[1], 0) / mine.length] as PlotPoint) : c
    })
  }
  return trace
}

/** DBSCAN labels (−1 = noise), the textbook O(n²) version. */
export function dbscan(pts: PlotPoint[], eps: number, minSamples: number): number[] {
  const labels = pts.map(() => -2) // −2 unvisited
  const near = (i: number) => pts.map((_, j) => j).filter((j) => d2(pts[i], pts[j]) <= eps * eps)
  let cluster = -1
  pts.forEach((_, i) => {
    if (labels[i] !== -2) return
    const nb = near(i)
    if (nb.length < minSamples) return void (labels[i] = -1)
    cluster++
    labels[i] = cluster
    const queue = [...nb]
    while (queue.length) {
      const j = queue.shift()!
      if (labels[j] === -1) labels[j] = cluster
      if (labels[j] !== -2) continue
      labels[j] = cluster
      const nbj = near(j)
      if (nbj.length >= minSamples) queue.push(...nbj)
    }
  })
  return labels
}

/** Normal density. */
export const normal = (x: number, mu: number, sd: number) => Math.exp(-((x - mu) ** 2) / (2 * sd * sd)) / (sd * Math.sqrt(2 * Math.PI))

/** Gaussian KDE at x from a 1-D sample. */
export const kde = (sample: number[], h: number) => (x: number) => sample.reduce((a, s) => a + normal(x, s, h), 0) / sample.length
