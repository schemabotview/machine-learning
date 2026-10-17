import type { Section } from '../types'

export const ablation: Section = {
  id: 'ablation',
  title: 'Budgets, feature selection and ablation',
  scene: 'ablation',
  focus: 'runs',
  slide: `## Budgets, selection and ablation

The more candidates you try, the more likely one wins **by chance** — so the search is declared before it runs.

### Declare the search
- A fixed **budget** of trials per model family, set up front
- Feature selection is a **fitted step** inside the pipeline, re-run per fold
- Log **every** trial, not only the winner

### Ablation: what each part contributes
- Remove one feature group, refit the whole pipeline, same folds
- Groups are declared in advance: no fishing for a story
- Rush hour **+1.2 min**, as-of history **+0.9**: they carry real signal
- Zone **+0.2** and basket size **+0.1** are within fold noise
- Ablation measures the model's **use** of a group, not the group's causal effect`,
  narration:
    "Every extra candidate you try is another chance for one of them to win by luck, so a trustworthy search is declared before it runs. Fix a budget, a number of trials per model family, so that a heavily tuned favourite is not compared against an untuned rival. If features are selected automatically, that selection is a fitted step like any other: it lives inside the pipeline and is redone in every fold, because selecting features on all the development data and then cross-validating leaks the selection into the scores. And log every trial, not just the winner, so that anyone reading the result knows how many shots were taken. Ablation is the complementary tool for understanding what the chosen pipeline relies on. Remove one feature group at a time, refit the whole pipeline on the same folds, and record the change. Removing rush hour costs one point two minutes of error, and the as-of history features nought point nine; both clearly carry signal. Removing zone or basket size changes the error by less than fold-to-fold noise. Note what ablation measures: how much this model uses a group, not whether the group causes delays.",
}
