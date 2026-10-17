import type { Section } from '../types'

export const predictionVsCause: Section = {
  id: 'prediction-vs-cause',
  title: 'Prediction is not intervention',
  scene: 'prediction-vs-cause',
  focus: 'distance',
  slide: `## Prediction is not intervention

A model answers **"what will happen?"** under the way things currently work, not **"what if we change something?"**

### The trap
- In the history, express was offered mostly on **far** orders
- Far orders run late more often, so *express offered* predicts lateness
- That does not mean express **causes** lateness: distance drives both
- Dropping express on that evidence acts on a **correlation**, not an effect

### What to claim
- Predictions hold under the **policy that generated the data**
- The effect of an action needs an experiment or causal methods: Probability and Statistics
- Acting on predictions changes future data; chapter 11 returns to this`,
  narration:
    "The last idea of this chapter is a boundary on everything that follows. A predictive model answers the question: given how things currently work, what is likely to happen to this order? It does not answer: what would happen if we changed something? Here is how those get confused. Under the old policy, the express upgrade was offered mostly on far orders, and far orders are late more often. So in the historical data, express offered is a strong predictor of lateness, and a model will happily use it. Read that as a cause and you would conclude that express makes deliveries late and stop offering it. But distance drives both the offer and the lateness, and the data cannot tell us what express itself does. Predictions are valid under the policy that produced the data. Estimating the effect of an action needs a randomised experiment or causal methods, which belong to the Probability and Statistics course. And once we act on predictions, we change the data that future models learn from, which we come back to in chapter eleven.",
}
