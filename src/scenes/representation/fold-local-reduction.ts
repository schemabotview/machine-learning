import type { Scene } from '@graphlearning/flow'

// §6 — PCA inside the pipeline, with the number of components chosen by downstream validation MAE
// (illustrative). The rush-hour flag has little variance but much signal; it lives in a late
// component, so cutting at "80 % variance" throws it away.
export const foldLocalReduction: Scene = {
  id: 'fold-local-reduction',
  title: 'Judge a reduction by the task',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'reduce_then_fit.py',
      label: `pipe = make_pipeline(StandardScaler(), PCA(), Ridge())
search = GridSearchCV(pipe, {"pca__n_components": [2, 3, 5, 8]},
                      cv=TimeSeriesSplit(5),
                      scoring="neg_mean_absolute_error")
search.fit(X_dev, y_dev)     # PCA refitted inside every fold`,
    },
    {
      id: 'results',
      kind: 'table',
      label: 'Components kept vs CV MAE',
      headers: ['components', 'variance kept', 'CV MAE', 'rush-hour signal'],
      values: [
        ['2', '67 %', '11.4 min', 'mostly lost'],
        ['3', '79 %', '10.9 min', 'mostly lost'],
        ['5', '93 %', '9.8 min', 'partly kept'],
        ['8 (no reduction)', '100 %', '9.0 min', 'kept'],
      ],
    },
  ],
  edges: [{ source: 'code', target: 'results', label: 'scored downstream' }],
}
