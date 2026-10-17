import type { Section } from '../types'

export const feedback: Section = {
  id: 'feedback',
  title: 'Human review, interventions and feedback loops',
  scene: 'feedback',
  focus: 'loop',
  slide: `## The model changes its own data

Acting on a prediction changes the outcome, so the **labels** the next model learns from change too.

### The loop
- High-risk orders get **express shipping**, and mostly arrive on time
- Their new labels say "on time": **9 %** late
- A model retrained on them learns that high-risk orders are **fine**, and stops flagging them

### Keeping an honest measurement
- A **random 5 % holdout** of flagged orders gets no intervention
- Its late rate, **41 %**, is what the risk really is without express
- The difference is the intervention's effect — an experiment, not a prediction

### People in the loop
- Log overrides with a reason; audit cases where reviewers **always agree** with the model`,
  narration:
    "A deployed model does not just observe the world; it changes it. When the late-risk model flags an order, the retailer upgrades it to express, and most of those orders then arrive on time. Their labels, collected a week later, say on time: only nine percent of flagged, upgraded orders were late. Retrain naively on those labels and the next model learns that orders which look high-risk are actually fine, stops flagging them, and the late deliveries return. The fix is to keep one honest measurement. Hold back a small random share of flagged orders, here five percent, that receive no intervention. Their late rate, forty-one percent, is what the risk really is without express shipping. The difference between the two groups is the effect of the intervention, and because the holdout was random, it is an experiment rather than a prediction, which is exactly the causal evidence chapter one said a predictive model cannot provide. People in the loop need the same care. Overrides should be logged with a reason, and if reviewers agree with the model almost every time, audit those cases: that can be automation bias rather than agreement.",
}
