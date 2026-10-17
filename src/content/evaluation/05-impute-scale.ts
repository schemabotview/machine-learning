import type { Section } from '../types'

export const imputeScale: Section = {
  id: 'impute-scale',
  title: 'Missing values and numeric scaling',
  scene: 'impute-scale',
  focus: 'rows',
  slide: `## Missing values and scaling

Missing distances are **filled with a value learned on train**, and the fact they were missing is kept.

### Imputing
- The median imputer learns **9.0 km** on the training fold and reuses it everywhere
- A **missing flag** keeps the signal: a distance may be missing *because* the address is unusual
- Dropping incomplete rows changes the population the claim covers
- The imputer and flag are fitted **inside each fold**, like any step

### Scaling
- The scaler learns **mean 10.2, sd 5.0** on train: z = (x − 10.2) / 5.0
- Scale matters for distance-based and penalised models, not for trees
- Impute **before** scaling, so the scaler sees the filled values
- Validation values outside the training range are allowed — and worth noticing`,
  narration:
    "Here are five validation rows of the distance feature, two of them missing. The imputer was fitted on the training fold, where the median distance was nine kilometres, so both gaps become nine point zero, the training median, not the validation median. Next to that is a missing flag. Missingness is often informative: a distance can be missing because the address could not be geocoded, and those orders may genuinely behave differently, so we let the model see it. Simply dropping incomplete rows would be worse, because it silently changes the population our claim covers. Then the scaler, also fitted on train, with a mean of ten point two and a standard deviation of five. Four point one kilometres becomes minus one point two two; twenty-two kilometres becomes two point three six. Scaling matters for models that measure distances or penalise coefficient sizes, which we meet in chapters four and five; tree models do not care. A validation value beyond the training range is not an error, but it is a place where the model is extrapolating.",
}
