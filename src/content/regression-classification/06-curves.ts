import type { Section } from '../types'

export const curves: Section = {
  id: 'curves',
  title: 'Precision, recall, ROC and PR curves',
  scene: 'curves',
  focus: 'pr',
  slide: `## ROC and precision–recall curves

One threshold gives one confusion matrix; sweeping every threshold gives a **curve** that describes the ranking.

### Two views of the same ranking
- **ROC**: recall against false-positive rate; AUC ≈ **0.87** is the chance a late order outranks an on-time one
- **PR**: precision against recall; its floor is the **base rate 0.15**, not the diagonal
- With rare positives, PR shows the cost of false alarms that ROC flattens
- Average precision summarises the PR curve; compare it **with the base rate**

### Averaging over classes
- **Macro**: mean of per-class scores — every class counts equally
- **Micro**: pool all decisions — dominated by frequent classes
- **Weighted**: per-class scores weighted by class count; always state which`,
  narration:
    "A threshold picks one point; a curve shows every point the ranking allows. Sweep the threshold from high to low and record, at each step, recall and the false-positive rate: that is the ROC curve. The area under it, about nought point eight seven here, has a clean meaning: the probability that a randomly chosen late order gets a higher score than a randomly chosen on-time one. The precision-recall curve plots the same sweep differently, precision against recall. Its reference line is not the diagonal but the base rate: a random ranking has precision nought point one five everywhere, because fifteen percent of orders are late. When positives are rare, the PR curve is the more revealing one, because the ROC curve's horizontal axis divides false alarms by eight hundred and fifty on-time orders and makes them look cheap. The marked point on both curves is the threshold of one half from the confusion matrix. With more than two classes, metrics must be averaged, and macro, micro and weighted averages answer different questions, so a reported score always says which one it is.",
}
