import type { Scene } from '@graphlearning/flow'

// §1 — one modelling set, three roles. Each column answers the same four questions (what it does,
// how much it sees, what its score means, how it is misused) so the board reads across.
export const splitRoles: Scene = {
  id: 'split-roles',
  title: 'Three roles for the data',
  flow: 'TB',
  nodes: [
    { id: 'modelling', label: 'Modelling set', sub: '106,400 orders', pattern: 'storage', icon: 'database' },
    {
      id: 'train',
      label: 'Training',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'fits', label: 'Fits', sub: 'weights, scalers, vocab', pattern: 'service', icon: 'gears' },
        { id: 'train-share', label: 'Sees', sub: '~70 % of orders', pattern: 'service', icon: 'chartpie' },
        { id: 'train-score', label: 'Score is', sub: 'a training observation', pattern: 'service', icon: 'tag' },
        { id: 'train-risk', label: 'Misread as', sub: 'how good the model is', pattern: 'warn', icon: 'ban' },
      ],
    },
    {
      id: 'validation',
      label: 'Validation',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'chooses', label: 'Chooses', sub: 'model and settings', pattern: 'network', icon: 'scale' },
        { id: 'val-share', label: 'Sees', sub: '~15 % of orders', pattern: 'network', icon: 'chartpie' },
        { id: 'val-score', label: 'Score is', sub: 'selection evidence', pattern: 'network', icon: 'tag' },
        { id: 'val-risk', label: 'Overused', sub: 'becomes training data', pattern: 'warn', icon: 'repeat' },
      ],
    },
    {
      id: 'test',
      label: 'Test',
      pattern: 'group',
      cols: 1,
      children: [
        { id: 'estimates', label: 'Estimates', sub: 'the chosen pipeline', pattern: 'user', icon: 'ruler' },
        { id: 'test-share', label: 'Sees', sub: '~15 % of orders', pattern: 'user', icon: 'chartpie' },
        { id: 'test-score', label: 'Score is', sub: 'the final-test result', pattern: 'user', icon: 'tag' },
        { id: 'test-once', label: 'Touched', sub: 'once, at the end', pattern: 'user', icon: 'lock' },
      ],
    },
  ],
  edges: [
    { source: 'modelling', target: 'train', label: 'fit' },
    { source: 'modelling', target: 'validation', label: 'choose' },
    { source: 'modelling', target: 'test', label: 'report' },
  ],
}
