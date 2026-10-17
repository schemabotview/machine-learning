import type { Course } from '../types'
import { clusterDefinitions } from './01-cluster-definitions'
import { kmeans } from './02-kmeans'
import { hierarchical } from './03-hierarchical'
import { dbscan } from './04-dbscan'
import { clusterValidation } from './05-cluster-validation'
import { mixture } from './06-mixture'
import { kde } from './07-kde'
import { localSolutions } from './08-local-solutions'

// Chapter 9 — clustering mechanisms, density models, and the limits of their evaluation.
export const clustering: Course = {
  id: 'clustering',
  title: 'Clustering and Density Models',
  sections: [clusterDefinitions, kmeans, hierarchical, dbscan, clusterValidation, mixture, kde, localSolutions],
}
