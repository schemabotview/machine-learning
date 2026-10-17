import type { Section } from '../types'

export const treeSplit: Section = {
  id: 'tree-split',
  title: 'Recursive splits and leaf predictions',
  scene: 'tree-split',
  focus: 'root',
  slide: `## Splits, impurity and leaves

A decision tree asks one yes/no question at a time, choosing each question to make the groups **purer**.

### Scoring the root split
- 100 training orders, 30 late: Gini = 1 − (0.3² + 0.7²) = **0.42**
- *Distance ≤ 8 km* leaves 60 orders (Gini 0.18) and 40 (Gini 0.48)
- Weighted: 0.6 × 0.18 + 0.4 × 0.48 = **0.30**, a gain of **0.12**
- *Rush hour* gains only **0.02**, so distance wins

### Growing and predicting
- Repeat inside each group: far orders split again on rush hour
- A leaf predicts its **late fraction** — 0.80 for far orders at rush hour
- Regression trees use squared error and predict the leaf **mean**
- No scaling needed: only the **order** of a feature's values matters`,
  narration:
    "A decision tree predicts by asking a sequence of yes-or-no questions about the features. Training chooses each question greedily, to make the resulting groups as pure as possible. Purity is measured by an impurity score; for classification the usual one is Gini. Our hundred training orders contain thirty late ones, so the root's Gini is one minus nought point three squared minus nought point seven squared, which is nought point four two. Now try the question: is the distance at most eight kilometres? Sixty orders go left with only six late, Gini nought point one eight; forty go right with twenty-four late, Gini nought point four eight. Weighting by group size gives nought point three, a reduction of nought point one two. Splitting on rush hour instead only reduces impurity by nought point zero two, so distance becomes the root. The same search repeats inside each group: the far orders split again on rush hour. Each leaf predicts its own late fraction, so a far order at rush hour gets eighty percent. Regression trees work the same way with squared error, predicting leaf means. And because only the order of values matters, trees need no scaling.",
}
