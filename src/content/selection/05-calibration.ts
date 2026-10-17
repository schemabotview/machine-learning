import type { Section } from '../types'

export const calibration: Section = {
  id: 'calibration',
  title: 'Reliability diagrams and calibration',
  scene: 'calibration',
  focus: 'reliability',
  slide: `## Calibration

A model is **calibrated** when, among orders it gives P(late) = 0.3, about 30 % really are late.

### The reliability diagram
- Bin held-out predictions; plot each bin's mean prediction against its observed late rate
- The raw forest is **squeezed**: its 0.15 bin is late only 6 % of the time, its 0.65 bin 88 %
- Calibration changes probabilities but keeps the **ranking**, so AUC is unchanged

### Fitting a calibrator correctly
- **Isotonic** or **sigmoid** maps raw scores to calibrated probabilities
- The calibrator is fitted on rows the model **did not** train on, or via CV
- \`CalibratedClassifierCV(model, method="isotonic", cv=5)\` does both
- Judge the result on the **test set**, once`,
  narration:
    "Chapter three showed that ranking and probability quality are different things. Calibration is about the second. A model is calibrated if its probabilities mean what they say: among all the orders it scores at thirty percent, about thirty percent are actually late. The reliability diagram checks this directly. Bin held-out predictions by their predicted probability, and for each bin plot the mean prediction against the fraction that were actually late. A calibrated model sits on the diagonal. Our raw forest does not. Its predictions are squeezed toward the middle: orders it scores at fifteen percent are late only six percent of the time, and orders it scores at sixty-five percent are late eighty-eight percent of the time. Calibration fits a monotone mapping from raw scores to corrected probabilities, isotonic or sigmoid. Because the mapping is monotone, the ranking and the AUC do not change. The calibrator learns from labels, so it must be fitted on rows the model did not train on, either a separate split or cross-validation, which is what scikit-learn's calibrated classifier does. And the final judgement of the calibrated model happens on the test set, once.",
}
