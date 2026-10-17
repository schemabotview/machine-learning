import type { Section } from '../types'

export const manifest: Section = {
  id: 'manifest',
  title: 'Task, data, split and baseline manifest',
  scene: 'manifest',
  focus: 'table',
  slide: `## The task manifest

The capstone starts where chapter 1 did: with the contract — now written as a **manifest** that pins every choice.

### What it fixes
- **Unit, target, prediction time** — one order, late against the promise, at checkout
- **Claim** — future orders, with new customers checked separately
- **Data** — a named snapshot: 106,400 orders after the logged exclusions
- **Split** — temporal; February–March is the **locked test**
- **Baseline** — the zone base rate, log loss **0.41**, scored the same way

### Why pin it first
- Everything later is only comparable if this does not move
- The split is **code** that rebuilds it, not a saved list of row ids`,
  narration:
    "The capstone pulls the course together on the late-risk task, and it begins exactly where chapter one did, with the contract, now written down as a manifest that pins every choice before any model is compared. The unit is one order. The target is whether it is delivered after the promise shown at checkout, and the prediction time is the checkout click, so every feature must exist by then. The claim is about future orders, with new customers checked as a separate question. The data is a named snapshot taken on the thirty-first of March: a hundred and six thousand four hundred orders after the exclusions logged in chapter one. The split is temporal: development data runs to January, and February and March form a locked test set. The baseline is the zone's base late rate, with a log loss of nought point four one, scored exactly the same way as every candidate will be. And the metrics are named now: log loss, cost at the chosen threshold, and subgroup recall. Pinning all of this first is what makes everything after it comparable, and the split is stored as code that rebuilds it, not as a saved list of row identifiers.",
}
