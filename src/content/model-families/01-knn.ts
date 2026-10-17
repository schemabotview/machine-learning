import type { Section } from '../types'

export const knn: Section = {
  id: 'knn',
  title: 'Nearest-neighbour classification and regression',
  scene: 'knn',
  focus: 'space',
  slide: `## Nearest neighbours

k-NN keeps the training rows and predicts from the **k closest** ones: no coefficients, just a distance.

### Tracing one prediction
- Measure the distance from the query to **every** training order
- Take the five nearest: **3 late, 2 on time**
- Classification: the majority vote — **late**
- Regression: the mean of their durations — **62 minutes**
- Every feature must be **scaled** first, or one unit dominates the distance

### What the vote is and is not
- 3 of 5 is a **vote fraction**, not a calibrated probability of 0.6
- With k = 5 the only possible fractions are 0, 0.2, 0.4 … 1
- Fitting is instant; **prediction** does all the work
- Ties and duplicates matter: an odd k avoids two-class ties`,
  narration:
    "Nearest neighbours is the most literal learning method there is. It does not fit coefficients at all; it keeps the training orders and, when a new order arrives, finds the ones most similar to it. Here each order is a point in two scaled features, and the query is the order we want to predict. We measure its distance to every training order and take the five closest, the ones inside the dashed circle. Three of them were late, two were on time, so the majority vote says late. For regression, the prediction is simply the average of their delivery times, sixty-two minutes. Notice what the classification output really is. Three out of five is a vote fraction. It is tempting to read it as a sixty percent probability, but nothing has checked that orders with this vote are late sixty percent of the time, and with five neighbours only six values are even possible. And notice where the cost sits. Fitting is just storing the data, which is instant; every prediction has to search the training set, which is where k-NN becomes expensive.",
}
