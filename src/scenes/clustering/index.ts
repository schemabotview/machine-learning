import type { Scene } from '@graphlearning/flow'
import { clusterDefinitions } from './cluster-definitions'
import { kmeans } from './kmeans'
import { hierarchical } from './hierarchical'
import { dbscanScene } from './dbscan'
import { clusterValidation } from './cluster-validation'
import { mixtureScene } from './mixture'
import { kdeScene } from './kde'
import { localSolutions } from './local-solutions'

// Chapter 9 — Clustering and Density Models. Spread into src/scenes/index.ts.
export const clusteringScenes: Scene[] = [clusterDefinitions, kmeans, hierarchical, dbscanScene, clusterValidation, mixtureScene, kdeScene, localSolutions]
