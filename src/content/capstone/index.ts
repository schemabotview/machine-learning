import type { Course } from '../types'
import { manifest } from './01-manifest'
import { comparison } from './02-comparison'
import { tradeoffs } from './03-tradeoffs'
import { finalTest } from './04-final-test'
import { inferenceContract } from './05-inference-contract'
import { separateValidation } from './06-separate-validation'

// Chapter 12 — a justified recommendation, and the contract handed to engineering.
export const capstone: Course = {
  id: 'capstone',
  title: 'Integrated Modelling and Companion Handoff',
  sections: [manifest, comparison, tradeoffs, finalTest, inferenceContract, separateValidation],
}
