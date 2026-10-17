import type { Scene } from '@graphlearning/flow'

// §8 — the whole chapter as one object: column-wise preparation and a model inside a single
// pipeline, so one fit call fits every learned state on train, and predict reuses all of it.
export const compositePipeline: Scene = {
  id: 'composite-pipeline',
  title: 'One pipeline, one fit',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'pipeline.py',
      label: `num = make_pipeline(SimpleImputer(strategy="median"),
                    StandardScaler())
pre = ColumnTransformer([
    ("num", num, ["distance_km", "basket_items"]),
    ("cat", OneHotEncoder(handle_unknown="ignore"),
            ["zone"]),
])
model = make_pipeline(pre, LinearRegression())

model.fit(X_train, y_train)    # every step: train only
pred = model.predict(X_val)    # every step: reused
mae = mean_absolute_error(y_val, pred)`,
    },
    {
      id: 'graph',
      label: 'Pipeline',
      pattern: 'group',
      flow: 'LR',
      children: [
        { id: 'raw', label: 'Raw columns', sub: 'mixed types', pattern: 'storage', icon: 'table' },
        {
          id: 'columns',
          label: 'ColumnTransformer',
          pattern: 'group',
          cols: 1,
          children: [
            { id: 'numeric', label: 'Numeric', sub: 'median → scale', pattern: 'service', icon: 'sigma' },
            { id: 'categorical', label: 'Categorical', sub: 'one-hot, ignore new', pattern: 'network', icon: 'tag' },
          ],
        },
        { id: 'model', label: 'Linear model', sub: 'scored: validation MAE', pattern: 'user', icon: 'brain' },
      ],
      edges: [
        { source: 'raw', target: 'columns' },
        { source: 'columns', target: 'model' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'graph', label: 'builds' }],
}
