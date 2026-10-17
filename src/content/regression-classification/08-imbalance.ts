import type { Section } from '../types'

export const imbalance: Section = {
  id: 'imbalance',
  title: 'Imbalance, weighting and resampling',
  scene: 'imbalance',
  focus: 'effect',
  slide: `## Imbalanced classes

Only **15 %** of orders are late, so an unweighted model can score well while ignoring them.

### Train-only remedies
- **Class weights** make each late order count more in the loss
- **Resampling** duplicates late or drops on-time rows — inside the **training fold only**
- Often simplest: keep the model and **move the threshold**
- Stratify the split so every fold holds enough late orders

### What it costs
- Balanced weights raise recall **0.60 → 0.78** and drop precision **0.56 → 0.38**
- Probabilities inflate: mean P(late) **0.31** against a true 0.15
- Validation keeps the **natural rate** — resampling it reports a world that does not exist
- Choose the remedy by **validation cost**, not by recall alone`,
  narration:
    "Late orders are fifteen percent of the data, which is mild imbalance, but enough that an unweighted model can achieve good-looking scores while largely ignoring them. There are three standard responses. Class weights make each late order count more in the training loss; balanced weights make the two classes contribute equally. Resampling changes the training rows themselves, duplicating late orders or dropping some on-time ones. And often the simplest choice is to keep the model as it is and move the decision threshold. Whatever you do happens inside the training fold. The validation fold keeps the natural fifteen percent rate, because that is the world the model will face; resampling validation data would report performance on a population that does not exist. The table shows the trade on our validation orders. Balanced weights catch more late orders, recall rising from nought point six to nought point seven eight, at the price of more false alarms, precision falling to nought point three eight. They also inflate the probabilities: the model now averages thirty-one percent late. If those probabilities feed a cost calculation, they must be recalibrated, which is chapter seven.",
}
