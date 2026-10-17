import type { Section } from '../types'

export const sparsityStability: Section = {
  id: 'sparsity-stability',
  title: 'Correlated predictors and sparsity stability',
  scene: 'sparsity-stability',
  focus: 'resamples',
  slide: `## Correlated predictors and stable selection

When two features carry the **same information**, lasso keeps one of them — and which one is close to a coin toss.

### What the resamples show
- Road km and straight-line km correlate at **0.98**
- Across five bootstrap resamples, lasso keeps **distance** twice, **road** twice, both once
- Ridge splits the weight about **2.0 / 2.1** every time
- Predictions barely differ; the **story** told about them does
- Same training fold, same α: only the **resample** changed

### Reading a sparse model
- A zero coefficient means "not needed **given the others**", not "irrelevant"
- Check selection **stability** over resamples before reporting chosen features
- Elastic net keeps correlated groups together; or combine the twins into one feature`,
  narration:
    "Lasso's feature selection is attractive, but it has a weakness with correlated features. Road distance and straight-line distance correlate at nought point nine eight; they carry almost the same information. Fit lasso on five bootstrap resamples of the same training fold, and look at which one it keeps. Twice it keeps straight-line distance and zeroes road distance. Twice it does the opposite. Once it keeps both at about half weight. The predictions in all five cases are nearly identical; what changes is which feature appears to matter. If you reported the first fit, you would say road distance is irrelevant. If you reported the second, you would say the same about straight-line distance. Ridge behaves differently: it splits the weight roughly evenly, about two each, every time. So a zero lasso coefficient means only that the feature was not needed given the others in this sample, not that it is irrelevant. Before reporting selected features, check how stable the selection is across resamples. Elastic net tends to keep correlated groups together, and often the cleanest fix is to combine the twins into one feature.",
}
