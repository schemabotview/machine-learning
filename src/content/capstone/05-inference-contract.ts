import type { Section } from '../types'

export const inferenceContract: Section = {
  id: 'inference-contract',
  title: 'Inference and preprocessing contract',
  scene: 'inference-contract',
  focus: 'inputs',
  slide: `## The handoff to engineering

The model leaves this course as a **contract**: exactly what goes in at prediction time, and what travels with it.

### Inputs at the checkout click
- Every field exists **at checkout** — chapter 1's rule, in code
- Each states its type, what to do when **missing**, and what to do when **unseen**
- A new zone gets all-zero encoding **and** the abstain rule
- A customer with no history takes the **new-customer** path
- Inputs are validated **before** the pipeline

### Artefacts that travel together
- The fitted pipeline, the calibrator and the **policy config**
- The model card, the **data version**, and the test-set score distribution
- Serving, persistence, monitoring and retraining belong to **MLOps**`,
  narration:
    "The model leaves this course not as a file but as a contract with engineering. The first part lists exactly what goes in at prediction time. Every field must be available at the checkout click, which is chapter one's rule, now enforced in code at the boundary. Each field states its type and two behaviours: what happens when it is missing, and what happens when it takes a value training never saw. A missing distance is imputed with the training median and flagged, exactly as the pipeline was trained. A missing zone or basket size rejects the request rather than guessing. A brand-new zone is encoded as all zeros, and the policy's abstain rule applies. A customer with no history at all takes an explicit new-customer path instead of a silent zero. The second part lists the artefacts that travel together and must never be separated: the fitted pipeline, the fitted calibrator, the policy configuration with its threshold, cap and abstain rule, the model card, the training data version, and the distribution of scores on the test set as a reference. How these are served, stored, monitored and retrained is the work of the MLOps course.",
}
