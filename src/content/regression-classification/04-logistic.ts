import type { Section } from '../types'

export const logistic: Section = {
  id: 'logistic',
  title: 'Logistic and softmax models',
  scene: 'logistic',
  focus: 'link',
  slide: `## Logistic regression and log loss

Logistic regression computes a **linear score** and squashes it into a probability with σ(z) = 1 / (1 + e⁻ᶻ).

### The model
- Score z = w · x + b, exactly as in linear regression
- σ maps any score to (0, 1): z = 0 gives **P(late) = 0.5**
- **Softmax** does the same for several classes, so their probabilities sum to 1
- A coefficient changes the **log-odds**, not the probability, by a fixed amount

### The loss
- **Log loss** = −ln of the probability given to what actually happened
- 0.9 on a late order costs **0.11**; 0.1 on a late order costs **2.30**
- Confident mistakes cost most, which pushes the model toward **honest probabilities**
- Fitting minimises the average log loss over the training rows`,
  narration:
    "For late-delivery risk we need a probability, not a number of minutes. Logistic regression starts exactly like linear regression, a weighted sum of features plus an intercept, which we call the score. It then passes the score through the sigmoid function, which squashes any number into the range zero to one. A score of zero becomes a probability of one half; large positive scores approach one, large negative scores approach zero. With more than two outcomes, say early, on time and late, softmax plays the same role, turning one score per class into probabilities that add up to one. The model is fitted by minimising log loss: for each order, minus the log of the probability the model gave to what actually happened. Saying nought point nine for an order that was late costs zero point one one. Saying nought point one for an order that was late costs two point three, twenty times more. That steep penalty on confident mistakes is the point. It rewards probabilities that mean what they say, which matters later when decisions depend on them.",
}
