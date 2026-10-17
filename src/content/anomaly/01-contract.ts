import type { Section } from '../types'

export const contract: Section = {
  id: 'contract',
  title: 'Reference population and the unusualness contract',
  scene: 'unusual-contract',
  focus: 'spec',
  slide: `## Unusual compared with what?

An anomaly is only defined **relative to a reference population** — so that population is part of the contract.

### A separate task, specified up front
- Unit: one order at checkout; reference: the **same zone's** orders over 90 days
- Action: **hold** the order for a data-quality check, within a review budget
- Not claimed: fraud, intent or wrongdoing
- Features are **checkout-time** only, as in chapter 1

### What a flag can mean
- A **rare but legitimate** order: 40 items for an office
- A **corrupt record**: 30 items with a basket of £0
- A **process change**: everything from a newly opened zone looks odd
- Unusual means *unlike the reference*; only review says **why**
- A changed reference changes **every** score`,
  narration:
    "Anomaly detection asks which orders are unusual, and that question has no answer until you say unusual compared with what. So this chapter uses a separately specified task with its own contract. The unit is one order at checkout. The reference population is checkout orders from the same zone over the previous ninety days, so a large order in a business district is compared with that district, not with the whole country. A flagged order is held for a quick data-quality check, and there is a budget of fifty reviews a day. The contract also says what a flag does not claim: it is not an accusation of fraud, and it says nothing about anyone's intent. That matters, because an unusual order can be many things. It can be rare but entirely legitimate, like forty items ordered for an office. It can be a corrupt record, thirty items with a basket value of zero, which is exactly what the check is meant to catch. Or it can reflect a change in the process, such as a newly opened zone whose ordinary orders look odd against an old reference. A detector says an order is unlike the reference; only a review says why.",
}
