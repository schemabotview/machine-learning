import type { Section } from '../types'

export const distanceK: Section = {
  id: 'distance-k',
  title: 'Distances, neighbourhood size and dimensionality',
  scene: 'distance-k',
  focus: 'curve',
  slide: `## Distance, k and dimension

k-NN has two real choices: **how many** neighbours, and **what distance** means.

### Choosing k
- **k = 1** reproduces the training set: training error 0, high validation error
- **Large k** averages over everyone and loses local detail
- At k = n every order gets the **same** prediction: the overall mean
- Validation MAE is lowest near **k = 10**; choose it on validation, per fold

### Making distance meaningful
- **Scale** the features: in pounds, basket value would swamp kilometres
- Prefer a few **relevant** features: irrelevant ones add noise to every distance
- In high dimensions all points are **nearly equally far**, so "nearest" carries little information
- Distance weighting lets closer neighbours count more`,
  narration:
    "k-NN has two decisions that actually matter: how many neighbours to use, and what distance means. With k equal to one, each training order is its own nearest neighbour, so training error is zero, and validation error is high because every prediction copies a single noisy order. As k grows, predictions average over more orders and become smoother. Push k far enough and every prediction approaches the overall average, losing all local detail. On our validation data the error is lowest around ten neighbours, and like any setting, k is chosen on validation inside each fold. Distance is the subtler choice. If basket value is measured in pounds and distance in kilometres, a ten-pound difference outweighs a ten-kilometre one, and neighbours are chosen almost entirely by basket value; scaling fixes that. Irrelevant features are worse than useless, because each one adds noise to every distance. And in many dimensions a strange thing happens: the nearest and farthest training points end up almost equally far away, so being the nearest says very little. k-NN works best with a handful of meaningful, scaled features.",
}
