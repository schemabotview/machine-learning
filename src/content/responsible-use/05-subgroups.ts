import type { Section } from '../types'

export const subgroups: Section = {
  id: 'subgroups',
  title: 'Subgroup error, uncertainty and bias sources',
  scene: 'subgroups',
  focus: 'table',
  slide: `## Who the errors fall on

An overall score can hide that a model works **much worse for some groups** — so report groups with their denominators.

### Recall of late orders, test set
- North: **0.64** from 400 late orders — a narrow interval
- West: **0.40** from only 25 — an interval wide enough to hide almost anything
- A gap is evidence of uneven error; its **size** is uncertain where counts are small
- Groups are chosen **before** looking, so the slicing is not a search for a story
- Tiny groups need exact intervals

### Where gaps come from
- **Sampling**: few west orders to learn from
- **Labels**: batched scans make east durations noisier
- **Features**: new customers have no history
- **History**: the old express policy shaped the training labels`,
  narration:
    "Fairness work starts with a plain measurement: is the model's error spread evenly, or does it fall on some groups more than others? Here is recall of late orders on the test set, by group, each with a ninety-five percent interval computed from that group's own count. In the north, with four hundred late orders, recall is nought point six four with a narrow interval. In the newly opened west zone there were only twenty-five late orders, and recall is nought point four, with an interval so wide that it overlaps almost every other group. So the right statement is that there is evidence the model catches fewer late orders in the west and among new customers, and that the size of the gap is uncertain where the counts are small. Reporting a subgroup score without its denominator hides exactly that. The useful next step is to ask where such gaps come from. Sampling: the west has few orders to learn from. Labels: the east's batched driver scans make its durations noisier. Features: new customers have no as-of history at all. And history: the old express policy shaped which orders were late in the training data.",
}
