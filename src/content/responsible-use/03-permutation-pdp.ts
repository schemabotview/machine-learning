import type { Section } from '../types'

export const permutationPdp: Section = {
  id: 'permutation-pdp',
  title: 'Permutation importance and dependence plots',
  scene: 'permutation-pdp',
  focus: 'perm',
  slide: `## Permutation importance and dependence plots

Two held-out tools: **shuffle** a column to see how much the model needs it, **sweep** a column to see how it is used.

### Permutation importance
- Shuffle one column in the **held-out** data and measure how much the error rises
- Rush hour **+3.4 min**, distance +2.1, history +1.8, zone +0.4
- It measures this model's reliance, on this data — not the feature's value in general

### Partial dependence and ICE
- **PD**: average prediction as distance sweeps, others held as observed
- **ICE**: one line per order — parallel lines mean no strong interaction
- Sweeping creates **implausible** rows: 20 km orders in a 5 km zone
- Beyond 14 km the curve is mostly **extrapolation**`,
  narration:
    "Two tools answer the global questions properly, and both are computed on held-out data. Permutation importance takes one feature column in the test set, shuffles it so it no longer lines up with its rows, and measures how much the model's error rises. If the model relied on that column, error goes up a lot. Shuffling rush hour adds three point four minutes of mean absolute error; distance two point one; the as-of history features one point eight; zone almost nothing. That measures this model's reliance on each feature, with this data; it is not the feature's value in some general sense. Partial dependence answers how a feature is used. Sweep distance from zero to twenty kilometres for every order, keeping their other features as observed, and average the predictions: that is the partial-dependence curve. Individual conditional expectation lines show the same sweep for single orders; here they run roughly parallel, so distance acts similarly for everyone. Two cautions. Sweeping creates rows that never occur, like a twenty-kilometre order in a zone only five kilometres across. And where few training orders exist, beyond fourteen kilometres here, the curve shows the model extrapolating.",
}
