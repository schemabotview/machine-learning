import type { Section } from '../types'

export const hierarchical: Section = {
  id: 'hierarchical',
  title: 'Hierarchical linkage and dendrograms',
  scene: 'hierarchical',
  focus: 'tree',
  slide: `## Hierarchical clustering

Start with every customer alone and **merge the two closest groups**, again and again, until one remains.

### Reading the dendrogram
- Each join is drawn at the **height** where the merge happened
- c1 and c2 join first, at **0.4**; the last merge is at **3.2**
- Cut horizontally to get clusters: at **2.0**, two groups
- A long vertical gap before a merge suggests a natural cut

### Linkage decides "closest"
- **Single**: closest pair — groups can chain into long strings
- **Complete**: farthest pair — compact groups
- **Ward**: smallest increase in variance — compact, k-means-like
- Every pairwise distance is needed: cost grows fast with customers`,
  narration:
    "Hierarchical clustering builds a whole family of answers at once. Start with every customer as its own group. Find the two closest groups and merge them. Repeat until everything is one group. The dendrogram records the history: each join is drawn at the height where the merge happened. In this example customers one and two are merged first, at a height of nought point four, then four and five, then customer three joins the first pair, customer six joins the second, and finally the two halves merge at three point two. To get actual clusters you cut the tree horizontally. Cutting at two gives two groups, and the long vertical stretch between one point four and three point two suggests that two is a natural number of groups for these customers. The important choice is the linkage, the rule for how far apart two groups are. Single linkage uses the closest pair of points, which lets groups chain into long strings. Complete linkage uses the farthest pair, giving compact groups. Ward linkage merges whichever pair increases within-group variance least, and behaves much like k-means. All of them need pairwise distances, so the cost grows quickly with the number of customers.",
}
