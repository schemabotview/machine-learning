import type { Section } from '../types'

export const learningRate: Section = {
  id: 'learning-rate',
  title: 'Learning rate, tree size and early stopping',
  scene: 'learning-rate',
  focus: 'rates',
  slide: `## Learning rate, tree size and rounds

In boosting, **learning rate, rounds and tree size** form one capacity budget, tuned together.

### The trade
- **η = 0.3** reaches its best loss by round **80**, then overfits
- **η = 0.05** needs hundreds of rounds but ends **lower**
- Smaller steps generally generalise better, at more compute
- Tree size — \`max_leaf_nodes\` or depth — sets how much each round can learn

### Let stopping pick the rounds
- Fix a small η, cap \`max_iter\` high, and use **early stopping**
- The stopping split comes from the **training fold**, as in chapter 4
- Tune η and tree size on validation; report the chosen round count
- Row and feature **subsampling** add bagging's variance cut`,
  narration:
    "Gradient boosting has three settings that interact so strongly they are best thought of as one budget: the learning rate, the number of rounds, and the size of each tree. The plot shows held-out loss against the number of rounds for two learning rates. With a learning rate of nought point three, the loss drops fast, reaches its best around round eighty, and then creeps back up as later trees start fitting noise. With nought point zero five, each step is small, so it takes hundreds of rounds to get anywhere, but it ends up lower and stays there longer. That pattern is typical: smaller steps tend to generalise better, at the price of more computation. Tree size sets how much each round can learn; small trees with a modest number of leaves are the norm. The practical recipe is to fix a small learning rate, set the maximum number of rounds generously as an upper bound, and let early stopping pick the actual number. As in chapter four, the stopping split comes from inside the training fold, so the validation fold stays clean for comparing the learning rate and tree size.",
}
