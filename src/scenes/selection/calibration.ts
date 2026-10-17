import type { Scene, PlotPoint } from '@graphlearning/flow'

// Reliability diagram on a held-out calibration split (illustrative). The forest's probabilities are
// squeezed: its low bins are too high and its high bins too low. Isotonic calibration, fitted on a
// separate split, brings the bins back to the diagonal.
const raw: PlotPoint[] = [[0.05, 0.01], [0.15, 0.06], [0.25, 0.16], [0.35, 0.33], [0.45, 0.55], [0.55, 0.74], [0.65, 0.88]]
const calibrated: PlotPoint[] = [[0.05, 0.05], [0.15, 0.14], [0.25, 0.26], [0.35, 0.35], [0.45, 0.46], [0.55, 0.53], [0.65, 0.66], [0.8, 0.79]]

// §5 — the reliability diagram, over the three-way split calibration needs.
export const calibration: Scene = {
  id: 'calibration',
  title: 'Do the probabilities mean what they say?',
  flow: 'TB',
  nodes: [
    {
      id: 'reliability',
      kind: 'plot',
      label: 'Reliability diagram · late risk',
      sub: 'binned on the calibration split',
      plot: {
        x: { min: 0, max: 1, step: 0.25, label: 'predicted P(late)' },
        y: { min: 0, max: 1, step: 0.25, label: 'observed late rate' },
        axes: 'corner',
        equal: true,
        series: [
          { kind: 'segment', from: [0, 0], to: [1, 1], color: '#4b5563', dashed: true, label: 'perfect', labelAt: [0.78, 0.7] },
          { kind: 'line', points: raw, color: 'warn', label: 'forest, raw', labelAt: [0.38, 0.8] },
          { kind: 'scatter', points: raw, color: 'warn', size: 7 },
          { kind: 'line', points: calibrated, color: 'service', label: 'after isotonic', labelAt: [0.55, 0.38] },
        ],
      },
    },
    {
      id: 'split',
      label: 'Calibration needs its own data',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'fit-model', label: 'Fit model', sub: 'training rows', pattern: 'service', icon: 'gears' },
        { id: 'fit-cal', label: 'Fit calibrator', sub: 'separate rows or CV', pattern: 'network', icon: 'gauge' },
        { id: 'judge', label: 'Judge', sub: 'test rows, once', pattern: 'user', icon: 'lock' },
      ],
    },
  ],
  edges: [{ source: 'reliability', target: 'split' }],
}
