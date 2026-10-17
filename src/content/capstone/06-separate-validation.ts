import type { Section } from '../types'

export const separateValidation: Section = {
  id: 'separate-validation',
  title: 'Separate validation of supervised and discovery tasks',
  scene: 'separate-validation',
  focus: 'tasks',
  slide: `## Three tasks, three kinds of evidence

The course built three different things, and each is justified by **its own kind of evidence**.

### Validated separately
- **Late risk**, supervised: a final test log loss of **0.32**, calibration, subgroup recall
- **Customer segments**, discovery: stability **0.91** across resamples, then domain review
- **Unusual orders**, detection: **31 %** of reviewed alerts confirmed, at 50 a day
- Evidence for one never transfers to another
- Each keeps its own contract, reference data and **owner**

### Where to go next
- Practise on **unfamiliar** data: write the contract before the code
- **MLOps** for serving, monitoring and retraining
- **Deep Learning** for neural mechanisms; **Statistics** for experiments and causal questions`,
  narration:
    "Across twelve chapters the course built three different kinds of thing, and the last lesson is that each is justified by its own kind of evidence. The late-risk model is supervised: it has labels, so it is judged by a locked final test, a log loss of nought point three two, together with its calibration and its recall in each subgroup. The customer segments are discovery: there are no labels at all, so they are judged by whether the same groups come back on resamples, a stability of nought point nine one, and then by whether the people who would use them can name them and act differently for each. The unusual-order detector sits between: its labels come only from reviewing the alerts it raises, so it is judged by the share of reviewed alerts that turned out to be real errors, thirty-one percent at fifty alerts a day. Evidence for one of these says nothing about another, and a report that mixes them is misleading. From here, practise on unfamiliar data, always writing the contract before the code. The MLOps course takes these artefacts into production; Deep Learning covers neural mechanisms; and Probability and Statistics covers experiments and causal questions.",
}
