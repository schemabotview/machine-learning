import type { Section } from '../types'

export const lofIsolation: Section = {
  id: 'lof-isolation',
  title: 'Local-density and isolation mechanisms',
  scene: 'lof-isolation',
  focus: 'scores',
  slide: `## LOF and isolation forests

Two mechanisms, two notions of unusual: **odd for its neighbourhood**, or **easy to separate** from everything.

### Local outlier factor
- Compares an order's local density with its neighbours' densities
- About **1** means as dense as the neighbourhood; well above 1 means sparser
- Order B, inside the sparse bulk group, scores **0.96**: normal *for bulk orders*

### Isolation forest
- Random splits isolate unusual points in **fewer steps**
- Scores near 0.5 are ordinary; nearer 1 is easier to isolate
- B scores **0.60**, close to A's 0.64: the forest sees the whole bulk group as unusual
- A, between the groups, is high on both: **4.63** and 0.64; C is ordinary on both`,
  narration:
    "Two widely used detectors embody different ideas of what unusual means. Local outlier factor compares each order's local density, how tightly packed its nearest neighbours are, with the local densities of those neighbours. A score near one means the order is about as dense as its neighbourhood; a score well above one means it sits in a sparser spot than its neighbours do. Isolation forest builds many random trees that split the data on random features at random values, and measures how many splits it takes to isolate each order. Unusual points are separated from the rest in few steps. Its score is near a half for ordinary points and closer to one for points that are easy to isolate. The table, computed from these synthetic orders, shows where the two disagree. Order A, between the everyday and bulk groups, is flagged by both: a local outlier factor of four point six three and an isolation score of nought point six four. Order B sits inside the sparse group of bulk orders. LOF scores it nought point nine six, perfectly normal for a bulk order. The isolation forest gives it nought point six, nearly as high as A, because it treats the whole sparse group as unusual. Order C is ordinary to both.",
}
