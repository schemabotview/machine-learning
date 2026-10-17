import type { Scene } from '@graphlearning/flow'
import { contract } from './contract'
import { outlierNovelty } from './outlier-novelty'
import { lofIsolation } from './lof-isolation'
import { covariance } from './covariance'
import { alertBudget } from './alert-budget'
import { shift } from './shift'

// Chapter 10 — Anomaly and Novelty Detection. Spread into src/scenes/index.ts.
export const anomalyScenes: Scene[] = [contract, outlierNovelty, lofIsolation, covariance, alertBudget, shift]
