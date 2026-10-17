import type { Scene } from '@graphlearning/flow'
import { cvSearch } from './cv-search'
import { ablation } from './ablation'
import { nested } from './nested'
import { slices } from './slices'
import { calibration } from './calibration'
import { thresholds } from './thresholds'
import { intervals } from './intervals'
import { recommendation } from './recommendation'

// Chapter 7 — Selection, Diagnosis, and Calibrated Decisions. Spread into src/scenes/index.ts.
export const selectionScenes: Scene[] = [cvSearch, ablation, nested, slices, calibration, thresholds, intervals, recommendation]
