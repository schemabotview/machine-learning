import type { Section } from '../types'

export const reduceChoices: Section = {
  id: 'reduce-choices',
  title: 'Selection versus extraction',
  scene: 'reduce-choices',
  focus: 'methods',
  slide: `## Selection versus extraction

Reducing dimension means deciding **what to preserve** — and each method preserves something different.

### Two routes
- **Selection** keeps a subset of the original columns: still readable, still in their units
- **Extraction** builds new columns, each a combination of all the old ones
- Only target-aware selection, such as lasso, looks at **y**
- Fewer inputs can mean faster models and fewer **unseen-value** failures

### Objectives, stated plainly
- PCA keeps **variance**; truncated SVD keeps **reconstruction** of sparse data
- NMF keeps **additive, non-negative** parts
- t-SNE and UMAP keep **local neighbourhoods** for a picture
- None of the unsupervised objectives promises to keep what **predicts** delivery time`,
  narration:
    "Unsupervised learning begins with a different question about the inputs: can we describe them with fewer numbers? Every answer to that question decides what is worth preserving, and different methods preserve different things. There are two broad routes. Selection keeps a subset of the original columns, so the result is still readable: distance is still distance, in kilometres. Extraction builds new columns, each one a weighted combination of all the originals, which can be more compact but no longer has a plain meaning. The table lists the methods in this chapter by their objective. Lasso selects columns by how much they help predict the target, and it is the only one here that looks at the target at all. A variance threshold drops near-constant columns. PCA keeps as much variance as possible. Truncated SVD reconstructs sparse data. NMF finds additive parts with no negative values. And t-SNE and UMAP preserve local neighbourhoods to draw a picture. The point to carry through the chapter is that none of the unsupervised objectives promises to keep what predicts delivery time. Whether a reduction helps a task is something we measure.",
}
