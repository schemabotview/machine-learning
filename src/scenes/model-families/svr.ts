import type { Scene, PlotPoint } from '@graphlearning/flow'

// Support-vector regression: errors inside the ±ε tube cost nothing; only points outside it (the
// support vectors) shape the fit. Illustrative durations against distance.
const wobble = [3, -2, 9, -4, 1, -11, 4, 2, -3, 12, -1, 3, -8, 2, -2, 5, -10, 1]
const pts: PlotPoint[] = wobble.map((e, i) => [i + 1, Math.round(25 + 4 * (i + 1) + e)])
const fit = (x: number) => 25 + 4 * x
const eps = 6
const outside = pts.filter(([x, y]) => Math.abs(y - fit(x)) > eps)

// §7 — the ε-insensitive tube, over what each model must keep in memory to predict.
export const svr: Scene = {
  id: 'svr',
  title: 'A tube instead of a line',
  flow: 'TB',
  nodes: [
    {
      id: 'tube',
      kind: 'plot',
      label: 'SVR with ε = 6 minutes',
      sub: 'circled: support vectors',
      plot: {
        x: { min: 0, max: 19, step: 2, label: 'distance (km)' },
        y: { min: 0, max: 110, step: 20, label: 'duration (min)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: [[0, fit(0)], [19, fit(19)]], color: 'service', label: 'fit', labelAt: [2, 38] },
          { kind: 'line', points: [[0, fit(0) + eps], [19, fit(19) + eps]], color: 'service', dashed: true, label: '+ε', labelAt: [17.6, 103] },
          { kind: 'line', points: [[0, fit(0) - eps], [19, fit(19) - eps]], color: 'service', dashed: true, label: '−ε', labelAt: [17.6, 86] },
          { kind: 'scatter', points: pts, color: 'network', size: 6 },
          { kind: 'scatter', points: outside, color: 'warn', size: 10 },
        ],
      },
    },
    {
      id: 'memory',
      kind: 'table',
      label: 'What prediction has to keep',
      headers: ['model', 'stores', 'predict cost'],
      values: [
        ['linear / ridge', 'd coefficients', 'd'],
        ['k-NN', 'every training row', 'n × d'],
        ['kernel SVM / SVR', 'support vectors', 'n_SV × d'],
      ],
    },
  ],
  edges: [{ source: 'tube', target: 'memory', label: 'at prediction time' }],
}
