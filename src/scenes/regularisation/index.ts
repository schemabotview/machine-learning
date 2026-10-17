import type { Scene } from '@graphlearning/flow'
import { capacity } from './capacity'
import { penaltyPaths } from './penalty-paths'
import { sparsityStability } from './sparsity-stability'
import { optimisation } from './optimisation'
import { earlyStopping } from './early-stopping'
import { learningCurves } from './learning-curves'
import { complexityCosts } from './complexity-costs'

// Chapter 4 — Regularisation and Learning Behaviour. Spread into src/scenes/index.ts.
export const regularisationScenes: Scene[] = [
  capacity,
  penaltyPaths,
  sparsityStability,
  optimisation,
  earlyStopping,
  learningCurves,
  complexityCosts,
]
