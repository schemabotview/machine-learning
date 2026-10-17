import type { Course } from '../types'
import { learningParadigms } from './01-learning-paradigms'
import { predictionContract } from './02-prediction-contract'
import { columnRoles } from './03-column-roles'
import { labelMaturity } from './04-label-maturity'
import { sampleChecks } from './05-sample-checks'
import { exclusionLog } from './06-exclusion-log'
import { predictionVsCause } from './07-prediction-vs-cause'

// Chapter 1 — formulate a problem and build a defensible modelling dataset.
export const problemFraming: Course = {
  id: 'problem-framing',
  title: 'Problem, Data, and Prediction Contract',
  sections: [
    learningParadigms,
    predictionContract,
    columnRoles,
    labelMaturity,
    sampleChecks,
    exclusionLog,
    predictionVsCause,
  ],
}
