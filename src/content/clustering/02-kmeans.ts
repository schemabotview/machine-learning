import type { Section } from '../types'

export const kmeans: Section = {
  id: 'kmeans',
  title: 'k-means assignment, update and initialisation',
  scene: 'kmeans',
  focus: 'steps',
  slide: `## k-means

k-means alternates two steps until nothing changes, and each step can only **lower** the inertia.

### The loop, traced
- **Assign** every customer to its nearest centroid
- **Update** each centroid to the mean of its customers
- From a poor start, inertia falls **94.6 → 20.3 → 7.3 → 6.6**, then stops changing
- Inertia is the sum of squared distances to each customer's own centroid

### What it assumes
- Groups are roughly **round** and similar in size, in scaled units
- k is fixed in advance; every customer is forced into **some** group
- The result depends on the **start**: section 8 returns to this
- \`KMeans\` uses k-means++ starts and several restarts by default`,
  narration:
    "k-means is the workhorse of clustering, and its mechanism fits in two steps. Start with k centroids, here three, placed deliberately badly so we can watch them move. Assign every customer to the nearest centroid. Then move each centroid to the mean of the customers assigned to it. Repeat. Each of those steps can only lower the inertia, the total squared distance from every customer to its own centroid, so the algorithm always settles. The trace shows it exactly, computed from the plotted points. From the poor start, inertia is ninety-four point six. After one round of assigning and updating, twenty point three. Then seven point three, then six point six, and after that nothing changes: the assignments are stable and the centroids stop moving. The dashed paths in the plot show where each centroid travelled. k-means builds in strong assumptions. It favours roughly round groups of similar size in the scaled feature space, it needs k fixed in advance, and it forces every customer into some group, even an obvious outlier. The answer also depends on where you start, which is why scikit-learn uses careful starting points and several restarts by default.",
}
