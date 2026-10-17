import type { Section } from '../types'

export const slices: Section = {
  id: 'slices',
  title: 'Error slices and score variability',
  scene: 'slices',
  focus: 'slices',
  slide: `## Error slices and variability

An average hides where a model fails; a single score hides how much it **varies**.

### Comparing candidates fairly
- Score both candidates on the **same folds** and compare fold by fold
- A beats B on **4 of 5** folds, by 0.16 min on average
- Folds share training rows, so the five scores are **dependent** — their spread is not a confidence interval
- Repeat CV with new seeds to see how stable the ranking is

### Looking inside the error
- Overall validation MAE **8.7 min** hides slices far worse
- East zone **14.2**, new customers **11.5**, rush hour **10.9**
- Large baskets look worst — on only **60 orders**, so the estimate is weak
- Always report a slice with its **count**`,
  narration:
    "Two diagnostic habits separate a careful evaluation from a single number. The first concerns comparisons. Candidates A and B are scored on the same five folds, so we can compare them fold by fold: A is better on four of the five, by about a sixth of a minute on average. That pairing is far more informative than comparing two means. But be careful about what the spread of fold scores means. The folds share most of their training rows, so the five scores are not independent measurements, and treating their standard deviation as a confidence interval overstates how sure we are. The second habit is to look inside the error. The overall validation error is eight point seven minutes, but that average hides slices where the model does much worse: the east zone at fourteen point two, new customers at eleven and a half, rush hour at nearly eleven. Those slices tell you where to improve features, and where the model should not be trusted. Large baskets look worst of all, but on only sixty orders, so that estimate is weak. Every slice is reported with its count.",
}
