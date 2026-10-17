import type { Section } from '../types'

export const pca: Section = {
  id: 'pca',
  title: 'Centred PCA, SVD and component scores',
  scene: 'pca',
  focus: 'axes',
  slide: `## Principal component analysis

PCA rotates the data onto the directions along which it **varies most**, ordered from most to least.

### The mechanism
- **Centre** each feature on its training mean
- The SVD of the centred matrix gives the directions: the rows of Vᵀ
- **PC1** follows the shared trend of road and straight-line distance
- **PC2** is orthogonal to it and carries the small remainder

### Component scores
- A row's **score** on a component is its projection onto that direction
- Keeping k components keeps the first k score columns
- New orders are centred with the **training** mean
- Components are only defined up to **sign**: do not read the direction of an arrow
- The derivation belongs to **Linear Algebra**; here we use it`,
  narration:
    "Principal component analysis finds the directions along which the data varies most. The plot shows two scaled features that move together, straight-line distance and road distance. The first step is to centre each feature by subtracting its training mean, so that the cloud sits around the origin. Then the singular value decomposition of the centred matrix gives a set of orthogonal directions, ordered by how much variance lies along each. The first principal component points along the shared trend of the two distances; almost all the variation is there. The second is at right angles to it and carries what little is left, the detour that makes road distance differ from a straight line. A row's score on a component is its projection onto that direction, and keeping k components means keeping the first k score columns as the new features. Two cautions. A component and its negative are equally valid, so the sign of an arrow means nothing. And the derivation of why the SVD gives these directions belongs to the Linear Algebra course; here we only need to use it correctly.",
}
