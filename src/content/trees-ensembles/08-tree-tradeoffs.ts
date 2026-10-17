import type { Section } from '../types'

export const treeTradeoffs: Section = {
  id: 'tree-tradeoffs',
  title: 'Evaluation, calibration, memory and latency',
  scene: 'tree-tradeoffs',
  focus: 'table',
  slide: `## Choosing among tree models

Ensembles usually win on accuracy, and the remaining questions are **evidence, probabilities and cost**.

### Evidence that matches the claim
- The forest's out-of-bag log loss is **0.27**; grouped-temporal validation says **0.33**
- OOB rows are **random rows**: they ignore customer groups and time
- For a future-order claim, trust the **validation folds**

### Probabilities and cost
- Forest probabilities are often **squeezed** toward the middle; check calibration
- Boosting with log loss is often closer, but still needs checking
- The forest is **180 MB** and 45 ms per thousand; boosting **2 MB** and 6 ms
- Here boosting is both more accurate and **cheaper** to run
- The shallow tree can be **read** end to end`,
  narration:
    "By the end of this chapter the candidates are a logistic baseline, a single shallow tree, a random forest and a gradient-boosted model, all scored on the same grouped-temporal validation folds. The ensembles win on log loss, as they usually do, so the remaining questions are about evidence, probabilities and cost. First, evidence. The forest's out-of-bag estimate says nought point two seven, noticeably better than the nought point three three the validation folds report. The difference is not a mystery: out-of-bag rows are random rows, so the same customer's orders and later orders sit on both sides, which is exactly what our future-order claim forbids. Out-of-bag is convenient, but here it is optimistic, and the validation folds are the evidence. Second, probabilities. Averaging many trees tends to squeeze a forest's probabilities toward the middle, so they need checking before they feed a cost decision; boosting with log loss is often closer, but is checked too. Third, cost. The forest takes a hundred and eighty megabytes and forty-five milliseconds per thousand orders; boosting two megabytes and six. Here the more accurate model is also the cheaper one.",
}
