import type { Section } from '../types'

export const alertBudget: Section = {
  id: 'alert-budget',
  title: 'Score conventions and alert budgets',
  scene: 'alert-budget',
  focus: 'curve',
  slide: `## Thresholds and alert budgets

A detector produces a **score**; how many alerts it raises is a decision about **review capacity**.

### Know the sign convention
- \`score_samples\`: **lower** means more abnormal
- \`decision_function\`: **negative** means flagged at the fitted threshold
- \`contamination\` only sets that default threshold — it is a guess, not a measurement

### Set the threshold by the budget
- The team can review **50 orders a day**: flag below **−0.55**
- In a reviewed validation month, **31 %** of those alerts were real data errors
- A stricter threshold raises that share but misses more errors
- The budget, not the score's scale, fixes the **threshold**
- Report alerts per day **and** the confirmed share, never just a score`,
  narration:
    "An anomaly detector produces a score, and the first practical job is to know which way it points. In scikit-learn, score samples is lower for more abnormal orders. Decision function shifts that score so that negative values are the ones flagged at the estimator's default threshold. And that default comes from the contamination setting, which is simply your guess at the share of anomalies; it is not something the model measured. So the threshold is better set by the decision it serves. Here the data-quality team can review fifty orders a day. On a validation month of orders, about four thousand a day, the curve shows how many alerts each threshold produces, and a threshold of minus nought point five five gives fifty a day. Because the team reviewed that month's alerts, we can also say how many were real data errors: thirty-one percent at that threshold. A stricter threshold raises the confirmed share, to forty-five percent at minus nought point six, but flags fewer orders and misses more errors. The useful report is both numbers together, alerts per day and the share confirmed, not a score on its own.",
}
