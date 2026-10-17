import type { Section } from '../types'

export const modelCard: Section = {
  id: 'model-card',
  title: 'Documentation and use boundaries',
  scene: 'model-card',
  focus: 'card',
  slide: `## Documentation and use boundaries

The last responsible-use step is to **write down** what the model is for, what it is not for, and what is known to be weak.

### What the card states
- **Intended use**: offer express when P(late) exceeds 0.3
- **Not for**: pricing, scoring customers, or reviewing couriers
- **Evidence**: the final-test log loss, labelled as such, and the claim it supports
- **Subgroups**: west recall 0.40 from 25 orders, with its wide interval
- **Limits**: new zones, the feedback loop, batched scans

### Keeping it true
- Versioned **with** the model, owned by a named team
- Reviewed when the data, the policy or the population changes`,
  narration:
    "The final step of responsible use is documentation, written so that someone who was not in the room can tell what the model is for and where it stops. A model card does this in a page. It states the intended use: offering express shipping when the late-risk probability exceeds nought point three. Just as important, it states what the model is not for: it was not built or evaluated for pricing, for scoring customers, or for reviewing couriers, and using it there would be using it outside its evidence. It records the data it was trained on and the claim that evidence supports, future orders, with new customers checked separately. It gives the final test result, labelled as a single final test, and the subgroup results with their denominators, including the weak recall in the new west zone. It lists known limits: new zones, the feedback loop from interventions, and noisy labels from batched scans. And it names an owner and a review schedule. The card is versioned with the model and reviewed whenever the data, the policy, or the population changes, because a card that describes last year's model is worse than none.",
}
