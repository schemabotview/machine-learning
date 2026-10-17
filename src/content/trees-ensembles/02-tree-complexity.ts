import type { Section } from '../types'

export const treeComplexity: Section = {
  id: 'tree-complexity',
  title: 'Depth, leaf size, pruning and instability',
  scene: 'tree-complexity',
  focus: 'depth',
  slide: `## Tree complexity and instability

Left alone, a tree splits until every leaf is pure — and **memorises** the training orders.

### Controlling capacity
- **max_depth** caps the number of questions; validation is best near depth **4**
- **min_samples_leaf** stops leaves too small to estimate a rate
- **Cost-complexity pruning** (\`ccp_alpha\`) grows fully, then cuts back weak branches
- Choose them on validation; training loss always prefers a deeper tree

### Instability
- Two resamples of the same fold give different **root splits**
- Their validation scores are nearly equal: the **structure** is fragile, not the accuracy
- Do not read one tree's shape as the truth about the data
- This instability is what ensembles exploit next`,
  narration:
    "Without limits a tree keeps splitting until every leaf is pure, and at that point it has memorised the training orders. The plot shows the familiar pattern with depth as capacity: training loss falls toward zero, validation loss is lowest around depth four and then rises. There are several ways to hold a tree back. Maximum depth caps the number of questions on any path. A minimum leaf size refuses to create leaves too small to estimate a rate reliably. Cost-complexity pruning grows the full tree and then removes branches whose improvement does not justify their size, controlled by one parameter. All of these are chosen on validation. The other weakness of trees is instability. Fit the same depth-four tree on two bootstrap resamples of the same training fold, and the first split changes: one tree splits on straight-line distance, the other on road distance, then they diverge further. Yet their validation scores are almost identical. The accuracy is stable; the structure is not. So one tree's shape should never be read as the truth about the data. And that very instability is what ensembles turn into an advantage.",
}
