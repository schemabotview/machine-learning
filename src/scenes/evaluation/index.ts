import type { Scene } from '@graphlearning/flow'
import { splitRoles } from './split-roles'
import { splitStrategies } from './split-strategies'
import { leakageAudit } from './leakage-audit'
import { foldState } from './fold-state'
import { imputeScale } from './impute-scale'
import { unseenInputs } from './unseen-inputs'
import { historyFeatures } from './history-features'
import { compositePipeline } from './composite-pipeline'

// Chapter 2 — Generalisation, Evaluation, and Feature Pipelines. Spread into src/scenes/index.ts.
export const evaluationScenes: Scene[] = [
  splitRoles,
  splitStrategies,
  leakageAudit,
  foldState,
  imputeScale,
  unseenInputs,
  historyFeatures,
  compositePipeline,
]
