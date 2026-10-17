import type { Section } from '../types'

export const covariance: Section = {
  id: 'covariance',
  title: 'One-class margins and covariance assumptions',
  scene: 'covariance',
  focus: 'distances',
  slide: `## Covariance envelopes and one-class SVMs

When features move together, distance has to be measured in the **shape of the data**.

### Mahalanobis distance
- Measures distance in units of the cloud's own spread, along every direction
- Order P is **0.92** from the centre in plain distance, but **7.64** in Mahalanobis
- Order Q is twice as far in plain distance yet **inside**, at 2.73
- An elliptic envelope flags orders beyond a chosen Mahalanobis radius

### Assumptions and alternatives
- The envelope assumes **one Gaussian cloud**
- Outliers pull the mean and covariance: estimate them **robustly**
- A **one-class SVM** draws a kernel boundary; ν bounds the share flagged
- Both need **scaled** features and a reference that matches the claim`,
  narration:
    "In this reference cloud, item count and basket value rise together, so the cloud is a long, tilted ellipse. Ordinary distance treats every direction alike, and that misleads. Order P is less than one unit from the centre in plain distance, but it sits off to the side, across the narrow width of the cloud, where almost no orders lie. Mahalanobis distance measures distance in units of the cloud's own spread in each direction, and it puts P at seven point six four, far outside. Order Q is twice as far from the centre in plain distance, but it lies along the long axis, where orders are common, and its Mahalanobis distance is two point seven three, inside the boundary drawn at three. An elliptic envelope is exactly this: estimate the mean and covariance, and flag orders beyond a chosen Mahalanobis radius. It assumes the reference is a single Gaussian cloud, and the estimates of mean and covariance are themselves pulled toward any outliers in the reference, which is why a robust estimator is used. A one-class SVM makes a weaker assumption, drawing a flexible kernel boundary around the reference, with a parameter nu that bounds the fraction flagged. Both need scaled features.",
}
