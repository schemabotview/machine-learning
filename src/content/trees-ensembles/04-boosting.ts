import type { Section } from '../types'

export const boosting: Section = {
  id: 'boosting',
  title: 'Boosting as sequential loss reduction',
  scene: 'boosting',
  focus: 'round',
  slide: `## Gradient boosting

Boosting builds trees **in sequence**: each new tree is fitted to what the current ensemble still gets wrong.

### One round, traced
- Start from a constant: the mean duration, **64 minutes**
- Residuals: −24, −14, −4 for short orders; +11, +31 for long ones
- A one-split tree predicts **−14** for short orders, **+21** for long
- Add half of it (η = 0.5): training MSE falls from **374 to 153.5**

### The general loop
- For squared error the residual is the **negative gradient**; other losses swap in their own
- Small trees, small steps, hundreds of rounds
- Each tree depends on all earlier ones: training is **sequential**, not parallel
- Forests reduce **variance**; boosting reduces **bias**, so it can overfit`,
  narration:
    "Boosting builds an ensemble in a completely different way. Instead of independent trees averaged at the end, it adds trees one at a time, and each new tree is fitted to whatever the current ensemble still gets wrong. Here is one round on five training orders. We start from the simplest possible model, a constant: the mean duration, sixty-four minutes. The residuals are what that misses: the three short orders are over-predicted by twenty-four, fourteen and four minutes, the two long orders are under-predicted by eleven and thirty-one. Now fit a tiny tree, a single split on distance, to those residuals. It predicts minus fourteen for short orders and plus twenty-one for long ones. We add half of that tree's output, a learning rate of nought point five, to the constant. The training mean squared error drops from three hundred and seventy-four to a hundred and fifty-three point five, and the next tree is fitted to the new, smaller residuals. For squared error, the residual is exactly the negative gradient of the loss, which is how boosting generalises to log loss and others. Forests attack variance; boosting attacks bias, which is why boosting can overfit if it runs too long.",
}
