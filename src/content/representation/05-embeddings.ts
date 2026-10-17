import type { Section } from '../types'

export const embeddings: Section = {
  id: 'embeddings',
  title: 'Visual embeddings and distorted distances',
  scene: 'embeddings',
  focus: 'map',
  slide: `## Visual embeddings

t-SNE and UMAP squeeze many dimensions into a **2-D picture** that keeps who is near whom.

### What the map preserves
- **Local neighbourhoods**: points close in the map are usually close in the data
- That makes it a good tool for **looking** — spotting groups, outliers, mislabelled rows
- It is fitted to **one** dataset, with randomness: fix the seed
- Colour the map by a known label to see what it groups

### What it distorts
- The **gaps** between islands are not true distances
- Island **sizes** do not reflect real spread or density
- Separated islands are a hint, not proof of **classes**
- Settings such as perplexity can **reshape** the picture: try several
- scikit-learn's t-SNE has no \`transform\`: it cannot place a **new** order`,
  narration:
    "Some reductions exist only to draw a picture. t-SNE and UMAP take many dimensions, here a summary of each customer's order history, and lay the customers out in two dimensions so that customers who are similar end up near each other. The map on the left shows three tight islands. That is useful for looking: you can spot groups, outliers, and rows whose labels seem wrong. But these methods are built to preserve local neighbourhoods, and they trade away almost everything else to do it. The distance between two islands does not mean the groups are that far apart in the original data. The size of an island does not tell you how spread out that group really is. Separated islands are a hint that structure exists, not proof that there are three real classes, and the next chapter is about testing that properly. The picture also depends on settings such as perplexity, so look at several before believing any one. And scikit-learn's t-SNE has no transform method: it cannot place a new customer on an existing map, so it is not a feature-engineering step for a model.",
}
