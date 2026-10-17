import type { Scene, PlotPoint } from '@graphlearning/flow'

// Internal and stability evidence for k on the customer summary (illustrative): silhouette from
// the fitted partition; stability as the mean adjusted Rand index between bootstrap refits.
const ks = [2, 3, 4, 5, 6, 7]
const sil = [0.41, 0.52, 0.47, 0.39, 0.35, 0.31]
const ari = [0.78, 0.91, 0.62, 0.55, 0.48, 0.44]
const pts = (ys: number[]): PlotPoint[] => ys.map((y, i) => [ks[i], y])

// §5 — three kinds of evidence, and only one of them says what the groups are for.
export const clusterValidation: Scene = {
  id: 'cluster-validation',
  title: 'Is the partition any use?',
  flow: 'TB',
  nodes: [
    {
      id: 'scores',
      kind: 'plot',
      label: 'Choosing k on the customer summary',
      sub: 'illustrative',
      plot: {
        x: { min: 1.5, max: 7.5, step: 1, label: 'k' },
        y: { min: 0, max: 1, step: 0.25, label: 'score' },
        axes: 'corner',
        series: [
          { kind: 'line', points: pts(ari), color: 'service', label: 'stability (ARI)', labelAt: [5.2, 0.6] },
          { kind: 'scatter', points: pts(ari), color: 'service', size: 7 },
          { kind: 'line', points: pts(sil), color: 'network', label: 'silhouette', labelAt: [5.2, 0.27] },
          { kind: 'scatter', points: pts(sil), color: 'network', size: 7 },
        ],
      },
    },
    {
      id: 'evidence',
      label: 'Three kinds of evidence',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'internal', label: 'Internal', sub: 'silhouette: geometry', pattern: 'network', icon: 'ruler' },
        { id: 'stable', label: 'Stability', sub: 'same groups on resamples', pattern: 'service', icon: 'repeat' },
        { id: 'domain', label: 'Domain', sub: 'does a team act on it?', pattern: 'user', icon: 'users' },
      ],
    },
  ],
  edges: [{ source: 'scores', target: 'evidence' }],
}
