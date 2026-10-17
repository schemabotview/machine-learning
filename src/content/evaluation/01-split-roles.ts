import type { Section } from '../types'

export const splitRoles: Section = {
  id: 'split-roles',
  title: 'Training, validation and test',
  scene: 'split-roles',
  focus: 'test',
  slide: `## Training, validation and test

A model is judged on data it did not learn from, and each portion of the data has **one job**.

### Three roles
- **Training** fits everything learned: coefficients, scalers, vocabularies
- **Validation** compares candidates and settings — its score is **selection evidence**
- **Test** estimates the chosen pipeline **once**: the final-test result
- Typical shares are 70 / 15 / 15, but **rare outcomes** need enough rows in every part

### The assumption underneath
- Held-out rows stand in for the **future use**: the split must mimic how predictions will be made
- A score is only as general as that resemblance
- Every number reported in this course says **which of the three** it came from
- Every look at the test set that changes a decision turns it into **validation**`,
  narration:
    "The whole point of a model is how it behaves on orders it has never seen, so we never judge it on the orders it learned from. The modelling set is divided by role. The training portion is where everything learnable gets fitted: the coefficients, but also the scaler's means, the encoder's categories, the text vocabulary. A score on training data is a training observation; it tells you about fit, not about the future. The validation portion is where we compare candidates, a linear model against a tree, one setting against another. Because we choose based on it, its score is selection evidence, and it is optimistic about whatever won. The test portion is touched once, at the very end, to estimate the one pipeline we chose. All of this rests on an assumption: that held-out rows resemble the situation where predictions will actually be used. And there is a trap. If you look at the test score, change something, and look again, the test set has quietly become a second validation set.",
}
