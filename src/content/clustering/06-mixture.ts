import type { Section } from '../types'

export const mixture: Section = {
  id: 'mixture',
  title: 'Mixture densities, soft memberships and EM',
  scene: 'mixture',
  focus: 'resp',
  slide: `## Gaussian mixtures and EM

A mixture model says the data comes from **several Gaussian components**, and gives each customer a **probability** of belonging to each.

### Soft memberships, computed
- Components: small baskets around **£25**, large around **£60**, weights 0.6 / 0.4
- A £30 customer is **0.98** small; a £45 customer **0.98** large
- A £38 customer is split **0.61 / 0.39** — k-means would force a choice
- Full covariances let components be **elongated**, unlike k-means

### Expectation–maximisation
- **E-step**: compute each customer's responsibilities from the current components
- **M-step**: refit each component's weight, mean and spread, weighted by those responsibilities
- Each round cannot lower the training likelihood; it stops at a **local** optimum`,
  narration:
    "A Gaussian mixture model turns clustering into density estimation. It says each customer was drawn from one of several Gaussian components, each with its own weight, centre and spread, and the overall density is their weighted sum. Here, on mean basket value, one component represents small baskets around twenty-five pounds, with weight nought point six, and the other large baskets around sixty pounds, with weight nought point four. The model's answer for a customer is not a single label but a set of probabilities, called responsibilities: the share of the density at that customer's value that each component contributes. The table computes them. A customer averaging thirty pounds is ninety-eight percent small-basket. A customer at forty-five pounds is ninety-eight percent large-basket. A customer at thirty-eight sits between the two, sixty-one percent and thirty-nine percent, and the model says so, where k-means would force a hard choice. The parameters are fitted by expectation-maximisation. The E-step computes every customer's responsibilities from the current components; the M-step refits each component using those responsibilities as weights. Each round cannot lower the training likelihood, and it converges to a local optimum.",
}
