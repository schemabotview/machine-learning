import type { Section } from '../types'

export const foldLocalReduction: Section = {
  id: 'fold-local-reduction',
  title: 'Fold-local reduction and downstream validation',
  scene: 'fold-local-reduction',
  focus: 'results',
  slide: `## Judging a reduction by the task

When a reduction feeds a model, it is a **fitted pipeline step** — and its size is chosen by the model's score.

### Inside the pipeline
- Scaler, PCA and model are refitted **inside every fold**
- PCA fitted on all rows lets held-out rows shape the components: a leak
- The number of components is a setting, searched on **validation**
- Report the chosen size **with** the score it was chosen by

### High variance is not high value
- Keeping 79 % of the variance raises CV MAE from **9.0 to 10.9** minutes
- The rush-hour flag has **little variance but strong signal**; it lives in a late component
- A variance cut-off judges inputs; only **downstream validation** judges usefulness
- Here, no reduction is best: say so`,
  narration:
    "When a reduction feeds a predictive model, it stops being a picture and becomes a pipeline step, subject to all the rules of chapter two. The scaler, the PCA and the model sit in one pipeline and are refitted inside every fold. Fitting PCA on all the rows first would let the held-out rows shape the components, which is a leak. And the number of components is a setting like any other, chosen by the model's validation score, not by a rule of thumb. The table shows why that matters. Keeping two components, sixty-seven percent of the variance, gives a cross-validated error of eleven point four minutes. Keeping three, seventy-nine percent, gives ten point nine. Using all eight features with no reduction gives nine. The reason is the rush-hour flag. It is a binary feature with little variance, so PCA treats it as unimportant and it ends up in a late component that the cut-off throws away, yet it is one of the strongest predictors of delay. A variance threshold judges the inputs; only downstream validation judges usefulness. Here the honest conclusion is that no reduction is best.",
}
