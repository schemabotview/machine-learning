import type { Section } from '../types'

export const outlierNovelty: Section = {
  id: 'outlier-novelty',
  title: 'Training outliers versus new-data novelty',
  scene: 'outlier-novelty',
  focus: 'api',
  slide: `## Outlier detection versus novelty detection

The same algorithms answer two different questions, depending on whether the **training data is clean**.

### Two settings
- **Outlier detection**: the training data contains anomalies — which of *these* orders are odd?
- **Novelty detection**: the training data is believed clean — is a *new* order odd?
- The contamination of the reference decides which you are doing

### LOF makes the difference explicit
- \`LocalOutlierFactor()\` labels its own training data with \`fit_predict\`, and cannot score new orders
- With \`novelty=True\` it scores **new** orders, and must not be used on its training rows
- Isolation forest and one-class SVM support both, but the **meaning** of a score still depends on which`,
  narration:
    "There are two settings that look alike and are not. In outlier detection, the data you fit on already contains anomalies, and the question is which of these particular orders are odd. In novelty detection, the reference data is believed to be clean, and the question is whether a new order, arriving later, is unlike it. Which setting you are in depends on what the reference population contains, and that is a property of the data pipeline, not of the algorithm. Local outlier factor in scikit-learn makes the difference explicit. In its default mode it is an outlier detector: you call fit predict on a dataset and it labels the rows of that same dataset, and it has no way to score an order it was not fitted on. With novelty set to true, it becomes a novelty detector: it can score new orders, and it must not be used to label its own training rows, because each training row would count itself among its neighbours. Isolation forest and one-class SVM support both uses, but the meaning of their scores still depends on which setting you are in, so the contract should say.",
}
