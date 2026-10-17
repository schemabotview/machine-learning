import type { Section } from '../types'

export const penaltyPaths: Section = {
  id: 'penalty-paths',
  title: 'Ridge, lasso and elastic net',
  scene: 'penalty-paths',
  focus: 'pair',
  slide: `## Ridge, lasso and elastic net

A penalty adds the **size of the coefficients** to the training loss, so fitting trades accuracy against simplicity.

### Three penalties
- **Ridge (L2)** adds α · Σ w²: every coefficient shrinks smoothly, none reaches zero
- **Lasso (L1)** adds α · Σ |w|: small coefficients become **exactly zero**
- **Elastic net** mixes the two with \`l1_ratio\`
- The intercept is **not** penalised: it only sets the average level

### Using them correctly
- α is chosen on **validation**, never on training error, which always prefers α = 0
- **Scale first**: one α must mean the same thing for every coefficient
- The scaler sits **inside** the pipeline, so it is refitted per fold
- Large α gives high bias; tiny α gives back the unpenalised fit`,
  narration:
    "Regularisation changes what training minimises. Instead of the loss alone, it minimises the loss plus a penalty on the size of the coefficients, scaled by a strength alpha. Ridge regression penalises the sum of squared coefficients. The left plot shows its effect as alpha grows: every coefficient shrinks smoothly toward zero, but none ever gets there. Lasso penalises the sum of absolute values, and that small change has a big consequence: as alpha grows, coefficients hit zero one after another and stay there, so lasso also selects features. Elastic net mixes the two, with a parameter setting the share of each. Two rules make penalties work. First, alpha is a setting we choose on validation data; training error always prefers alpha equal to zero, because the penalty can only make training fit worse. Second, scale the features first. The penalty treats every coefficient alike, so if distance is in kilometres and basket size in items, one alpha punishes them unevenly. That is why the scaler goes inside the pipeline, ahead of the model, and gets refitted in every fold.",
}
