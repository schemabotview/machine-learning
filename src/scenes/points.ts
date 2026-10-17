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

// ---- anomaly scores for chapter 10 ---------------------------------------------------------------

const dist = (a: PlotPoint, b: PlotPoint) => Math.hypot(a[0] - b[0], a[1] - b[1])

/** Local outlier factor of `q` against reference points `ref` (q itself excluded), k neighbours. */
export function lof(ref: PlotPoint[], q: PlotPoint, k: number): number {
  const knn = (p: PlotPoint, pool: PlotPoint[]) => pool.filter((o) => o !== p).map((o) => ({ o, d: dist(p, o) })).sort((a, b) => a.d - b.d).slice(0, k)
  const kdist = (p: PlotPoint) => knn(p, ref)[k - 1].d
  const lrd = (p: PlotPoint, pool: PlotPoint[]) => 1 / (knn(p, pool).reduce((s, { o, d }) => s + Math.max(kdist(o), d), 0) / k)
  const pool = ref.filter((o) => o !== q)
  const neighbours = knn(q, pool)
  return neighbours.reduce((s, { o }) => s + lrd(o, ref), 0) / k / lrd(q, pool)
}

/** Isolation-forest anomaly score in (0, 1): ≈ 0.5 ordinary, → 1 easy to isolate. Seeded. */
export function isolationScores(train: PlotPoint[], queries: PlotPoint[], trees = 200, sub = 64, seed = 7): number[] {
  const r = rng(seed)
  const c = (n: number) => (n <= 1 ? 0 : 2 * (Math.log(n - 1) + 0.5772156649) - (2 * (n - 1)) / n)
  const limit = Math.ceil(Math.log2(sub))
  type T = { leaf: true; n: number } | { leaf: false; f: 0 | 1; v: number; l: T; r: T }
  const grow = (pts: PlotPoint[], depth: number): T => {
    if (depth >= limit || pts.length <= 1) return { leaf: true, n: pts.length }
    const f = (r() < 0.5 ? 0 : 1) as 0 | 1
    const lo = Math.min(...pts.map((p) => p[f]))
    const hi = Math.max(...pts.map((p) => p[f]))
    if (lo === hi) return { leaf: true, n: pts.length }
    const v = lo + r() * (hi - lo)
    return { leaf: false, f, v, l: grow(pts.filter((p) => p[f] < v), depth + 1), r: grow(pts.filter((p) => p[f] >= v), depth + 1) }
  }
  const path = (t: T, p: PlotPoint, depth: number): number => (t.leaf ? depth + c(t.n) : path(p[t.f] < t.v ? t.l : t.r, p, depth + 1))
  const forest = Array.from({ length: trees }, () => {
    const pick = Array.from({ length: Math.min(sub, train.length) }, () => train[Math.floor(r() * train.length)])
    return grow(pick, 0)
  })
  const cn = c(Math.min(sub, train.length))
  return queries.map((q) => 2 ** (-forest.reduce((s, t) => s + path(t, q, 0), 0) / forest.length / cn))
}

/** Mahalanobis distance of q under the sample mean and covariance of pts (2-D). */
export function mahalanobis(pts: PlotPoint[], q: PlotPoint): number {
  const n = pts.length
  const mx = pts.reduce((a, p) => a + p[0], 0) / n
  const my = pts.reduce((a, p) => a + p[1], 0) / n
  const sxx = pts.reduce((a, p) => a + (p[0] - mx) ** 2, 0) / (n - 1)
  const syy = pts.reduce((a, p) => a + (p[1] - my) ** 2, 0) / (n - 1)
  const sxy = pts.reduce((a, p) => a + (p[0] - mx) * (p[1] - my), 0) / (n - 1)
  const det = sxx * syy - sxy * sxy
  const dx = q[0] - mx
  const dy = q[1] - my
  return Math.sqrt((syy * dx * dx - 2 * sxy * dx * dy + sxx * dy * dy) / det)
}
