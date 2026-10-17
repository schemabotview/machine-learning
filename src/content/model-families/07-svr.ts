import type { Section } from '../types'

export const svr: Section = {
  id: 'svr',
  title: 'Support-vector regression and prediction costs',
  scene: 'svr',
  focus: 'tube',
  slide: `## Support-vector regression

SVR fits a **tube** of half-width ε around the prediction: errors inside it cost nothing.

### How it fits
- Points inside the ±ε tube contribute **no loss** at all
- Points outside pay linearly — here **5 of 18** orders, the support vectors
- ε is in the target's units: a 6-minute tube ignores errors under **6 minutes**
- With a kernel, the fitted line becomes a curve
- Like the hinge, the loss is **linear** outside the tube: one wild order cannot dominate

### What prediction must keep
- Linear models keep **d** coefficients: cheap at any scale
- k-NN keeps **every training row**: cost grows with n
- Kernel SVM and SVR keep their **support vectors**
- Memory and latency belong in the comparison, not after it
- Latency is measured on the **full pipeline**`,
  narration:
    "Support-vector regression carries the margin idea over to numeric targets. Instead of a street between classes, it fits a tube around the prediction, with a half-width called epsilon. Any order whose actual duration falls inside the tube costs nothing at all. Orders outside the tube pay a loss that grows linearly with how far outside they are, and those orders are the support vectors, five of eighteen in this plot. Epsilon is measured in the target's own units, so a six-minute tube says that errors under six minutes are not worth chasing. That is a statement about the decision, and it can be chosen deliberately rather than just tuned. With a kernel the line becomes a curve, exactly as in classification. The second half of this section is about what each model must keep in order to predict. A linear model keeps one coefficient per feature, which is cheap at any scale. k-NN keeps every training row and searches them for every prediction. Kernel SVMs and SVR keep their support vectors, which can be a large share of the data. Those memory and latency costs belong in the model comparison, not in an afterthought.",
}
