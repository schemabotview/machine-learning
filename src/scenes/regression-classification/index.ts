import type { Scene } from '@graphlearning/flow'
import { linearFit } from './linear-fit'
import { residuals } from './residuals'
import { extrapolation } from './extrapolation'
import { logistic } from './logistic'
import { confusion } from './confusion'
import { curves } from './curves'
import { probabilityQuality } from './probability-quality'
import { imbalance } from './imbalance'

// Chapter 3 — Regression, Classification, and Loss. Spread into src/scenes/index.ts.
export const regressionClassificationScenes: Scene[] = [
  linearFit,
  residuals,
  extrapolation,
  logistic,
  confusion,
  curves,
  probabilityQuality,
  imbalance,
]
