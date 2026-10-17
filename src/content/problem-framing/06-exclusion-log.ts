import type { Section } from '../types'

export const exclusionLog: Section = {
  id: 'exclusion-log',
  title: 'Data quality, privacy and exclusions',
  scene: 'exclusion-log',
  focus: 'exclusions',
  slide: `## Data quality, privacy and exclusions

Every row and column removed is a **decision about the population**, so it is written down, with counts.

### Quality and exclusions
- Log each rule and the rows it removed: duplicates, impossible values, immature labels, cancellations
- **Impossible values** — a delivery before its checkout — signal a pipeline defect, not an outlier
- Break counts down by **zone and month**: one region losing most rows narrows the claim
- The final claim covers **only what survived** the exclusions

### Privacy by minimisation
- Keep only what the prediction needs: an address becomes a **delivery zone**
- Keep the customer id only as a **grouping key**, never a feature
- Drop direct identifiers the model never uses
- Fewer sensitive fields: less to protect, less to leak`,
  narration:
    "Cleaning data is a series of decisions about who the model is for, so each one gets written down with a count. We start from a hundred and twenty thousand raw orders. Eighteen hundred are payment-retry duplicates. Three hundred have a delivery time earlier than their checkout, which is not an unusual order but a broken pipeline, and it is worth finding out why. Nine thousand four hundred are too recent for their outcome to be known, and twenty-one hundred were cancelled and have no outcome at all. That leaves a hundred and six thousand four hundred rows, and the claim we eventually make covers only orders like those. Columns get the same treatment, with privacy in mind. The model needs to know roughly where an order is going, not the street address, so the address becomes a delivery zone. The customer id stays, but only as a grouping key. Names, emails and payment details are never needed, so they are never extracted. The less sensitive data a dataset carries, the less there is to protect and the less there is to leak.",
}
