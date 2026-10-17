import type { Course } from '../types'
import { cvSearch } from './01-cv-search'
import { ablation } from './02-ablation'
import { nested } from './03-nested'
import { slices } from './04-slices'
import { calibration } from './05-calibration'
import { thresholds } from './06-thresholds'
import { intervals } from './07-intervals'
import { recommendation } from './08-recommendation'

// Chapter 7 — compare whole procedures honestly, then connect outputs to decisions.
export const selection: Course = {
  id: 'selection',
  title: 'Selection, Diagnosis, and Calibrated Decisions',
  sections: [cvSearch, ablation, nested, slices, calibration, thresholds, intervals, recommendation],
}
