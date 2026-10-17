import type { Section } from '../types'

export const compositePipeline: Section = {
  id: 'composite-pipeline',
  title: 'Composite end-to-end pipelines',
  scene: 'composite-pipeline',
  focus: 'columns',
  slide: `## One pipeline, end to end

Wrap preparation and model in **one object**, so a single \`fit\` learns every state on train and \`predict\` reuses all of it.

### What the pipeline guarantees
- Numeric columns: **median impute → scale**, both fitted on train
- Categorical columns: **one-hot**, new values ignored
- The model is fitted on the transformed training rows only
- Column lists are explicit: a column not named is **dropped**, not silently passed

### Why it matters
- Cross-validation can refit the **whole pipeline** per fold — no hand-written leaks
- The fitted object is the exact transformation the model was scored with
- One object to compare, tune and refit
- The same object is what chapter 12 hands to engineering`,
  narration:
    "Everything in this chapter comes together in one object. A column transformer sends the numeric columns through a median imputer and a scaler, and the zone column through a one-hot encoder that ignores new values. A pipeline then chains that preparation with the model, here a linear regression, which is the subject of the next chapter. Now a single call to fit, on the training rows, learns every piece of state in the right order: the median, the mean and spread, the zone list, and finally the coefficients. A single call to predict on validation rows reuses all of it, and the mean absolute error that comes out is validation evidence. This is more than tidiness. Because the whole pipeline is one estimator, cross-validation and model search can refit it from scratch inside every fold, so the leaks we have been chasing cannot be written by hand. And the fitted pipeline is exactly the transformation the model was scored with, which is what we will eventually hand to engineering in chapter twelve.",
}
