import type { Section } from '../types'

export const forest: Section = {
  id: 'forest',
  title: 'Bagging and random forests',
  scene: 'forest',
  focus: 'trees',
  slide: `## Bagging and random forests

Average many unstable trees and their individual errors **cancel**, as long as the trees are not all alike.

### How a forest is built
- **Bagging**: each tree trains on a bootstrap resample of the training fold
- **Feature subsampling**: each split considers only a random subset of features
- The forest predicts the **average** of its trees, or their mean probability

### What it buys
- Over 10 seeds, one deep tree scores **12.4 ± 1.8** min; the forest **9.1 ± 0.2**
- Deep, low-bias trees are fine: averaging removes most of their **variance**
- Adding trees never overfits more; it only costs time and memory
- Rows left out of a tree's resample give an **out-of-bag** estimate — with a caveat`,
  narration:
    "A single deep tree has low bias and high variance: it fits the training data closely, and a slightly different sample gives a very different tree. Averaging is the classic cure for variance, but only if the things being averaged are not all making the same mistakes. A random forest builds that diversity in two ways. Each tree trains on a bootstrap resample of the training fold, which is called bagging. And at every split, each tree may only consider a random subset of the features, so even a dominant feature like distance is sometimes unavailable, and the trees are forced to differ. The forest predicts the average of its trees. The effect shows up clearly across random seeds. One deep tree averages twelve point four minutes of error, but that number moves by nearly two minutes from seed to seed. A five-hundred-tree forest scores nine point one, with a spread of only a fifth of a minute. Adding more trees does not cause overfitting; it only costs time and memory. And the orders left out of each tree's resample provide a free out-of-bag estimate, which comes with a caveat at the end of this chapter.",
}
