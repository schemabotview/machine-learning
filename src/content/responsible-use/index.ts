import type { Course } from '../types'
import { questions } from './01-questions'
import { coefficients } from './02-coefficients'
import { permutationPdp } from './03-permutation-pdp'
import { stability } from './04-stability'
import { subgroups } from './05-subgroups'
import { fairness } from './06-fairness'
import { feedback } from './07-feedback'
import { modelCard } from './08-model-card'

// Chapter 11 — explain model behaviour honestly, and evaluate its use in context.
export const responsibleUse: Course = {
  id: 'responsible-use',
  title: 'Interpretation and Responsible Model Use',
  sections: [questions, coefficients, permutationPdp, stability, subgroups, fairness, feedback, modelCard],
}
