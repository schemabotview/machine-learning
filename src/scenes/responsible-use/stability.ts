import type { Scene, PlotPoint } from '@graphlearning/flow'

// Permutation importance repeated on 20 bootstrap refits (illustrative): bars show the 10th–90th
// percentile range, dots the median. The two distance twins trade credit between refits.
const ranges: [number, number, number][] = [
  [2.9, 3.4, 3.9],
  [0.6, 2.1, 3.4],
  [0.4, 1.6, 3.2],
  [1.4, 1.8, 2.2],
  [0.1, 0.4, 0.7],
]
const bars = ranges.map(([lo, , hi], i) => ({ kind: 'segment' as const, from: [i + 1, lo] as PlotPoint, to: [i + 1, hi] as PlotPoint, color: 'service' }))
const medians: PlotPoint[] = ranges.map(([, m], i) => [i + 1, m])

// §4 — how much an explanation moves between refits, and what no explanation can say.
export const stability: Scene = {
  id: 'explanation-stability',
  title: 'Explanations wobble',
  flow: 'TB',
  nodes: [
    {
      id: 'spread',
      kind: 'plot',
      label: 'Permutation importance over 20 refits',
      sub: '1 rush · 2 distance · 3 road · 4 history · 5 zone',
      plot: {
        x: { min: 0.5, max: 5.5, step: 1, label: 'feature' },
        y: { min: 0, max: 4.5, step: 1, label: 'MAE increase (min)' },
        axes: 'corner',
        grid: false,
        series: [
          ...bars,
          { kind: 'scatter', points: medians, color: 'user', size: 9, label: 'median', labelAt: [4.3, 2.6] },
        ],
      },
    },
    {
      id: 'limits',
      label: 'Reading an explanation',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'share', label: 'Twins share', sub: 'distance vs road_km', pattern: 'network', icon: 'copy' },
        { id: 'repeat', label: 'Repeat it', sub: 'seeds and refits', pattern: 'service', icon: 'repeat' },
        { id: 'model', label: 'Of the model', sub: 'not of the world', pattern: 'warn', icon: 'brain' },
        { id: 'causal', label: 'Not causal', sub: 'no what-if guarantee', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'spread', target: 'limits' }],
}
