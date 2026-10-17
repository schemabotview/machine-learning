import type { Section } from '../types'

export const labelMaturity: Section = {
  id: 'label-maturity',
  title: 'Label maturity and label quality',
  scene: 'label-maturity',
  focus: 'curve',
  slide: `## Label maturity and label quality

A label is usable only once the outcome **could have been observed**, and only as reliable as **how it was recorded**.

### Maturity
- A 3-day-old order may still be in transit: its duration is **unknown**, not short
- Train only on orders older than the **maturity window** — here 10 days
- Read the window off the curve: where outcomes are about **99 % complete**
- Keeping recent orders that already arrived over-represents **fast** deliveries

### Missing and noisy outcomes
- Cancelled or lost parcels have **no duration**: exclude them, or define a separate target
- Driver scans can be **batched or late**: audit a sample against another record
- A wrong label caps every model: no algorithm learns past **noise in y**`,
  narration:
    "A label is only as good as the moment it was taken. The curve on the left shows, for orders of each age, what share has actually been delivered. Look at three days: about half of those orders are still in transit. Their duration is not short, it is unknown. If we train on recent orders and keep only the ones that have already arrived, we quietly keep the fast deliveries and drop the slow ones, and the model learns that deliveries are quicker than they really are. The fix is a maturity window: only orders old enough that almost every outcome is in, here ten days, count as labelled. Some outcomes never arrive at all. A cancelled order or a lost parcel has no delivery time, so we either exclude it and say so, or treat it as a separate outcome with its own target. And even a recorded label can be wrong. Delivery times come from driver scans, which are sometimes batched at the end of a route. Check a sample against an independent record before trusting the whole column.",
}
