import type { Scene } from '@graphlearning/flow'
import { paradigms } from './paradigms'
import { predictionContract } from './prediction-contract'
import { columnRoles } from './column-roles'
import { labelMaturity } from './label-maturity'
import { sampleChecks } from './sample-checks'
import { exclusionLog } from './exclusion-log'
import { predictionVsCause } from './prediction-vs-cause'

// Chapter 1 — Problem, Data, and Prediction Contract. Spread into src/scenes/index.ts.
export const problemFramingScenes: Scene[] = [
  paradigms,
  predictionContract,
  columnRoles,
  labelMaturity,
  sampleChecks,
  exclusionLog,
  predictionVsCause,
]
