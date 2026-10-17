import type { Course } from '../types'
import { treeSplit } from './01-tree-split'
import { treeComplexity } from './02-tree-complexity'
import { forest } from './03-forest'
import { boosting } from './04-boosting'
import { learningRate } from './05-learning-rate'
import { stacking } from './06-stacking'
import { importance } from './07-importance'
import { treeTradeoffs } from './08-tree-tradeoffs'

// Chapter 6 — tree construction, complexity control, and how ensembles change learning.
export const treesEnsembles: Course = {
  id: 'trees-ensembles',
  title: 'Trees and Ensembles',
  sections: [treeSplit, treeComplexity, forest, boosting, learningRate, stacking, importance, treeTradeoffs],
}
