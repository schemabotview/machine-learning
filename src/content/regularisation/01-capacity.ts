import type { Section } from '../types'

export const capacity: Section = {
  id: 'capacity',
  title: 'Empirical risk, capacity and generalisation',
  scene: 'capacity',
  focus: 'curve',
  slide: `## Empirical risk and capacity

Training minimises **empirical risk** — the average loss on training rows — but what we want is low loss on **new** rows.

### Capacity
- **Capacity** is the range of shapes a model family can fit
- More capacity always lowers training error: degree 12 reaches **15 min²**
- Added basis terms raise capacity too
- Validation error falls, then **rises** after degree 4: the model fits noise

### The generalisation gap
- Gap = validation error − training error; it **widens** with capacity
- A small training error is a training observation, **not** evidence of quality
- Two levers control capacity: the **model family** and a **penalty** inside it
- Choosing the degree on validation makes its score **selection evidence**`,
  narration:
    "Fitting a model means minimising its average loss on the training rows, which is called the empirical risk. But the training rows are only a sample, and what we actually care about is the loss on orders the model has not seen. The gap between those two is the whole subject of this chapter. Capacity is the range of shapes a model family can represent. A straight line has little; a degree-twelve polynomial has a lot. The plot shows what happens as we raise the polynomial degree on the same delivery data. Training error falls every single time, down to fifteen at degree twelve, because a more flexible curve can always pass closer to the training points. Validation error falls at first, reaches its lowest at degree four, and then climbs steeply. Past that point the extra flexibility is spent fitting the noise in this particular sample. So a low training error is a training observation and tells you almost nothing about quality. We control capacity in two ways: by choosing the model family, and by adding a penalty inside it, which comes next.",
}
