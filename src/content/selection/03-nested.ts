import type { Section } from '../types'

export const nested: Section = {
  id: 'nested',
  title: 'Nested evaluation and protected tests',
  scene: 'nested',
  focus: 'outer',
  slide: `## Nested evaluation

To estimate how well the **whole procedure** — search included — generalises, the search itself must be evaluated on data it never saw.

### Two loops
- **Inner** CV, on each outer training part, picks the settings
- **Outer** held-out part scores the settings that were picked
- Different outer folds may pick **different** settings: that is expected
- Inner folds follow the claim too

### What the numbers say
- Inner best scores average **0.30**: optimistic, because they were chosen
- Outer scores average **0.33 ± 0.02**: an estimate of the procedure
- Neither touches the **final test set**, which stays locked
- Nested CV is costly; at minimum, never report the inner best as the estimate`,
  narration:
    "Cross-validated search gives us a winner and a score, but that score was used to choose the winner, so it is biased upward. To estimate how well the whole procedure generalises, including the act of searching, the search itself has to be evaluated on data it never saw. That is nested cross-validation. The outer loop splits the development data into folds. For each outer fold, a complete inner cross-validated search runs on the outer training part only and picks its settings. Those chosen settings are then refitted and scored on the outer held-out part. Different outer folds may pick slightly different settings, and that is fine: we are evaluating the procedure, not one configuration. The table shows the gap. The inner best scores average nought point three zero, but the outer scores average nought point three three, with a spread of about nought point zero two. That difference is the optimism of selection. Notice that the final test set is still locked; nested evaluation happens entirely within the development data. Nested CV is expensive, and when you cannot afford it, at least never report the inner best as your estimate.",
}
