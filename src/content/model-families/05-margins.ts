import type { Section } from '../types'

export const margins: Section = {
  id: 'margins',
  title: 'Linear margins and hinge loss',
  scene: 'margins',
  focus: 'street',
  slide: `## Margins and the hinge loss

A support-vector machine looks for the boundary with the **widest street** between the classes.

### The geometry
- Decision function f(x) = w · x + b; the boundary is **f(x) = 0**
- Margins sit at **f(x) = ±1**; width is set by the size of w
- Only points **on or inside** the margin — the support vectors — shape the fit
- Here **4** support vectors fix the boundary; the rest could move freely

### Soft constraints
- **Hinge loss** max(0, 1 − y·f(x)) is zero for points safely outside the margin
- **C** prices violations: small C, wide margin, many support vectors
- Large C chases every point and narrows the margin; tune C on validation
- The output f(x) is a **margin score**, not a probability`,
  narration:
    "A support-vector machine asks a geometric question: of all the lines that separate the classes, which leaves the widest street between them? The decision function is again a weighted sum, w dot x plus b. The boundary is where it equals zero, and the edges of the street are where it equals plus and minus one. Making w smaller widens the street. The striking property is that only a few training points matter: those on the edge of the street or inside it, the support vectors, here four of them. Every other point could move, as long as it stays outside the street, and the boundary would not change. Real data is rarely perfectly separable, so the margin is soft. The hinge loss charges nothing for a point safely outside its margin and grows linearly as a point intrudes. The setting C prices those intrusions. Small C tolerates violations and keeps a wide margin with many support vectors; large C chases every training point and narrows the street. Like any capacity setting it is tuned on validation. And the output is a margin score, a distance from the boundary, not a probability.",
}
