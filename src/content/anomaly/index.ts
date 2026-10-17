import type { Course } from '../types'
import { contract } from './01-contract'
import { outlierNovelty } from './02-outlier-novelty'
import { lofIsolation } from './03-lof-isolation'
import { covariance } from './04-covariance'
import { alertBudget } from './05-alert-budget'
import { shift } from './06-shift'

// Chapter 10 — define unusualness operationally and compare detectors without equating anomaly
// with wrongdoing.
export const anomaly: Course = {
  id: 'anomaly',
  title: 'Anomaly and Novelty Detection',
  sections: [contract, outlierNovelty, lofIsolation, covariance, alertBudget, shift],
}
