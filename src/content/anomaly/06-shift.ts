import type { Section } from '../types'

export const shift: Section = {
  id: 'shift',
  title: 'Scarce labels, subgroups and shift',
  scene: 'shift',
  focus: 'rates',
  slide: `## Scarce labels, subgroups and shift

Anomaly detectors are judged with **few labels**, and they react to every change in the reference.

### A shift that looks like a wave of anomalies
- The west zone opens in week 6 with **no history** of its own
- Its ordinary orders look unusual: **9 %** flagged against 1 % in the north
- After its own reference is added, the rate falls to about **1.5 %**

### Evaluating honestly
- Review a **random sample** of alerts to estimate precision
- Score each order against its **own group's** reference where groups differ
- Re-check after any change: a new zone, a new courier, a new checkout form
- Reviews label only **flagged** orders: missed errors stay invisible`,
  narration:
    "Two difficulties shape how anomaly detectors are evaluated. The first is labels: there are almost none. Nobody knows in advance which orders are data errors, and the only labels come from reviewing alerts. The second is that detectors react to every change in what they are compared against. The plot shows both. In week six the retailer opens a west zone, which has no ninety-day history of its own. Its perfectly ordinary orders look unusual against the existing reference, and around nine percent of them are flagged, against about one percent in the north. Nothing has gone wrong with the orders; the reference no longer covers them. Once the west zone has its own reference, in week ten, its alert rate falls to about one and a half percent. Evaluating honestly under these conditions means reviewing a random sample of alerts to estimate precision, scoring each order against its own group's reference when groups genuinely differ, and re-checking whenever the process changes. And remember the blind spot of review: only flagged orders get labelled, so errors the detector misses never show up in the numbers.",
}
