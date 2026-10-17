import type { Section } from '../types'

export const coefficients: Section = {
  id: 'coefficients',
  title: 'Coefficients, correlations and model-specific importance',
  scene: 'coefficients',
  focus: 'readings',
  slide: `## Three numbers called importance

Coefficients, correlations and impurity importance all get called "importance", and here they **disagree**.

### Why they disagree
- **Coefficients** depend on units: compare them only on **scaled** features
- Correlated twins split the credit: distance **+5.1**, road **+4.8**
- **Correlation** with y is marginal: rush hour correlates weakly (0.28) yet has the largest coefficient
- **Impurity** importance is computed on training data and favours many-valued features

### What to take from it
- Each number answers a narrower question than "how important is this?"
- None of them is a **causal** effect
- For "what does the model rely on, on new data?", use the next section's method`,
  narration:
    "Three different numbers are commonly reported as feature importance, and on our model they tell three different stories. A ridge coefficient on scaled features says how much the prediction changes per standard deviation of that feature, holding the others fixed. Even scaled, correlated twins split the credit between them: distance gets five point one and road distance four point eight, and either alone would get most of the combined weight. Correlation with the target is a marginal measure that ignores everything else. Rush hour correlates only weakly with duration overall, nought point two eight, because most orders are not at rush hour, yet it has the largest coefficient, because when it applies it matters a lot. Impurity importance from a forest is computed on training data, and as chapter six showed, it favours features with many possible split points. None of these is wrong, but each answers a narrower question than how important is this feature, and none of them is a causal effect. For the question we usually mean, what does the model rely on when it predicts new orders, there is a better tool, and it is next.",
}
