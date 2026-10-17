import type { Section } from '../types'

export const naiveBayes: Section = {
  id: 'naive-bayes',
  title: 'Naive Bayes and smoothing',
  scene: 'naive-bayes',
  focus: 'counts',
  slide: `## Naive Bayes

A **generative** classifier: model how each class produces its features, then use Bayes' rule to reverse it.

### Tracing "late again" (review-text illustration)
- Prior: **0.40** of training reviews complain about lateness
- Likelihoods: P(*late* | L) = 0.596, P(*again* | L) = 0.250
- The naive assumption: words are **independent given the class**, so multiply
- Normalise the two products: P(L | text) = **0.94**
- Fitting is just **counting**, on training reviews only

### Smoothing and its limits
- Add-one smoothing stops an unseen word from forcing a probability of **exactly 0**
- Independence is false — *late* and *again* co-occur — so probabilities run **overconfident**
- The **ranking** is often still good: cheap, fast, strong on text
- Gaussian NB does the same for **numeric** features`,
  narration:
    "Naive Bayes takes a different route. Instead of drawing a boundary directly, it models how each class generates its features, and then uses Bayes' rule to reverse the direction. As an illustration we use short review texts, with two classes: reviews complaining about lateness, and the rest. Forty percent of training reviews are complaints, which is the prior. From word counts we estimate how likely each word is within each class. Then comes the naive assumption: given the class, words occur independently, so the likelihood of a whole review is the product of its word likelihoods. For the review late again, the complaint class gets nought point four times nought point five nine six times nought point two five; the other class gets a much smaller product. Normalising the two gives a ninety-four percent probability of a complaint. Smoothing adds one to every count, so a word never seen in a class does not force that class's probability to exactly zero. The independence assumption is plainly false, late and again go together, so the probabilities come out overconfident. The ranking, though, is often good, which is why naive Bayes remains a strong, cheap baseline for text.",
}
