import type { Section } from '../types'

export const learningParadigms: Section = {
  id: 'learning-paradigms',
  title: 'Learning paradigms and baselines',
  scene: 'paradigms',
  focus: 'bar',
  slide: `## Learning paradigms and baselines

Learning from data fits when a relationship is **too tangled to write as rules**, yet **examples of it exist** in the data.

### Two paradigms, one retailer
- **Supervised**: learn a mapping to an observed target — delivery minutes (regression) or late versus on time (classification)
- **Unsupervised**: find structure with no target — customer groups, compressed features, unusual orders
- **Choose by the question**: an outcome you will observe → supervised; structure you want to see → unsupervised

### Baselines come first
- A **rule** (the carrier's promised-days table) or a **classical baseline** (median duration per zone) sets the bar
- A model must beat it on the **same evaluation**, by enough to justify its cost
- If a rule already decides well, learning adds risk without value`,
  narration:
    "Machine learning is worth reaching for when a relationship is too tangled to write down as rules, but examples of it are sitting in your data. Our running example is a fictional retailer that wants to know, at the moment a customer checks out, how long the delivery will take and whether it will arrive late. Those are supervised problems: there is a target we eventually observe, minutes to the door, or late versus on time, and we learn a mapping from what we know at checkout to that target. The same data also supports unsupervised questions, where there is no target at all: which customers behave alike, how to compress many features into a few, which orders look unusual. But before any of that, write down the baseline. The carrier already publishes a promised-days table, and the median delivery time per zone is one line of code. A model has to beat that bar on the same evaluation, by enough to justify what it costs to build and run. If the rule already decides well, learning only adds risk.",
}
