import type { Section } from '../types'

export const stability: Section = {
  id: 'stability',
  title: 'Explanation stability and non-causal limits',
  scene: 'explanation-stability',
  focus: 'spread',
  slide: `## Explanations wobble

An explanation is an **estimate**: refit the model or reshuffle the column and it moves.

### Measuring the wobble
- Repeat permutation importance over **20 bootstrap refits**
- Rush hour is stable: **2.9–3.9** minutes
- Distance (0.6–3.4) and road km (0.4–3.2) **trade credit** from refit to refit
- Their ranking is not meaningful; their **combined** importance is

### Limits that no repetition removes
- Explanations describe **the model**, not the delivery process
- A high importance is not a lever: changing the feature may not change the outcome
- Report ranges, group correlated features, and say what the explanation is **of**`,
  narration:
    "An explanation is itself an estimate, and like any estimate it varies. Repeat permutation importance across twenty bootstrap refits of the model and plot the range. Rush hour is stable: its importance stays between about three and four minutes every time, so we can say with some confidence that the model relies on it. Distance and road distance are a different story. Each ranges from well under one minute to over three, because in some refits the model leans on one and in others on the other. Their individual ranking is not meaningful, but their combined importance is, so correlated features are better grouped and permuted together. Some limits remain however many times you repeat. The explanation describes the model's behaviour, not the delivery process. A feature with high importance is not a lever: the model's reliance on rush hour does not mean that changing an order's timing would change its outcome, because the data cannot separate rush hour from everything that comes with it. So report explanations as ranges, group features that move together, and always say what the explanation is of.",
}
