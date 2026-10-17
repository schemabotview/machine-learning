import type { Section } from '../types'

export const splitStrategies: Section = {
  id: 'split-strategies',
  title: 'Random, stratified, group and temporal splits',
  scene: 'split-strategies',
  focus: 'grid',
  slide: `## Random, group and temporal splits

The split is chosen by the **claim**, not by convenience: hold out what the model will face.

### Matching split to claim
- **Random** assumes independent rows from one unchanging process
- **Stratified** keeps the rare *late* class at the same rate in every part
- **Group** holds out whole customers — the claim is about **new customers**
- **Temporal** trains on earlier weeks, tests on later ones — the claim is about **future orders**

### Both claims at once
- Train on early weeks of some customers; test on later weeks of **other** customers
- Rows that fall in neither box are **discarded**, not reassigned
- The strict split costs data; a weaker one **overstates** what the model can do
- Name the claim before the split`,
  narration:
    "There is no single correct split; there is the split that matches your claim. A random split assumes every row is an independent draw from one process that never changes, which is rarely true of orders. A stratified split is random but keeps the late class at the same rate in every part, which matters when late orders are rare. If the claim is about new customers, hold out whole customers, so that no customer's habits leak from training into evaluation. If the claim is about future orders, train on earlier weeks and evaluate on later ones, because that is how the model will be used. The plot shows the strictest case, a claim about future orders from new customers. Each dot is an order. Training uses weeks one to eight from customers one to six. Testing uses weeks nine to twelve from customers seven and eight. The grey dots, early orders from test customers and later orders from training customers, are thrown away, because putting either on the wrong side would leak one half of the claim into the other.",
}
