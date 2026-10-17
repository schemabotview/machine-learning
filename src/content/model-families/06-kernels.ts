import type { Section } from '../types'

export const kernels: Section = {
  id: 'kernels',
  title: 'Kernel models and nonlinear flexibility',
  scene: 'kernels',
  focus: 'ring',
  slide: `## Kernels

A **kernel** measures similarity between two points; swapping it in lets the same margin machinery draw **curved** boundaries.

### Why it works
- An inner class ringed by another: **no straight line** separates them
- The RBF kernel scores pairs by closeness: exp(−γ · distance²)
- The SVM becomes a weighted sum of similarities to its **support vectors**
- Equivalent to a linear boundary in a huge feature space never built **explicitly**

### Tuning
- **γ** sets each point's reach: tiny γ, almost a line; huge γ, an island per point
- Tune **γ and C together**, on validation, with features **scaled**
- Training cost grows quickly with rows: often impractical beyond tens of thousands`,
  narration:
    "Some classes cannot be split by any straight line. Here one class sits in the middle and the other surrounds it in a ring. The kernel trick handles this without changing the support-vector machinery at all. A kernel is a similarity function between two points. The radial basis function kernel, the usual default, gives two points a similarity near one when they are close and near zero when they are far apart, with a parameter gamma setting how quickly it falls off. With a kernel, the SVM's prediction becomes a weighted sum of similarities to its support vectors, and that is enough to draw the circular boundary in the plot. Mathematically it is equivalent to a linear boundary in an enormous feature space, but that space is never built. Gamma controls flexibility. With tiny gamma every point reaches far and the boundary is nearly a line; with huge gamma every point only influences its immediate surroundings and the boundary breaks into islands. Gamma and C interact, so they are tuned together, on validation, and because similarity is a distance, the features must be scaled. Training cost grows fast with the number of rows.",
}
