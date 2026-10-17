import type { Section } from '../types'

export const confusion: Section = {
  id: 'confusion',
  title: 'Scores, labels and confusion matrices',
  scene: 'confusion',
  focus: 'matrix',
  slide: `## Scores, labels and the confusion matrix

A model outputs a **score**, which becomes a **probability**, which a threshold turns into a **label**, which drives a **decision**.

### Counting outcomes at threshold 0.5
- Of 150 late orders, **90 caught**, 60 missed
- Of 850 on-time orders, **70 false alarms**
- Precision **0.56**: of orders flagged, how many were late
- Recall **0.60**: of late orders, how many were flagged
- Moving the threshold trades one for the other: the model is **unchanged**

### Why accuracy misleads
- Accuracy is **0.87** — but calling every order on time scores **0.85**
- Each cell has a cost: a missed late order and a needless express offer differ
- The threshold is a **decision**, chosen on validation data — chapter 7`,
  narration:
    "A classifier's output passes through several stages, and it helps to keep them apart. The model computes a score, here one point four. The sigmoid turns it into a probability, nought point eight. A threshold, here one half, turns the probability into a label, late. And the label drives a decision, offering express shipping. Do that for a thousand validation orders and count what happened. Of the hundred and fifty orders that were actually late, ninety were flagged and sixty were missed. Of the eight hundred and fifty on-time orders, seventy were flagged anyway. Precision asks, of the orders we flagged, how many were late: ninety out of a hundred and sixty, nought point five six. Recall asks, of the late orders, how many did we flag: ninety out of a hundred and fifty, nought point six. Accuracy looks impressive at nought point eight seven, until you notice that calling every single order on time scores nought point eight five. With a rare class, accuracy hides almost everything. What matters is the cost of each cell, and those costs come from the decision.",
}
