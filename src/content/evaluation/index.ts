import type { Course } from '../types'
import { splitRoles } from './01-split-roles'
import { splitStrategies } from './02-split-strategies'
import { leakageAudit } from './03-leakage-audit'
import { foldState } from './04-fold-state'
import { imputeScale } from './05-impute-scale'
import { unseenInputs } from './06-unseen-inputs'
import { historyFeatures } from './07-history-features'
import { compositePipeline } from './08-composite-pipeline'

// Chapter 2 — design evaluation around intended use, and keep preparation train-only.
export const evaluation: Course = {
  id: 'evaluation',
  title: 'Generalisation, Evaluation, and Feature Pipelines',
  sections: [
    splitRoles,
    splitStrategies,
    leakageAudit,
    foldState,
    imputeScale,
    unseenInputs,
    historyFeatures,
    compositePipeline,
  ],
}
