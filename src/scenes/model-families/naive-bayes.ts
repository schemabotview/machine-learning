import type { Scene } from '@graphlearning/flow'

// Review-text illustration (not a checkout feature). 100 training reviews: 40 complain about
// lateness (L), 60 do not (O). Word counts with add-one smoothing over a 4-word vocabulary:
// P(w | L) = (n + 1) / (48 + 4), P(w | O) = (n + 1) / (60 + 4).
// "late again": L ∝ 0.4 × 0.596 × 0.250 = 0.0596; O ∝ 0.6 × 0.0625 × 0.094 = 0.0035; P(L) = 0.94.
export const naiveBayes: Scene = {
  id: 'naive-bayes',
  title: 'Multiply the evidence',
  flow: 'TB',
  nodes: [
    {
      id: 'counts',
      kind: 'table',
      label: 'Word likelihoods, add-one smoothed',
      headers: ['word', 'count L', 'P(w | L)', 'count O', 'P(w | O)'],
      values: [
        ['late', '30', '0.596', '3', '0.063'],
        ['again', '12', '0.250', '5', '0.094'],
        ['damaged', '4', '0.096', '14', '0.234'],
        ['great', '2', '0.058', '38', '0.609'],
        ['total', '48', '', '60', ''],
      ],
    },
    {
      id: 'posterior',
      kind: 'code',
      filename: 'late_again.txt',
      label: `prior        P(L) = 0.40          P(O) = 0.60
"late again" 0.40 × 0.596 × 0.250 = 0.0596
             0.60 × 0.063 × 0.094 = 0.0035
normalise    P(L | text) = 0.0596 / 0.0631 = 0.94

MultinomialNB(alpha=1.0)   # alpha is the +1`,
    },
  ],
  edges: [{ source: 'counts', target: 'posterior', label: 'prior × likelihoods' }],
}
