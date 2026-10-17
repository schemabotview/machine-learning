import type { Section } from '../types'

export const importance: Section = {
  id: 'importance',
  title: 'Importance biases and implementation support',
  scene: 'importance',
  focus: 'compare',
  slide: `## Feature importance, and what trees support

Tree models report **impurity importance** for free — and it can be badly misleading.

### Two measures, two answers
- Impurity importance is computed on **training** data
- It favours **high-cardinality** columns with many possible split points
- A random order hash scores **0.21** — yet permuting it on validation changes nothing: **0.00**
- **Permutation importance** on validation measures what the model actually uses there
- Correlated features **share** importance under either measure

### Missing values and categories
- Histogram boosting learns which branch **missing values** take
- Native **categorical** support exists only when declared
- Other tree estimators differ by library and **version**: check, do not assume`,
  narration:
    "Every tree ensemble can report a feature importance at no extra cost, by adding up how much each feature reduced impurity across all its splits. That number is computed on the training data, and it has a known bias toward features with many possible split points. The table makes the point with a column that is pure noise: a random hash of the order identifier. Because it takes thousands of distinct values, the trees find plenty of splits on it that happen to fit the training data, and its impurity importance comes out at nought point two one, more than rush hour. Permutation importance asks a different question on validation data: if we shuffle this column, how much worse do predictions get? For the hash, not at all. Chapter eleven develops permutation importance properly. Remember too that correlated features split their importance between them, under either measure. Trees also differ in what inputs they accept. Histogram-based boosting handles missing values natively by learning which branch they should follow, and can treat declared categorical columns natively. Other tree implementations vary by library and version, so check the documentation of the version you run rather than assuming.",
}
