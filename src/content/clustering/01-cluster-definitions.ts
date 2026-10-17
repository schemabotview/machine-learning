import type { Section } from '../types'

export const clusterDefinitions: Section = {
  id: 'cluster-definitions',
  title: 'Cluster definitions, distance and scaling',
  scene: 'cluster-definitions',
  focus: 'kinds',
  slide: `## What a cluster is

Clustering has no target to check against, so the **definition** of a group decides what you find.

### The data, as of a date
- One row per customer, summarised **as of 31 March** from orders delivered by then
- Features: orders in 90 days, mean basket, late share, zone
- A customer with **no recent orders** needs a decision, not a silent zero

### Four definitions
- **Centroid**: points near a centre — k-means
- **Connectivity**: groups built by merging close pairs — hierarchical
- **Density**: dense regions separated by sparse ones — DBSCAN
- **Model-based**: components of a probability mixture
- All of them rest on a **distance**, so scaling and feature choice come first`,
  narration:
    "Clustering is unsupervised: there is no delivery time or late flag to check against, only the inputs. That makes one decision dominate everything else: what counts as a group. Our data for this chapter is a customer summary taken as of a fixed date, the thirty-first of March, built only from orders delivered by then, so it obeys the same as-of rule as chapter two. Each row is a customer, with their number of orders in the last ninety days, mean basket value, share of late deliveries, and zone. Notice the customer with no recent orders at all: whether they belong in the analysis, and how their missing basket value is represented, is a decision that shapes every result. There are four broad definitions of a cluster. Centroid methods like k-means say a group is the points near a centre. Connectivity methods build groups by merging close pairs. Density methods say a group is a dense region separated from others by sparse space. Model-based methods treat groups as components of a probability mixture. Every one of them rests on a notion of distance, so scaling and the choice of features come before any algorithm.",
}
