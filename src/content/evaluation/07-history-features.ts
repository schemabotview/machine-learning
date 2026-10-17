import type { Section } from '../types'

export const historyFeatures: Section = {
  id: 'history-features',
  title: 'Historical features and target encoding',
  scene: 'history-features',
  focus: 'asof',
  slide: `## Historical features and target encoding

Features built from past outcomes are powerful and easy to leak: each must be computed **as of prediction time**.

### As-of history
- For checkout 03-15, count only orders **delivered** by 03-15
- A-1042 was placed earlier but delivered 03-16: its outcome is **not yet known**
- Later orders never appear in an earlier order's features
- A new customer has **no history**: the feature must handle zero past orders

### Target encoding, cross-fitted
- Replacing *zone* by its late rate uses **y** inside a feature
- Compute each fold's rate from **other folds**, never from rows that include its own label
- The naive full-data rate looks fine and leaks every row's own outcome`,
  narration:
    "Some of the strongest features summarise the past: how often has this customer's order been late, how late does this zone usually run? They are also the easiest to leak, so every one is computed as of the prediction time. Take customer c-07 checking out on the fifteenth of March. Their order from early March was delivered on the fourth, so it counts. Their order from the ninth was placed before checkout but not delivered until the sixteenth, so at the checkout click its outcome is still unknown, and it must not count. That is label maturity again, now inside a feature. Their order from the twentieth is simply in the future. Target encoding replaces a category with the average outcome for that category, which puts the target inside a feature. The safe way is cross-fitting: split the training data into folds and compute each fold's zone rate from the other folds only. The naive version, averaging over all rows, looks almost identical, but every row's own label helped compute its feature, and the model learns to trust it too much.",
}
