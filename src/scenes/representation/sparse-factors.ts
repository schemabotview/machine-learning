import type { Scene } from '@graphlearning/flow'

// §4 — two reductions for sparse, non-negative data such as review word counts (a separate text
// illustration). Truncated SVD skips centring so the matrix stays sparse; NMF finds additive parts.
export const sparseFactors: Scene = {
  id: 'sparse-factors',
  title: 'Reductions for sparse counts',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'text_factors.py',
      label: `tfidf = TfidfVectorizer(min_df=5).fit(train_reviews)
T = tfidf.transform(train_reviews)     # 4,000 × 3,000, 99 % zeros

svd = TruncatedSVD(n_components=50).fit(T)   # no centring: stays sparse
nmf = NMF(n_components=2, init="nndsvd").fit(T)   # parts, all ≥ 0`,
    },
    {
      id: 'topics',
      kind: 'table',
      label: 'NMF parts: top words by weight',
      headers: ['part', 'top words', 'share of reviews'],
      values: [
        ['1', 'late, waiting, again, still', '0.38'],
        ['2', 'damaged, box, broken, crushed', '0.17'],
      ],
    },
    {
      id: 'compare',
      label: 'Which one, when',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'tsvd', label: 'Truncated SVD', sub: 'compact, can be negative', pattern: 'service', icon: 'layers' },
        { id: 'nmf', label: 'NMF', sub: 'additive, readable parts', pattern: 'network', icon: 'boxes' },
        { id: 'local', label: 'Both', sub: 'local solutions, seed it', pattern: 'warn', icon: 'repeat' },
        { id: 'fold', label: 'Fit on train', sub: 'vocabulary too', pattern: 'user', icon: 'lock' },
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'topics', label: 'NMF output' },
    { source: 'topics', target: 'compare' },
  ],
}
