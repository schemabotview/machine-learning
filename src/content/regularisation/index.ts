import type { Course } from '../types'
import { capacity } from './01-capacity'
import { penaltyPaths } from './02-penalty-paths'
import { sparsityStability } from './03-sparsity-stability'
import { optimisation } from './04-optimisation'
import { earlyStopping } from './05-early-stopping'
import { learningCurves } from './06-learning-curves'
import { complexityCosts } from './07-complexity-costs'

// Chapter 4 — connect training objectives and optimisation to generalisation.
export const regularisation: Course = {
  id: 'regularisation',
  title: 'Regularisation and Learning Behaviour',
  sections: [capacity, penaltyPaths, sparsityStability, optimisation, earlyStopping, learningCurves, complexityCosts],
}
