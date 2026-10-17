import type { Section } from '../types'

export const residuals: Section = {
  id: 'residuals',
  title: 'Regression losses and metrics',
  scene: 'residuals',
  focus: 'rows',
  slide: `## Residuals, losses and metrics

A **residual** is actual minus predicted; a loss turns residuals into one number to minimise or report.

### Two losses, two stories
- **MAE 10.3 min**: the typical miss, in minutes, robust to one bad order
- **RMSE 17.0 min**: squares first, so the single **40-minute miss** dominates
- Squared loss predicts the **mean**; absolute loss predicts the **median**
- Plot residuals against predictions: a **pattern** means the model is missing structure

### Relative to the baseline
- Median-prediction baseline: **MAE 19.5** on the same orders
- Skill = 1 − 10.3 / 19.5 = **0.47**: the model removes about half the error
- R² is the same idea with squared error and the **mean** as baseline
- All six numbers are **validation evidence**: they compared candidates, not a final test`,
  narration:
    "Here are six validation orders with their actual and predicted durations. The residual is actual minus predicted, so a positive residual means the order took longer than we said. Mean absolute error averages the sizes of the residuals: ten point three minutes, the typical miss. Root mean squared error squares them first, averages, and takes the square root: seventeen minutes. The difference comes almost entirely from one order that took forty minutes longer than predicted. Squaring makes large misses count far more, which is right if a long delay is much worse than two short ones, and wrong if it just reflects one strange order. The choice also changes what a model learns: minimising squared error targets the mean duration, minimising absolute error targets the median. A metric only means something next to a baseline. Predicting the median for every order gives an MAE of nineteen point five on the same rows, so the model removes about half the error, a skill of zero point four seven. And because we used these rows to compare candidates, these numbers are validation evidence, not a final result.",
}
