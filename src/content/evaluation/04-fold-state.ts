import type { Section } from '../types'

export const foldState: Section = {
  id: 'fold-state',
  title: 'Fit, transform, predict',
  scene: 'fold-state',
  focus: 'state',
  slide: `## Fit, transform, predict

Preparation steps **learn** too, so they obey the same rule as the model: learn on training data only.

### Three verbs
- **fit** learns state from the training fold: a mean, a category list, a vocabulary
- **transform** applies that stored state — to training **and** to unseen rows
- **predict** runs the fitted model on transformed unseen rows
- Calling \`fit\` again on unseen rows **overwrites** the state: never do it

### Fold-local state
- In cross-validation each fold refits its **own** state
- Fitting a scaler on all rows before splitting lets validation rows shape their own transform
- The leak is small for scaling, **large** for target-based or text steps
- At prediction time the stored state is used as-is: there is nothing to refit`,
  narration:
    "It is tempting to think only the model learns, but preparation steps learn too. A scaler learns a mean and a standard deviation. An encoder learns which categories exist. A text vectoriser learns a vocabulary. So the same rule applies to them: learn on training data only. Scikit-learn makes the rule visible with three verbs. Fit learns state from the training fold; here, a mean distance of ten point two kilometres and a standard deviation of five. Transform applies that stored state, unchanged, to the training rows and to the validation rows alike. Predict runs the fitted model on the transformed validation rows, and the result is validation evidence. In cross-validation, which comes later, every fold refits its own state from its own training part. The classic mistake is to fit the scaler on the whole dataset before splitting. Then the validation rows have helped shape their own transformation. For a scaler the damage is usually small; for anything that learns from the target, or from text, it can be large.",
}
