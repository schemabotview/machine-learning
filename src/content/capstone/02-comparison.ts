import type { Section } from '../types'

export const comparison: Section = {
  id: 'comparison',
  title: 'Reproducible pipeline comparison',
  scene: 'comparison',
  focus: 'results',
  slide: `## A comparison anyone can rerun

The comparison is one recorded run: **same folds, same budget, same metric** for every candidate.

### What makes it reproducible
- One config names the **data hash**, split, seed, budget and library versions
- Each candidate is a **whole pipeline**, refitted inside every fold
- Every trial is logged, not just the winner
- Rerunning the config must reproduce every number on this slide

### Reading the result
- Base rate **0.41**, logistic **0.36**, forest **0.33**, boosting **0.31**
- Boosting and the forest are within a fold-sd; boosting is **7×** faster to fit and far smaller
- The logistic model gives up 0.05 for full **readability**
- These are CV scores: **selection evidence**, not the final result`,
  narration:
    "The comparison itself is a single recorded run that someone else could repeat. One configuration file names the data snapshot by its hash, the split, the random seed, the tuning budget, the library versions and the metric. Every candidate is a whole pipeline, preparation included, refitted from scratch inside every fold of the same time-series split, with the same budget of twenty trials per family, and every trial is logged. The results read cleanly against the baseline. The zone base rate scores nought point four one. A logistic regression with the as-of history features reaches nought point three six. The random forest reaches nought point three three, and histogram boosting nought point three one. Boosting and the forest are within about one fold standard deviation of each other, so accuracy alone barely separates them; but boosting fits seven times faster and is a fraction of the size. The logistic model gives up five hundredths of log loss in exchange for a model anyone can read end to end, which is a legitimate choice in some settings. And every number on this slide is a cross-validated score, which makes it selection evidence, not the final result.",
}
