import type { Scene, PlotPoint } from '@graphlearning/flow'

// One validation ranking (150 late of 1,000) swept over every threshold. Each ROC point (FPR, TPR)
// maps to a PR point via TP = 150·TPR, FP = 850·FPR, precision = TP / (TP + FP). The ★ point is the
// 0.5 threshold of the confusion matrix: TPR 0.60, FPR 70/850 = 0.08, precision 0.56.
const roc: PlotPoint[] = [[0, 0], [0.02, 0.25], [0.05, 0.42], [0.082, 0.6], [0.15, 0.72], [0.25, 0.83], [0.4, 0.92], [0.6, 0.97], [1, 1]]
const pr: PlotPoint[] = roc.slice(1).map(([f, t]) => [t, (150 * t) / (150 * t + 850 * f)])

// §6 — the same ranking as a ROC curve and as a precision–recall curve, side by side.
export const curves: Scene = {
  id: 'curves',
  title: 'Every threshold at once',
  flow: 'TB',
  nodes: [
    {
      id: 'pair',
      label: 'One ranking, two views',
      pattern: 'group',
      cols: 2,
      children: [
        {
          id: 'roc',
          kind: 'plot',
          label: 'ROC · AUC ≈ 0.87',
          plot: {
            x: { min: 0, max: 1, step: 0.25, label: 'false positive rate' },
            y: { min: 0, max: 1, step: 0.25, label: 'recall (TPR)' },
            axes: 'corner',
            equal: true,
            series: [
              { kind: 'line', points: roc, color: 'service' },
              { kind: 'segment', from: [0, 0], to: [1, 1], color: '#4b5563', dashed: true, label: 'random', labelAt: [0.6, 0.48] },
              { kind: 'marker', at: [0.082, 0.6], label: 't = 0.5', labelAt: [0.13, 0.55] },
            ],
          },
        },
        {
          id: 'pr',
          kind: 'plot',
          label: 'Precision–recall',
          plot: {
            x: { min: 0, max: 1, step: 0.25, label: 'recall' },
            y: { min: 0, max: 1, step: 0.25, label: 'precision' },
            axes: 'corner',
            equal: true,
            series: [
              { kind: 'line', points: pr, color: 'network' },
              { kind: 'segment', from: [0, 0.15], to: [1, 0.15], color: '#4b5563', dashed: true, label: 'base rate 0.15', labelAt: [0.05, 0.08] },
              { kind: 'marker', at: [0.6, 0.5625], label: 't = 0.5', labelAt: [0.64, 0.62] },
            ],
          },
        },
      ],
    },
    {
      id: 'averaging',
      label: 'More than two classes: average how?',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'macro', label: 'Macro', sub: 'mean over classes', pattern: 'service', icon: 'scale' },
        { id: 'micro', label: 'Micro', sub: 'pool all decisions', pattern: 'network', icon: 'boxes' },
        { id: 'weighted', label: 'Weighted', sub: 'by class count', pattern: 'external', icon: 'barchart' },
      ],
    },
  ],
  edges: [{ source: 'pair', target: 'averaging' }],
}
