import type { Scene } from '@graphlearning/flow'
import { questions } from './questions'
import { coefficients } from './coefficients'
import { permutationPdp } from './permutation-pdp'
import { stability } from './stability'
import { subgroups } from './subgroups'
import { fairness } from './fairness'
import { feedback } from './feedback'
import { modelCard } from './model-card'

// Chapter 11 — Interpretation and Responsible Model Use. Spread into src/scenes/index.ts.
export const responsibleUseScenes: Scene[] = [questions, coefficients, permutationPdp, stability, subgroups, fairness, feedback, modelCard]
