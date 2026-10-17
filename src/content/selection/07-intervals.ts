import type { Section } from '../types'

export const intervals: Section = {
  id: 'intervals',
  title: 'Predictive quantiles, abstention and coverage',
  scene: 'intervals',
  focus: 'band',
  slide: `## Prediction intervals and abstention

A single duration hides uncertainty; a **range** makes it visible, if its coverage is checked.

### Quantile models
- Fit separate models for the **10th** and **90th** percentiles (quantile loss)
- Together they form a nominal **80 %** interval that widens on long routes
- Promise the customer the **90th** percentile, not the median

### Coverage, honestly reported
- Validation coverage is **78 %** overall — close to nominal
- **71 %** at rush hour and **61 %** in the new west zone
- Nominal coverage is a target, **not a guarantee**; formal guarantees need methods beyond this course
- Where the interval is too wide or coverage weak, **abstain**: route to a fixed rule or a person`,
  narration:
    "A predicted duration of forty-five minutes says nothing about how sure the model is. Quantile models make the uncertainty visible. Instead of predicting the mean, a model can be trained with quantile loss to predict a chosen percentile. Fit one for the tenth percentile and one for the ninetieth, and together they give a nominal eighty percent interval for each order. In the plot the band widens on long routes, where delivery times genuinely vary more. For the customer-facing promise, the ninetieth percentile is often the more useful number than the median. Now the honest part. The band claims eighty percent coverage, so check it on held-out data. Overall, seventy-eight percent of validation orders fall inside, close to nominal. But at rush hour it is seventy-one percent, and in the newly opened west zone only sixty-one. Nominal coverage is a target the method aims at, not a guarantee; methods with formal guarantees exist but are beyond this course. Where the interval is too wide to be useful, or coverage is known to be weak, the system can abstain: fall back to a fixed rule, or send the case to a person.",
}
