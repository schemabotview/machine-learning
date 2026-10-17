import type { Section } from '../types'

export const columnRoles: Section = {
  id: 'column-roles',
  title: 'Features, targets and metadata',
  scene: 'column-roles',
  focus: 'roles',
  slide: `## Features, targets and metadata

Every column gets **exactly one role**, decided by the contract — not by whatever happens to sit in the table.

### Three roles
- **Features (X)**: known at checkout — zone, basket size, distance, the promise shown
- **Target (y)**: the outcome we learn — duration in minutes, or the late flag
- **Metadata**: identifies and organises rows — order id, customer id, timestamp
- A **derived** column takes the role of its inputs: *late* is computed from the target, so it is a target

### Metadata is not thrown away
- Customer id defines **groups** for splitting
- The timestamp defines **order in time** and the cutoff
- Keep it **aligned row by row** beside X and y, so later splits can use it
- An id used as a feature lets a model **memorise rows** instead of learning`,
  narration:
    "Once the contract is fixed, every column in the orders table gets exactly one role. Features are what the model is allowed to see, and the test is simple: was this value known at the checkout click? The delivery zone, the number of items in the basket, the distance, and the promise we displayed all pass. The target is what we are learning to predict, duration in minutes for one task and the late flag for the other. Notice that late is derived from duration and the promise, so it can never also be a feature. Everything else is metadata: the order id, the customer id, the timestamp. Metadata is not junk to discard. The customer id is how we will keep whole customers out of training when the claim is about new customers. The timestamp is how we order rows in time and enforce the cutoff. What metadata must never become is a feature. An id carries no general pattern, so a model that sees it can memorise individual rows, and that looks like accuracy until it meets an order it has never seen.",
}
