import type { Scene } from '@graphlearning/flow'

// §1 — interpretation starts from a question; each question has a scope and a fitting method, and one
// common question is not answerable from a predictive model at all.
export const questions: Scene = {
  id: 'interpretation-questions',
  title: 'Which question are you asking?',
  flow: 'TB',
  nodes: [
    {
      id: 'table',
      kind: 'table',
      label: 'Question → scope → method',
      headers: ['question', 'scope', 'method'],
      values: [
        ['what does the model rely on?', 'global', 'held-out permutation importance'],
        ['how do predictions move with distance?', 'global', 'partial dependence, ICE'],
        ['why is this order 74 minutes?', 'local', 'contributions, what-if'],
        ['where is it wrong?', 'subgroup', 'sliced error with counts'],
        ['would express make it on time?', 'causal', 'not from this model'],
      ],
    },
    {
      id: 'scopes',
      label: 'Scopes',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'global', label: 'Global', sub: 'the model overall', pattern: 'service', icon: 'globe' },
        { id: 'local', label: 'Local', sub: 'one prediction', pattern: 'network', icon: 'search' },
        { id: 'subgroup', label: 'Subgroup', sub: 'a slice of orders', pattern: 'external', icon: 'users' },
        { id: 'causal', label: 'Causal', sub: 'needs an experiment', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'table', target: 'scopes' }],
}
