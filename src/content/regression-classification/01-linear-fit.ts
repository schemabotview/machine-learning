import type { Section } from '../types'

export const linearFit: Section = {
  id: 'linear-fit',
  title: 'Linear predictions and coefficients',
  scene: 'linear-fit',
  focus: 'line',
  slide: `## Linear predictions and coefficients

A linear model predicts a **weighted sum** of features: duration ≈ 25 + 4.2 × distance + 1.1 × items.

### Reading a coefficient
- 4.2 means **4.2 more minutes per km**, holding the other features fixed
- The intercept is the prediction at all-zero features — often outside the data
- Coefficients carry the **units** of their features, so raw sizes are not importance
- Fitting chooses the weights that minimise **squared error** on the training rows

### When features overlap
- Add road distance, nearly a copy of distance: fits A and B predict **identically**
- Full column rank only means no exact copy; it does **not** mean independent features
- Collinearity leaves predictions stable and **coefficients unstable** — do not read them as effects`,
  narration:
    "A linear regression predicts a weighted sum of the features plus an intercept. On these training orders the fit says duration is about twenty-five minutes, plus four point two minutes per kilometre, plus a minute per basket item. The reading of a coefficient is precise: four point two more minutes for each extra kilometre, holding the other features fixed. The intercept is the prediction when every feature is zero, which here is an order with no distance and no items, outside anything we observe, so it is a fitting constant rather than a fact. Coefficients carry units, so a large coefficient on a feature measured in kilometres and a small one on a feature measured in metres say nothing about importance. Now add road distance, which is almost a copy of straight-line distance. Fit A puts all the weight on distance; fit B splits it between the two. Their predictions and validation error are identical. The design matrix still has full rank, because the columns are not exact copies, but they are far from independent, and the individual coefficients are no longer trustworthy as effects.",
}
