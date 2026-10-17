import type { Scene } from '@graphlearning/flow'
import { blob } from '../points'

// A t-SNE-style map of customer summaries (synthetic): three tight islands. The picture preserves
// who is near whom; it does not preserve gaps, sizes, or densities.
const islandA = blob(91, 24, -2.2, 1.0, 0.35)
const islandB = blob(93, 24, 1.8, 1.5, 0.35)
const islandC = blob(97, 24, 0.4, -1.6, 0.35)

// §5 — a 2-D embedding and the four things it must not be read for.
export const embeddings: Scene = {
  id: 'embeddings',
  title: 'A map, not a measurement',
  flow: 'TB',
  nodes: [
    {
      id: 'map',
      kind: 'plot',
      label: 't-SNE map of customer summaries',
      sub: 'synthetic · axes have no units',
      plot: {
        x: { min: -4, max: 4, step: 2, label: 'embedding 1' },
        y: { min: -3, max: 3, step: 2, label: 'embedding 2' },
        axes: 'corner',
        grid: false,
        equal: true,
        series: [
          { kind: 'scatter', points: islandA, color: 'network', size: 6 },
          { kind: 'scatter', points: islandB, color: 'service', size: 6 },
          { kind: 'scatter', points: islandC, color: 'external', size: 6 },
        ],
      },
    },
    {
      id: 'misreads',
      label: 'Do not read it for',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'gaps', label: 'Gaps', sub: 'not true distances', pattern: 'warn', icon: 'ruler' },
        { id: 'sizes', label: 'Sizes', sub: 'not true spread', pattern: 'warn', icon: 'scale' },
        { id: 'classes', label: 'Islands', sub: 'not proven classes', pattern: 'warn', icon: 'tag' },
        { id: 'new', label: 'New points', sub: 't-SNE has no transform', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [],
}
