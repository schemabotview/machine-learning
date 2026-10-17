import type { Section } from '../types'

export const learningCurves: Section = {
  id: 'learning-curves',
  title: 'Learning curves and targeted diagnosis',
  scene: 'learning-curves',
  focus: 'pair',
  slide: `## Learning curves

Refit the same pipeline on growing slices of the training data and plot training and validation error: the **shape** says what to try next.

### Two shapes
- **High bias**: the curves meet, but both stay **high** — more data will not help
- **High variance**: a **wide gap** that narrows as data grows — more data will help
- Read the right end: where the validation curve is **still falling**, data still pays

### Targeted next steps
- High bias: add features or bases, **reduce** the penalty, try a more flexible family
- High variance: collect data, **increase** the penalty, simplify
- Both low and still disappointing: audit **labels and slices** before changing the model
- Every point on these curves is **validation evidence**, refitted per slice`,
  narration:
    "A learning curve answers a practical question: would more data help? Take the same pipeline, train it on growing slices of the training data, and at each size record both the training error and the validation error. The left plot is the high-bias shape. With little data the model fits its few training rows imperfectly, and as data grows the two curves meet, but they meet at a high error. The model is too simple for the problem, and more orders will not fix that; it needs more capacity, better features, or a smaller penalty. The right plot is the high-variance shape. Training error is very low, validation error is much higher, and the gap narrows steadily as data grows. Here more data genuinely helps, and so would a stronger penalty or a simpler model. If both curves are low and the model still disappoints in use, the problem is often not the model at all, so audit the labels and the slices of data where it fails. Each point on these curves comes from refitting the whole pipeline, and each is validation evidence.",
}
