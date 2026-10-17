import type { Scene, PlotPoint } from '@graphlearning/flow'

// Orders for eight customers over twelve weeks — a fixed pseudo-random pattern, not real data.
// For a claim about FUTURE orders from NEW customers both cuts apply: train is weeks 1–8 of
// customers 1–6, test is weeks 9–12 of customers 7–8, and the off-diagonal rows are discarded
// because each would leak one side of the claim into the other.
const orders: PlotPoint[] = []
for (let c = 1; c <= 8; c++) for (let w = 1; w <= 12; w++) if ((c * 7 + w * 5) % 3 !== 0) orders.push([w, c])
const train = orders.filter(([w, c]) => w <= 8 && c <= 6)
const test = orders.filter(([w, c]) => w > 8 && c > 6)
const dropped = orders.filter(([w, c]) => (w <= 8) !== (c <= 6))

// §2 — the combined group + temporal split drawn on a customer × week grid, above the table that
// says which split supports which claim.
export const splitStrategies: Scene = {
  id: 'split-strategies',
  title: 'The split follows the claim',
  flow: 'TB',
  nodes: [
    {
      id: 'grid',
      kind: 'plot',
      label: 'Future orders from new customers',
      sub: 'each dot is one order',
      plot: {
        x: { min: 0.5, max: 12.5, step: 1, label: 'week' },
        y: { min: 0.5, max: 8.5, step: 1, label: 'customer' },
        axes: 'corner',
        grid: false,
        series: [
          { kind: 'scatter', points: train, color: 'service', size: 6, label: 'train', labelAt: [0.7, 6.15] },
          { kind: 'scatter', points: test, color: 'user', size: 6, label: 'test', labelAt: [9.1, 8.35] },
          { kind: 'scatter', points: dropped, color: '#4b5563', size: 5, label: 'discarded', labelAt: [10, 4] },
          { kind: 'segment', from: [8.5, 0.5], to: [8.5, 8.5], color: 'warn', dashed: true, label: 'time cut', labelAt: [8.7, 0.75] },
          { kind: 'segment', from: [0.5, 6.5], to: [12.5, 6.5], color: 'warn', dashed: true, label: 'group cut', labelAt: [3.2, 6.8] },
        ],
      },
    },
    {
      id: 'strategies',
      kind: 'table',
      label: 'Which split supports which claim',
      headers: ['split', 'holds out', 'supports'],
      values: [
        ['random', 'random rows', 'iid rows only'],
        ['stratified', 'rows, class mix kept', 'iid, rare late class'],
        ['group', 'whole customers', 'new customers'],
        ['temporal', 'later weeks', 'future orders'],
        ['group + temporal', 'both', 'new customers, later'],
      ],
    },
  ],
  edges: [],
}
