import type { Scene, PlotPoint } from '@graphlearning/flow'

// Expected cost per 1,000 validation orders (150 late) by threshold, with a missed late order costing
// £8 and a needless express offer £3: cost = 8 × FN + 3 × FP. Lowest at 0.3, near the calibrated
// optimum 3 / (3 + 8) ≈ 0.27. Express capacity of 200 per 1,000 forces t ≈ 0.4 instead.
const rows: [number, number, number, number][] = [
  // threshold, flagged, TP, FP
  [0.1, 520, 143, 377],
  [0.2, 330, 130, 200],
  [0.3, 240, 118, 122],
  [0.4, 195, 104, 91],
  [0.5, 160, 90, 70],
  [0.6, 120, 72, 48],
  [0.7, 70, 48, 22],
]
const cost = ([, , tp, fp]: [number, number, number, number]) => 8 * (150 - tp) + 3 * fp
const curve: PlotPoint[] = rows.map((r) => [r[0], cost(r)])

// §6 — the cost curve and the table it comes from.
export const thresholds: Scene = {
  id: 'thresholds',
  title: 'Choose the threshold by cost',
  flow: 'TB',
  nodes: [
    {
      id: 'cost',
      kind: 'plot',
      label: 'Expected cost per 1,000 orders',
      sub: 'validation · FN £8, FP £3',
      plot: {
        x: { min: 0, max: 0.8, step: 0.1, label: 'threshold' },
        y: { min: 400, max: 1300, step: 200, label: 'cost (£)' },
        axes: 'corner',
        series: [
          { kind: 'line', points: curve, color: 'service' },
          { kind: 'scatter', points: curve, color: 'service', size: 7 },
          { kind: 'marker', at: [0.3, cost(rows[2])], color: 'user', size: 10, label: 'lowest: t = 0.3', labelAt: [0.31, 540] },
          { kind: 'segment', from: [0.4, 400], to: [0.4, 1300], color: 'warn', dashed: true, label: 'capacity 200', labelAt: [0.42, 1200] },
        ],
      },
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Validation counts behind the curve',
      headers: ['threshold', 'flagged', 'recall', 'precision', 'cost'],
      values: rows.filter((r) => [0.2, 0.3, 0.4, 0.5].includes(r[0])).map((r) => [
        r[0].toFixed(1),
        String(r[1]),
        (r[2] / 150).toFixed(2),
        (r[2] / r[1]).toFixed(2),
        `£${cost(r)}`,
      ]),
    },
  ],
  edges: [{ source: 'cost', target: 'table' }],
}
