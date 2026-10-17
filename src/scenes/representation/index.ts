import type { Scene } from '@graphlearning/flow'
import { reduceChoices } from './reduce-choices'
import { pca } from './pca'
import { explainedVariance } from './explained-variance'
import { sparseFactors } from './sparse-factors'
import { embeddings } from './embeddings'
import { foldLocalReduction } from './fold-local-reduction'

// Chapter 8 — Dimensionality Reduction and Representation. Spread into src/scenes/index.ts.
export const representationScenes: Scene[] = [reduceChoices, pca, explainedVariance, sparseFactors, embeddings, foldLocalReduction]
