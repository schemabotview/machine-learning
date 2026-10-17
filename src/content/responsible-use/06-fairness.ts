import type { Section } from '../types'

export const fairness: Section = {
  id: 'fairness',
  title: 'Sensitive proxies, privacy and context-dependent fairness',
  scene: 'fairness',
  focus: 'criteria',
  slide: `## Fair by which measure?

When groups have **different base rates**, common fairness criteria cannot all hold at once.

### The trade, in two zones
- Late rates differ: **0.12** in zone A, **0.24** in zone B
- One calibrated threshold flags **0.14** and **0.29**: unequal flag rates
- Forcing equal flag rates moves **recall** apart instead: 0.75 against 0.55
- Choosing among these is a **policy decision** about harms, not a technical default
- Record which criterion was chosen, and **why**

### Around the numbers
- A zone can act as a **proxy** for protected characteristics
- Measuring group gaps may need sensitive data: handle it with **privacy** care
- No metric here certifies a system as fair or **legally compliant**`,
  narration:
    "Once uneven error is measured, the next question is what fair would mean, and here mathematics sets a hard constraint. Suppose zone A has a true late rate of twelve percent and zone B twenty-four percent. With one well-calibrated model and a single threshold, zone B gets flagged more often, twenty-nine percent of orders against fourteen, simply because more of its orders really are at risk. If we instead insist on equal flag rates, twenty percent in both, recall moves apart: three quarters of zone A's late orders are caught, but only fifty-five percent of zone B's. When base rates differ, equal flag rates, equal recall and equal calibration cannot all hold together. Choosing among them is a policy decision about who bears which errors, and it belongs with the people accountable for the service, not with a library default. Three more points sit around the numbers. Zone may act as a proxy for characteristics such as income or ethnicity, even though none is in the data. Measuring group gaps may require sensitive data, which needs privacy care. And no metric in this chapter certifies a system as fair or legally compliant.",
}
