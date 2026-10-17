import type { Section } from '../types'

export const probabilityQuality: Section = {
  id: 'probability-quality',
  title: 'Probability losses, multiclass and multilabel',
  scene: 'probability-quality',
  focus: 'compare',
  slide: `## Ranking quality is not probability quality

Two models can order orders identically and still give **different probabilities**: AUC cannot tell them apart.

### Same ranking, different probabilities
- Both models: ROC AUC **0.87**
- Model B averages **P(late) = 0.27** when the late rate is 0.15
- **Log loss** and **Brier score** (mean squared probability error) both expose it
- If the decision uses the probability itself, judge the probability
- Calibration — making probabilities match observed rates — is **chapter 7**

### Output structure
- **Multiclass**: one outcome per order — early, on time *or* late; softmax sums to 1
- **Multilabel**: several can hold at once — late *and* damaged; one probability each
- Metrics follow the structure: per-label scores for multilabel, averaged per class for multiclass`,
  narration:
    "Ranking and probability are different properties, and a model can be good at one and poor at the other. Models A and B here put the orders in exactly the same order, so their ROC AUC is identical, nought point eight seven. But model B's probabilities are stretched upward: on average it says twenty-seven percent of orders will be late, when the real rate is fifteen. AUC is blind to that, because it only looks at order. Log loss sees it, and so does the Brier score, which is simply the mean squared difference between the predicted probability and the outcome. If all you do is rank orders and inspect the top hundred, model B is fine. If you multiply the probability by a cost to decide whether to pay for express shipping, model B will overspend, and you should judge it by a probability metric. Chapter seven returns to fixing this, with calibration. Outputs also differ in structure. Multiclass means exactly one outcome per order, early, on time or late, and the probabilities sum to one. Multilabel means several outcomes can hold together, late and damaged, each with its own probability.",
}
