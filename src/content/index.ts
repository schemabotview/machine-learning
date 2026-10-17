import { problemFraming } from './problem-framing'
import { evaluation } from './evaluation'
import { regressionClassification } from './regression-classification'
import { regularisation } from './regularisation'
import { modelFamilies } from './model-families'
import { treesEnsembles } from './trees-ensembles'
import { selection } from './selection'
import { representation } from './representation'
import { clustering } from './clustering'
import { anomaly } from './anomaly'
import { responsibleUse } from './responsible-use'
import { capstone } from './capstone'
import type { Course, Section } from './types'

// Course registry, in syllabus order. Courses are added here as each is authored.
export const COURSES: Record<string, Course> = {
  [problemFraming.id]: problemFraming,
  [evaluation.id]: evaluation,
  [regressionClassification.id]: regressionClassification,
  [regularisation.id]: regularisation,
  [modelFamilies.id]: modelFamilies,
  [treesEnsembles.id]: treesEnsembles,
  [selection.id]: selection,
  [representation.id]: representation,
  [clustering.id]: clustering,
  [anomaly.id]: anomaly,
  [responsibleUse.id]: responsibleUse,
  [capstone.id]: capstone,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
