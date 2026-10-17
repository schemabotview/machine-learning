import type { Section } from '../types'

export const tradeoffs: Section = {
  id: 'tradeoffs',
  title: 'Accuracy–resource trade-offs and decision policy',
  scene: 'tradeoffs',
  focus: 'policy',
  slide: `## Trade-offs and the decision policy

A model becomes useful only together with a **policy** that turns its probabilities into actions.

### The frontier
- Plot every candidate by **log loss and latency**
- The frontier joins candidates nothing beats on both: base rate, logistic, boosting
- The forest sits **behind** it: slower and no more accurate
- Among frontier models, the choice weighs accuracy against speed and **readability**

### The policy, fixed on validation
- Offer express when **P(late) > 0.3** — lowest expected cost
- Never more than **200 per 1,000** — the courier's capacity
- **Abstain** in zones with under 90 days of history
- Keep a **random 5 %** holdout of flagged orders for honest labels`,
  narration:
    "Choosing a model and deciding how to use it are two halves of one recommendation. The first half is a trade-off between accuracy and cost. Plot every candidate by its cross-validated log loss and its prediction latency. The frontier joins the candidates that nothing else beats on both axes at once: the base rate, the logistic model and boosting. The forest sits behind the frontier, slower than boosting without being more accurate, so it drops out whatever the latency budget. Among the frontier models, the choice depends on how much accuracy is worth against speed and readability; here boosting is fast enough, and it is chosen. The second half is the decision policy, fixed on validation data before the test set is opened. Offer express shipping when the calibrated probability of lateness exceeds nought point three, the threshold that minimised expected cost in chapter seven. Never exceed two hundred offers per thousand orders, the courier's capacity. Abstain, and fall back to the carrier's standard promise, in any zone with less than ninety days of history. And keep a random five percent of flagged orders without intervention, so that labels stay honest.",
}
