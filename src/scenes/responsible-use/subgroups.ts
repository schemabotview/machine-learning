import type { Scene, PlotPoint } from '@graphlearning/flow'

// Late-order recall by subgroup on the test set, with a normal-approximation 95 % interval computed
// from each group's number of late orders. Small groups get wide intervals.
const groups: { name: string; late: number; caught: number }[] = [
  { name: 'north', late: 400, caught: 256 },
  { name: 'east', late: 120, caught: 66 },
  { name: 'new customers', late: 60, caught: 29 },
  { name: 'west (new zone)', late: 25, caught: 10 },
]
const stats = groups.map((g) => {
  const p = g.caught / g.late
  const half = 1.96 * Math.sqrt((p * (1 - p)) / g.late)
  return { ...g, p, lo: Math.max(0, p - half), hi: Math.min(1, p + half) }
})

// §5 — uneven error, shown with its uncertainty and its counts. Sources of the gaps are on the slide.
export const subgroups: Scene = {
  id: 'subgroups',
  title: 'Who the errors fall on',
  flow: 'TB',
  nodes: [
    {
      id: 'recall',
      kind: 'plot',
      label: 'Recall of late orders by group · test set',
      sub: '95 % interval from each group’s count',
      plot: {
        x: { min: 0.5, max: 4.5, step: 1, label: '1 north · 2 east · 3 new customers · 4 west' },
        y: { min: 0, max: 1, step: 0.25, label: 'recall' },
        axes: 'corner',
        grid: false,
        series: [
          ...stats.map((s, i) => ({ kind: 'segment' as const, from: [i + 1, s.lo] as PlotPoint, to: [i + 1, s.hi] as PlotPoint, color: 'service' })),
          { kind: 'scatter', points: stats.map((s, i) => [i + 1, s.p] as PlotPoint), color: 'user', size: 9 },
        ],
      },
    },
    {
      id: 'table',
      kind: 'table',
      label: 'With denominators',
      headers: ['group', 'late orders', 'caught', 'recall', '95 % interval'],
      values: stats.map((s) => [s.name, String(s.late), String(s.caught), s.p.toFixed(2), `${s.lo.toFixed(2)}–${s.hi.toFixed(2)}`]),
    },
  ],
  edges: [{ source: 'recall', target: 'table', label: 'with denominators' }],
}
