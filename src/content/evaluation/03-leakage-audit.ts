import type { Section } from '../types'

export const leakageAudit: Section = {
  id: 'leakage-audit',
  title: 'Baselines and leakage diagnosis',
  scene: 'leakage-audit',
  focus: 'audit',
  slide: `## Baselines and leakage

A baseline is the score to beat, and the first **leakage detector**: a result far beyond it needs an explanation.

### Reading the scores
- Median by zone: **41 min** validation MAE — the bar
- Linear model on checkout features: **33 min** — a plausible gain
- Leaky model: **6 min** — better than the delivery process itself allows
- A gain far beyond the baseline is a **question**, not a result

### Auditing the features
- Ask of every column: **known at checkout?** — and from which system, at what time
- Courier and scan count arrive **after** dispatch: leaks
- A zone average over **all** data includes future outcomes; an as-of average does not
- Then **remove** the suspect feature and refit: an honest score should barely move`,
  narration:
    "Before building anything ambitious, fit the baseline. Predicting the median delivery time for each zone gives a validation mean absolute error of forty-one minutes; these are illustrative numbers, but they show the pattern. A linear model on checkout features brings that to thirty-three, which is a plausible improvement. Then a third model scores six minutes. That is not a breakthrough. Delivery times vary for reasons nobody can know at checkout, traffic, weather, a customer who is not home, so a six-minute error is a symptom that the model can see something it should not. The audit on the right asks one question of every feature: was it known at the checkout click? Distance and the promise were. The courier identifier is assigned at dispatch, and the scan count accumulates while the parcel is in transit, so both are leaks. The subtle one is a zone average computed over the whole dataset, which quietly includes future deliveries. The same average computed only from the thirty days before checkout is fine.",
}
