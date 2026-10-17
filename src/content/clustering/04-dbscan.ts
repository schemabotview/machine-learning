import type { Section } from '../types'

export const dbscan: Section = {
  id: 'dbscan',
  title: 'Density-based clusters and noise',
  scene: 'dbscan',
  focus: 'compare',
  slide: `## DBSCAN: density and noise

DBSCAN grows clusters through **dense** neighbourhoods and labels isolated points as **noise**.

### The mechanism
- A **core** point has at least \`min_samples\` neighbours within distance **eps**
- Clusters grow by linking core points that reach each other
- Points reached by no core point are **noise**, not forced into a group
- The number of clusters is **found**, not chosen

### Sensitivity, measured on the moons
- eps **0.3** shatters them into 5 pieces with 10 noise points
- eps **0.4** recovers both moons exactly, with 5 noise points
- eps **0.45** merges them into one
- k-means with k = 2 cuts across the shapes: **73 %** grouped right`,
  narration:
    "DBSCAN defines a cluster by density instead of by a centre. A point is a core point if at least a minimum number of other points lie within a distance called eps. Clusters grow by linking core points that are within reach of one another, and any point that no core point reaches is labelled noise. Two things follow. Clusters can take any shape, as long as they are dense. And not every point has to belong somewhere: an isolated customer is reported as noise rather than forced into the nearest group. The number of clusters is found, not chosen in advance. The price is sensitivity to eps, and the table, computed on these two half-moons, shows how sharp it is. With eps nought point three, the neighbourhoods are too small, and the moons shatter into five pieces with ten noise points. At nought point four, both moons are recovered exactly, and the five scattered points are labelled noise. At nought point four five, the neighbourhoods bridge the gap and the two moons merge into one cluster. k-means, asked for two clusters, cuts straight across both shapes and gets only seventy-three percent of the points into the right group.",
}
