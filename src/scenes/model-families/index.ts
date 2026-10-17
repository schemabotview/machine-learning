import type { Scene } from '@graphlearning/flow'
import { knn } from './knn'
import { distanceK } from './distance-k'
import { naiveBayes } from './naive-bayes'
import { ldaQda } from './lda-qda'
import { margins } from './margins'
import { kernels } from './kernels'
import { svr } from './svr'
import { compareFamilies } from './compare-families'

// Chapter 5 — Local, Probabilistic, and Margin-Based Models. Spread into src/scenes/index.ts.
export const modelFamiliesScenes: Scene[] = [knn, distanceK, naiveBayes, ldaQda, margins, kernels, svr, compareFamilies]
