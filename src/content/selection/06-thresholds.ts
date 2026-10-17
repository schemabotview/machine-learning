import type { Section } from '../types'

export const thresholds: Section = {
  id: 'thresholds',
  title: 'Cost and capacity thresholds',
  scene: 'thresholds',
  focus: 'cost',
  slide: `## Choosing the threshold

The threshold turns probabilities into actions, so it is chosen by the **cost of each mistake** — on validation data.

### Cost-based threshold
- A missed late order costs **£8**; a needless express offer costs **£3**
- Cost per 1,000 orders = 8 × misses + 3 × false alarms
- Lowest at **t = 0.3**: £622, against £690 at the default 0.5
- With calibrated probabilities theory predicts 3 / (3 + 8) ≈ **0.27**

### Capacity-based threshold
- Express capacity is **200 offers per 1,000** orders
- Then flag the top 200 by score: **t ≈ 0.4**, accepting a higher cost
- Costs change; the threshold is a **setting**, not part of the model
- Threshold, costs and capacity are fixed **before** the test set is opened`,
  narration:
    "The threshold is where a model's probabilities become actions, and the default of one half is almost never the right choice. The right choice comes from the costs of the two mistakes. Suppose a late order we fail to flag costs eight pounds in vouchers and lost goodwill, while an unnecessary express offer costs three pounds. Then for a thousand validation orders, the expected cost at any threshold is eight times the misses plus three times the false alarms, and we can read it off the validation counts. The curve is lowest at a threshold of nought point three, six hundred and twenty-two pounds, against six hundred and ninety at the default. That is close to what theory predicts: with calibrated probabilities, flag an order when its probability exceeds three over three plus eight, about nought point two seven. Sometimes the constraint is capacity rather than cost. If the courier can only take two hundred express orders per thousand, we flag the top two hundred by score, which corresponds to about nought point four, and accept a higher cost. Either way, the threshold, the costs and the capacity are fixed on validation, before the test set is opened.",
}
