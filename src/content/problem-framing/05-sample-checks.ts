import type { Section } from '../types'

export const sampleChecks: Section = {
  id: 'sample-checks',
  title: 'Coverage, duplicates, groups and time',
  scene: 'sample-checks',
  focus: 'rows',
  slide: `## Coverage, duplicates, groups and time

The sample must represent the **population the claim is about**, and its rows must be **as independent as the split will assume**.

### Four checks
- **Coverage**: data from one zone or one season cannot support a claim about all of them
- **Duplicates**: a payment retry creates a second copy of an order — remove it before splitting
- **Groups**: one customer's orders share an address and habits; a *new-customer* claim holds out **whole customers**
- **Timestamps**: a *future-order* claim needs rows in time order, in **one timezone**

### Order matters
- Fix all four **before** splitting: a duplicate or a customer that straddles the split inflates every score after it
- Each check either **narrows the claim** or **fixes the data** — never neither`,
  narration:
    "Here are six rows from a raw extract, and they already hide most of what can go wrong. First, coverage. Nearly every row is from the north zone. If that is true of the whole extract, a model trained on it supports a claim about the north, not about every customer the retailer serves. Second, the first two rows are the same order. A payment retry wrote it twice. If one copy lands in training and the other in evaluation, the model is graded on an order it has already seen, so duplicates come out before any split. Third, customer c-07 owns four of the six rows. Their orders share an address, a basket style and a courier route, so they are not independent. If our claim is about new customers, every order from a customer has to sit on the same side of the split. Fourth, the timestamps mix UTC with a local offset. For a claim about future orders we sort rows in time, and sorting is only meaningful once every timestamp is in one timezone.",
}
