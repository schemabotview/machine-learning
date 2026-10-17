import type { Scene } from '@graphlearning/flow'

// §4 — one boosting round on five training orders. Start from the mean, 64. A depth-1 tree on distance
// fits the residuals (short: −14, long: +21); add half of it (η = 0.5). Training MSE: 374 → 153.5.
export const boosting: Scene = {
  id: 'boosting',
  title: 'Fix what is left',
  flow: 'TB',
  nodes: [
    {
      id: 'round',
      kind: 'table',
      label: 'One round, η = 0.5 · training orders',
      headers: ['order', 'y', 'F₀', 'residual', 'tree h₁', 'F₁ = F₀ + 0.5 h₁', 'new residual'],
      values: [
        ['short 1', '40', '64', '−24', '−14', '57', '−17'],
        ['short 2', '50', '64', '−14', '−14', '57', '−7'],
        ['short 3', '60', '64', '−4', '−14', '57', '3'],
        ['long 1', '75', '64', '11', '21', '74.5', '0.5'],
        ['long 2', '95', '64', '31', '21', '74.5', '20.5'],
        ['MSE', '', '374', '', '', '153.5', ''],
      ],
    },
    {
      id: 'steps',
      label: 'The loop',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'start', label: 'Start', sub: 'constant: the mean', pattern: 'storage', icon: 'sigma' },
        { id: 'fit-res', label: 'Fit', sub: 'a small tree to residuals', pattern: 'service', icon: 'tree' },
        { id: 'add', label: 'Add', sub: 'a shrunk step, repeat', pattern: 'network', icon: 'repeat' },
        { id: 'stop', label: 'Stop', sub: 'when held-out loss turns', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [{ source: 'round', target: 'steps', label: 'repeated for hundreds of rounds' }],
}
