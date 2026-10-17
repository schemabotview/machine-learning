import type { Scene } from '@graphlearning/flow'

// §8 — the chapter's families side by side on the questions that decide between them, above the
// situations each is usually reached for in.
export const compareFamilies: Scene = {
  id: 'compare-families',
  title: 'Choosing a family',
  flow: 'TB',
  padding: 0.08, // the board floats: let it reach the pane
  nodes: [
    {
      id: 'grid',
      kind: 'table',
      label: 'Assumptions and costs',
      headers: ['family', 'assumes', 'needs scaling', 'predict cost', 'native output'],
      values: [
        ['k-NN', 'near ⇒ similar', 'yes', 'high', 'vote fraction'],
        ['naive Bayes', 'features independent', 'no', 'low', 'overconfident P'],
        ['LDA / QDA', 'Gaussian classes', 'no', 'low', 'model-based P'],
        ['linear SVM', 'linear boundary', 'yes', 'low', 'margin score'],
        ['RBF SVM', 'smooth similarity', 'yes', 'medium', 'margin score'],
        ['logistic', 'linear log-odds', 'yes', 'low', 'log-loss P'],
      ],
    },
    {
      id: 'when',
      label: 'Reach for it when',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'w-knn', label: 'k-NN', sub: 'few scaled features', pattern: 'network', icon: 'users' },
        { id: 'w-nb', label: 'Naive Bayes', sub: 'text, little data', pattern: 'warn', icon: 'file' },
        { id: 'w-lda', label: 'LDA / QDA', sub: 'near-Gaussian classes', pattern: 'storage', icon: 'sigma' },
        { id: 'w-lsvm', label: 'Linear SVM', sub: 'many sparse features', pattern: 'service', icon: 'ruler' },
        { id: 'w-rbf', label: 'RBF SVM', sub: 'small, curved problems', pattern: 'service', icon: 'share' },
        { id: 'w-log', label: 'Logistic', sub: 'probabilities needed', pattern: 'user', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'grid', target: 'when', label: 'in practice' }],
}
