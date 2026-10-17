import type { Section } from '../types'

export const sparseFactors: Section = {
  id: 'sparse-factors',
  title: 'Truncated SVD and non-negative factors',
  scene: 'sparse-factors',
  focus: 'topics',
  slide: `## Sparse data: truncated SVD and NMF

Word counts are **sparse and non-negative**, and two reductions are built for that shape.

### Truncated SVD
- Like PCA but **without centring**, so the matrix stays sparse
- Centring 4,000 × 3,000 counts would fill in every zero
- Components can have **negative** weights, which are hard to read

### Non-negative matrix factorisation
- NMF writes each review as an **additive** mix of non-negative parts
- Parts often read as themes: *late, waiting* versus *damaged, box*
- The fit is a **local** solution: fix the initialisation and check stability
- Vocabulary, SVD and NMF are all fitted on **training** reviews`,
  narration:
    "Text features are a different shape of data: thousands of word columns, almost all zero, and never negative. As a separate illustration, take four thousand training reviews turned into a term matrix with three thousand columns, ninety-nine percent of it zeros. Standard PCA would start by centring every column, which turns all those zeros into small non-zero numbers and destroys the sparsity that makes the matrix cheap to store and compute with. Truncated SVD skips the centring and works directly on the sparse matrix, so it is the usual choice for compressing text. Its components can have negative weights, though, which makes them hard to interpret. Non-negative matrix factorisation adds a constraint: every review is written as an additive mix of parts, and both the parts and the mixing weights must be non-negative. That constraint often makes the parts readable. Here one part is dominated by late, waiting and again, another by damaged, box and broken. NMF's fit is a local solution that depends on its starting point, so fix the initialisation and check that the parts are stable. And all of it, vocabulary included, is fitted on training reviews only.",
}
