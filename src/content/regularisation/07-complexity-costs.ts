import type { Section } from '../types'

export const complexityCosts: Section = {
  id: 'complexity-costs',
  title: 'Numerical costs and valid comparisons',
  scene: 'complexity-costs',
  focus: 'costs',
  slide: `## Costs and valid comparisons

Capacity costs **time and memory**, and a comparison is fair only if every candidate had the same chance.

### Reading the table
- Degree 8 + ridge beats cubic + ridge by **0.1 min** of validation MAE
- It costs **14×** the fit time, **8×** the latency and **34×** the size
- Cubic + ridge keeps nearly all the gain over **linear**
- Within fold-to-fold noise, the gain is **not** a gain
- Prefer the **simplest** candidate within noise of the best

### A fair comparison
- **Same splits**: every candidate scored on identical folds
- **Same budget**: equal tuning trials, or the tuned one wins by effort
- **Same machine**: timings are relative
- Report the **spread** across folds, not one number
- Time the **full pipeline**, preparation included`,
  narration:
    "Capacity is not free. A degree-eight polynomial with ridge does score best on validation, but only by a tenth of a minute over the cubic, and to get that tenth it takes fourteen times as long to fit, eight times as long to predict a thousand orders, and thirty-four times the memory. Whether that is worth it depends on the decision, but a tenth of a minute is smaller than the variation you would see between folds, so the honest reading is that the two are tied and the simpler one is cheaper. For a comparison like this to mean anything, the candidates must have had the same chance. They are scored on the same folds, so that one did not get easier rows. They get the same tuning budget, because a model tried with twenty settings will usually beat one tried with two, regardless of which family is better. Timings are compared on one machine, since they are relative rather than absolute. And the table should report the spread across folds, not a single number that may come from one lucky split. Chapter seven builds this into a full selection workflow.",
}
