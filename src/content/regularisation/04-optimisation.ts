import type { Section } from '../types'

export const optimisation: Section = {
  id: 'optimisation',
  title: 'Optimisation diagnostics',
  scene: 'optimisation',
  focus: 'traces',
  slide: `## Reading an optimiser

Most models are fitted by **iterative optimisation**; a fit that stopped early is not the model its settings describe.

### Three loss traces
- **Too small** a step: loss still falling at the iteration limit — **not converged**
- **Too large** a step: loss bounces and never settles
- **Converged**: loss flattens, and further iterations change nothing
- The trace is a **training** observation only

### Checks before reading results
- Heed **convergence warnings** and inspect \`n_iter_\` against \`max_iter\`
- **Scaling** evens the curvature of the loss, so solvers converge faster
- A well-optimised objective can still **generalise poorly**: optimisation and generalisation are separate questions
- The gradient mathematics belongs to **Calculus and Optimisation**`,
  narration:
    "Many models, logistic regression and the lasso among them, are fitted by an iterative optimiser that takes repeated steps downhill on the training loss. The mathematics of those steps belongs to the Calculus and Optimisation course; here we need only the diagnostic reading. The plot shows the training loss for three step sizes on the same problem. With a step that is too small, the loss is still falling when the iteration limit arrives: the optimiser stopped, but it did not converge, and the coefficients you get are not the minimum the settings describe. With a step that is too large, the loss bounces back and forth and never settles. With a sensible step, the loss falls quickly and flattens, and more iterations change nothing. In practice, take convergence warnings seriously and compare the number of iterations used with the maximum allowed. Unscaled features make the loss surface long and narrow, which slows solvers down; scaling helps them converge. And keep two questions apart: a perfectly optimised training objective can still generalise badly, which is the problem regularisation addresses, not the optimiser.",
}
