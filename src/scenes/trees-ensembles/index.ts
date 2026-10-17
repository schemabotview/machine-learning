import type { Scene } from '@graphlearning/flow'
import { treeSplit } from './tree-split'
import { treeComplexity } from './tree-complexity'
import { forest } from './forest'
import { boosting } from './boosting'
import { learningRate } from './learning-rate'
import { stacking } from './stacking'
import { importance } from './importance'
import { treeTradeoffs } from './tree-tradeoffs'

// Chapter 6 — Trees and Ensembles. Spread into src/scenes/index.ts.
export const treesEnsemblesScenes: Scene[] = [treeSplit, treeComplexity, forest, boosting, learningRate, stacking, importance, treeTradeoffs]
