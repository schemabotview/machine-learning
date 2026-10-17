import type { Course } from '../types'
import { linearFit } from './01-linear-fit'
import { residuals } from './02-residuals'
import { extrapolation } from './03-extrapolation'
import { logistic } from './04-logistic'
import { confusion } from './05-confusion'
import { curves } from './06-curves'
import { probabilityQuality } from './07-probability-quality'
import { imbalance } from './08-imbalance'

// Chapter 3 — regression mechanisms, classification outputs, and the metrics matched to each.
export const regressionClassification: Course = {
  id: 'regression-classification',
  title: 'Regression, Classification, and Loss',
  sections: [linearFit, residuals, extrapolation, logistic, confusion, curves, probabilityQuality, imbalance],
}
