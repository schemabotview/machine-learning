import type { Course } from '../types'
import { reduceChoices } from './01-reduce-choices'
import { pca } from './02-pca'
import { explainedVariance } from './03-explained-variance'
import { sparseFactors } from './04-sparse-factors'
import { embeddings } from './05-embeddings'
import { foldLocalReduction } from './06-fold-local-reduction'

// Chapter 8 — what a lower-dimensional representation preserves, and what its use may discard.
export const representation: Course = {
  id: 'representation',
  title: 'Dimensionality Reduction and Representation',
  sections: [reduceChoices, pca, explainedVariance, sparseFactors, embeddings, foldLocalReduction],
}
