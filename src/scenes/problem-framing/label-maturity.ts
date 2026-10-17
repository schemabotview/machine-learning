import type { Scene, PlotPoint } from '@graphlearning/flow'

// Share of orders whose delivery has been observed, by order age in days. Illustrative: most orders
// land in 2–5 days and a long tail runs past a week; a 10-day window captures ~99.8 %.
const matured: PlotPoint[] = Array.from({ length: 57 }, (_, i) => {
  const d = i * 0.25
  return [d, 1 / (1 + Math.exp(-0.9 * (d - 3)))]
})

// §4 — the maturity curve with the training cutoff marked, over the three ways a label goes wrong.
export const labelMaturity: Scene = {
  id: 'label-maturity',
  title: 'When a label can be trusted',
  flow: 'TB',
  nodes: [
    {
      id: 'curve',
      kind: 'plot',
      label: 'Outcome observed, by order age',
      sub: 'illustrative',
      plot: {
        x: { min: 0, max: 14, step: 2, label: 'order age (days)' },
        y: { min: 0, max: 1, step: 0.25, label: 'share delivered' },
        axes: 'corner',
        series: [
          { kind: 'area', points: matured, color: 'service' },
          { kind: 'line', points: matured, color: 'service', label: 'labels known', labelAt: [11.2, 0.88] },
          { kind: 'segment', from: [10, 0], to: [10, 1], color: 'warn', dashed: true, label: 'maturity cutoff', labelAt: [10.3, 0.55] },
          { kind: 'marker', at: [3, 0.5], label: '3 days: half unknown', labelAt: [3.4, 0.4] },
        ],
      },
    },
    {
      id: 'failures',
      label: 'How a label goes wrong',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'immature', label: 'Immature', sub: 'still in transit', pattern: 'warn', icon: 'clock' },
        { id: 'missing', label: 'Missing', sub: 'cancelled or lost', pattern: 'warn', icon: 'ban' },
        { id: 'noisy', label: 'Noisy', sub: 'batched driver scans', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [],
}
