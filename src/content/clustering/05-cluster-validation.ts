import type { Section } from '../types'

export const clusterValidation: Section = {
  id: 'cluster-validation',
  title: 'Internal metrics, stability and domain validation',
  scene: 'cluster-validation',
  focus: 'scores',
  slide: `## Is the partition any good?

Without labels there is no accuracy, so a partition is judged on **three kinds of evidence**.

### Internal: geometry
- **Silhouette** compares each point's own-cluster distance with the nearest other cluster
- Highest here at **k = 3** (0.52), but it only measures **shape**
- Internal scores favour the shapes their method already assumes

### Stability: does it come back?
- Refit on bootstrap resamples; compare partitions with the **adjusted Rand index**
- k = 3 returns almost unchanged (ARI **0.91**); k = 4 does not (0.62)

### Domain: does anyone act on it?
- Name each group and check it with the people who would **use** it
- A tidy partition nobody can act on is still not useful`,
  narration:
    "With no labels, there is no accuracy to compute, and every clustering algorithm will happily return a partition for any number of groups you ask for. So a partition has to be justified with evidence of three different kinds. The first is internal: measures computed from the geometry alone. The silhouette score compares, for each customer, the average distance to its own cluster with the distance to the nearest other cluster. On our summary it peaks at three clusters, at nought point five two. But internal scores only measure shape, and they tend to reward the shapes their own method already assumes. The second kind is stability. Refit the clustering on bootstrap resamples of the customers and ask whether the same groups come back, measured by the adjusted Rand index. Three clusters return almost unchanged, an index of nought point nine one; four clusters do not, at nought point six two, which suggests the fourth group is an artefact of this sample. The third kind is domain evidence, and it is the one that decides: can the groups be named, and would a marketing or operations team actually do something different for each? A tidy partition nobody can act on is not useful.",
}
