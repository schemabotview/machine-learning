import type { Section } from '../types'

export const earlyStopping: Section = {
  id: 'early-stopping',
  title: 'Early stopping and validation boundaries',
  scene: 'early-stopping',
  focus: 'nesting',
  slide: `## Early stopping

For models trained in many passes, the **number of passes** is a capacity setting: stop when held-out loss stops improving.

### How it works
- Training loss keeps falling with every epoch
- Loss on a held-out **inner split** turns upward after epoch 12
- Keep the weights from the best epoch and stop
- **Patience** waits a few epochs, so one noisy uptick does not end training

### Where the held-out data comes from
- The inner stopping split is carved from the **training fold**, about 10 %
- The **validation fold** stays untouched, so it can still compare candidates fairly
- Using the validation fold to stop **and** to compare double-counts it
- In scikit-learn: \`early_stopping=True\`, \`validation_fraction\`, \`n_iter_no_change\``,
  narration:
    "Some models are trained in many passes, an epoch at a time, gradient-boosted trees and neural networks among them, and for those the number of passes is itself a capacity setting. The longer training runs, the more closely the model fits the training rows. The plot shows the familiar shape. Training loss falls with every epoch. Loss on held-out data falls at first, reaches its minimum around epoch twelve, and then rises as the model starts fitting noise. Early stopping watches that held-out loss, keeps the weights from the best epoch, and stops. The important detail is which held-out data it watches. It should be an inner split, around ten percent, carved out of the training fold. The validation fold that we use to compare candidates must stay untouched. If the same validation rows both choose the stopping epoch and then score the model, they have been used twice, and the score is optimistic. Scikit-learn's estimators that support early stopping do exactly this inner split, controlled by a validation fraction and a patience setting.",
}
