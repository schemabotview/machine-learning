import type { Section } from '../types'

export const kde: Section = {
  id: 'kde',
  title: 'Kernel density estimation and bandwidth',
  scene: 'kde',
  focus: 'heldout',
  slide: `## Kernel density estimation

KDE estimates a density without assuming components: put a small **bump** on every training point and add them up.

### The bandwidth is everything
- **h = 1.5**: a spike per customer — it memorises the sample
- **h = 20**: one broad hump — the two groups disappear
- **h = 5**: two clear modes, as in the mixture
- Scale matters here too: h is in the feature's **units**

### Choosing h on held-out data
- Fit on 70 customers; score the **mean log-density** of 30 held-out ones
- h = 5 scores best (**−4.58**), ahead of h = 20 (−4.62) and h = 1.5 (−5.00)
- Higher training likelihood always prefers a smaller h, so never choose on it
- Density compares **fit**, not meaning: the modes still need naming`,
  narration:
    "Kernel density estimation estimates a distribution without assuming any components at all. Place a small bump, here a Gaussian, on every training customer's basket value, and add them up. The only real choice is the bandwidth, the width of each bump, and the plot shows how much it matters on the same seventy customers. With a bandwidth of one and a half pounds, every customer gets a sharp spike, and the estimate is a portrait of this particular sample rather than of the population. With twenty pounds, the bumps blur into one broad hump and the two groups we know are there disappear. At five, there are two clear modes, close to the mixture from the last section. The bandwidth is chosen like any other capacity setting, on held-out data. Score the thirty held-out customers by their mean log-density under each estimate: five pounds scores best, minus four point five eight, ahead of twenty and well ahead of one and a half. Do not choose it on training likelihood, which always prefers a narrower bandwidth. And remember that a better density fit says nothing about what the modes mean; naming them is still domain work.",
}
