import type { Section } from '../types'

export const predictionContract: Section = {
  id: 'prediction-contract',
  title: 'The prediction contract',
  scene: 'prediction-contract',
  focus: 'checkout',
  slide: `## The prediction contract

Before any model, fix **what** is predicted, **for which unit**, **at what moment**, and **which decision** it changes.

### Four commitments
- **Unit**: one order — not one customer, not one day
- **Target**: minutes from checkout to the door; *late* means after the promise shown at checkout
- **Output**: a number of minutes, or a probability of late
- **Prediction time**: the checkout click — every feature must exist by then
- **Decision**: the delivery promise shown, or an express upgrade offered

### Why it binds everything later
- The prediction time sets the **feature cutoff**
- The unit and the claim — **future orders** or **new customers** — set the split
- The decision sets which **error costs more**: a missed late order or a needless express offer`,
  narration:
    "Every model in this course starts from a contract, and it is worth writing down before touching any data. The unit is one order, not one customer and not one day, so each row we learn from is an order. The target for the first task is the number of minutes from checkout to the doorstep. For the second, an order is late if it arrives after the promise we showed at checkout, which means the promise itself is fixed at that moment too. The prediction time is the checkout click, and that single point on the order's timeline does a lot of work: anything that happens afterwards, dispatch, the courier's route, the actual delivery, simply does not exist yet, so it cannot be a feature. Finally, name the decision the prediction changes: the promise displayed to the customer, or whether to offer an express upgrade. The contract also states the claim. Do we mean future orders, unseen customers, or both? Those imply different splits, and the next chapter depends on that answer.",
}
