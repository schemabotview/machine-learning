import type { Course } from '../types'
import { knn } from './01-knn'
import { distanceK } from './02-distance-k'
import { naiveBayes } from './03-naive-bayes'
import { ldaQda } from './04-lda-qda'
import { margins } from './05-margins'
import { kernels } from './06-kernels'
import { svr } from './07-svr'
import { compareFamilies } from './08-compare-families'

// Chapter 5 — neighbourhood, generative and margin-based models, and how to choose among them.
export const modelFamilies: Course = {
  id: 'model-families',
  title: 'Local, Probabilistic, and Margin-Based Models',
  sections: [knn, distanceK, naiveBayes, ldaQda, margins, kernels, svr, compareFamilies],
}
