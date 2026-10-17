import type { Section } from '../types'

export const explainedVariance: Section = {
  id: 'explained-variance',
  title: 'Scaling, explained variance and reconstruction',
  scene: 'explained-variance',
  focus: 'scaling',
  slide: `## Explained variance and scaling

Each component's **explained variance ratio** says how much of the total spread it keeps.

### Reading the curve
- PC1 keeps **46 %**; three components keep **79 %**
- The rest can be dropped with little **reconstruction** error
- Reconstruction maps scores back to the original columns, then compares
- Little reconstruction error is not the same as little **predictive** loss

### Scaling decides what variance means
- Unscaled, basket value in pounds has the largest numbers, so it **is** PC1: loading 0.99
- Scaled, PC1 mixes distance, road distance, items and value
- PCA on unscaled mixed units mostly measures **units**
- Fit the scaler and PCA on **training** data only
- Binary flags gain variance from scaling too; their share is a **choice**, not a fact`,
  narration:
    "Each principal component explains a share of the total variance in the training data, and the curve shows how those shares add up. The first component keeps forty-six percent, the first three together seventy-nine percent, and the last few components carry almost nothing. Dropping them loses little in reconstruction: if you project the data onto three components and map back, the rebuilt orders are close to the originals. But keep in mind that a small reconstruction error is not the same thing as a small loss of predictive information, which is the subject of the last section. Scaling matters even more for PCA than for distance-based models, because variance depends on units. The table shows the loadings of the first component, its weights on each feature. Unscaled, basket value measured in pounds has by far the largest numbers, so it dominates: the first component is basically basket value, with a loading of nought point nine nine. After scaling, the first component is a genuine mix of distance, road distance, item count and value. PCA on unscaled mixed units is mostly measuring the choice of units.",
}
