import type { Section } from '../types'

export const stacking: Section = {
  id: 'stacking',
  title: 'Voting, averaging and out-of-fold stacking',
  scene: 'stacking',
  focus: 'oof',
  slide: `## Voting, averaging and stacking

Combining different model families helps when they make **different mistakes**.

### Simple combinations
- **Averaging** or voting: equal weight to each model's prediction
- Works best when the models are similarly good but **differently wrong**

### Stacking, out of fold
- A **meta-model** learns how much to trust each base model
- It must train on predictions the base models made for orders they **never saw**
- Each order's base predictions come from models fitted on the **other folds**
- In-sample base predictions look perfect and teach the meta-model to trust the overfitter
- In scikit-learn, \`StackingRegressor(cv=5)\` builds the out-of-fold columns`,
  narration:
    "Different model families make different mistakes. A linear model captures smooth trends, a forest picks up interactions, k-NN catches local patterns, boosting chases residual structure. Combining them can beat each one, but only to the extent that their errors differ. The simplest combination is to average their predictions, or for classes to vote, with equal weights. Stacking goes further: a second-level model, the meta-model, learns how much weight each base model deserves. The trap is in what the meta-model learns from. If the base models predict the same orders they were trained on, a flexible model like the forest will look nearly perfect on those orders, and the meta-model will learn to trust it far too much. So the inputs to the meta-model must be out-of-fold predictions: split the training data into five folds, fit each base model on four of them, and predict the fifth. The table shows those columns: every number is a prediction for an order that particular model never saw. The meta-model, here a ridge regression, is then fitted on those honest predictions. Scikit-learn's stacking estimators do this internally with their cv setting.",
}
