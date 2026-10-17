import type { Scene } from '@graphlearning/flow'
import { manifest } from './manifest'
import { comparison } from './comparison'
import { tradeoffs } from './tradeoffs'
import { finalTest } from './final-test'
import { inferenceContract } from './inference-contract'
import { separateValidation } from './separate-validation'

// Chapter 12 — Integrated Modelling and Companion Handoff. Spread into src/scenes/index.ts.
export const capstoneScenes: Scene[] = [manifest, comparison, tradeoffs, finalTest, inferenceContract, separateValidation]
