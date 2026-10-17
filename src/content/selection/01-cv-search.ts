import type { Section } from '../types'

export const cvSearch: Section = {
  id: 'cv-search',
  title: 'Valid cross-validation and joint pipeline search',
  scene: 'cv-search',
  focus: 'folds',
  slide: `## Cross-validation and pipeline search

Cross-validation reuses the development data as **several validation sets**, and searches whole **pipelines**, not models alone.

### A valid search
- Folds follow the claim: \`TimeSeriesSplit\` for future orders, \`GroupKFold\` for new customers
- Preparation settings are searched **with** model settings — imputation is a choice too
- Every candidate is refitted from scratch **inside every fold**

### Reading the result
- Eight candidates, five folds each: forty pipeline fits
- The winner averages **0.310**; two others sit within one fold-sd
- The winning mean is **selection evidence**: picking the best makes it optimistic
- Use the fold spread to see which differences are real`,
  narration:
    "A single validation split wastes data and gives a noisy score, so model selection normally uses cross-validation: the development data, meaning everything except the locked test set, is split into several folds, and each fold takes a turn as validation while the others train. Two rules make it valid. First, the folds must follow the claim. For future orders, time-series splits always train on the past and validate on the future; for new customers, group folds keep each customer's orders together. Second, the search is over whole pipelines. The imputation strategy is a choice just like the learning rate, and searching them jointly, inside a pipeline, means every candidate is refitted from scratch inside every fold, with no preparation state leaking across. Here eight candidates are scored on five folds, forty pipeline fits in all. The best averages nought point three one zero, but two others are within one fold standard deviation of it. And the winning mean is selection evidence, not an estimate of future performance: when you pick the best of eight noisy scores, the one you pick is likely to have been lucky.",
}
