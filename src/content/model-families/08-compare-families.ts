import type { Section } from '../types'

export const compareFamilies: Section = {
  id: 'compare-families',
  title: 'Comparing assumptions, calibration and costs',
  scene: 'compare-families',
  focus: 'grid',
  slide: `## Comparing the families

No family is best in general; each fits a different **assumption** about the data, at a different **cost**.

### What to ask of each
- What does it **assume**: similarity, independence, Gaussian classes, a margin?
- Does it need **scaled** features?
- What does **prediction** cost in time and memory?
- What does its **native output** actually mean?
- How does it react to **unseen** or out-of-range inputs?

### Scores are not probabilities
- k-NN gives vote fractions; SVMs give **margin scores**
- Naive Bayes probabilities are pushed toward **0 and 1**
- Logistic regression and LDA aim at probabilities, but still need checking
- Calibrating any of them is **chapter 7**
- Compare candidates on the **same splits** with the metric the decision needs`,
  narration:
    "Having seen several families, the useful question is not which one is best, because none is in general, but which assumption fits this problem at a cost we can afford. k-NN assumes that nearby orders behave alike. Naive Bayes assumes features are independent within a class. LDA and QDA assume each class is a Gaussian cloud. SVMs assume a margin exists, possibly after a kernel. Several of them need scaled features: anything built on distances or penalties does, the generative models mostly do not. Their prediction costs differ by orders of magnitude, from a handful of multiplications to a search through the whole training set. And their native outputs mean different things. A k-NN vote fraction and an SVM margin score are rankings, not probabilities. Naive Bayes produces probabilities, but its false independence pushes them toward zero and one. Logistic regression and LDA aim at probabilities directly, and even they should be checked. So when these families are compared, it is on identical splits, with the metric the decision actually needs, and if probabilities feed a cost, they are calibrated first, which is chapter seven.",
}
