import type { Section } from '../types'

export const extrapolation: Section = {
  id: 'extrapolation',
  title: 'Basis features and extrapolation',
  scene: 'extrapolation',
  focus: 'curve',
  slide: `## Basis features and extrapolation

A linear model can fit curves if we give it **transformed features**: it stays linear in its coefficients.

### Bending a linear model
- **Polynomial** terms — km, km², km³ — let duration grow faster on long routes
- **Interactions** — km × rush hour — let the slope depend on context
- **Bins** give each distance band its own level
- Every added term is more **capacity**: chapter 4 decides how much is too much

### Leaving the data
- Training orders run **1–20 km**; nothing constrains the curve beyond
- The cubic term makes a 30 km prediction climb steeply — a property of the basis, not of deliveries
- Flag inputs outside the training range; a model's confidence does not shrink there
- Predicting on a **log-duration** model and exponentiating gives a median, not the mean`,
  narration:
    "A linear model only has to be linear in its coefficients, not in its inputs. If we add distance squared and distance cubed as extra columns, the same linear machinery fits a curve, and that lets durations grow faster on long routes. An interaction, distance times a rush-hour flag, lets the slope itself change at busy times. Bins replace distance with bands, each with its own level. All of these are features we design, and they are fitted inside the pipeline like any other transformation. The danger is at the edges. Our training orders cover one to twenty kilometres, and inside that range the cubic fit follows the points closely. Beyond twenty kilometres there is no data at all, and the curve does whatever its basis dictates; here the cubic term makes a thirty-kilometre prediction shoot upward. That number is a property of the polynomial, not of deliveries. A linear model reports no extra uncertainty out there, so the pipeline has to notice for it: record the training range and flag inputs that fall outside it.",
}
