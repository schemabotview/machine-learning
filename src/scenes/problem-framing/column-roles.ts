import type { Scene } from '@graphlearning/flow'

// §3 — the order table with every column assigned exactly one role, and the code that splits it by
// role. The table carries the point; the code card shows the roles becoming three objects.
export const columnRoles: Scene = {
  id: 'column-roles',
  title: 'One role per column',
  flow: 'TB',
  nodes: [
    {
      id: 'roles',
      kind: 'table',
      label: 'orders — column roles',
      headers: ['column', 'role', 'why'],
      values: [
        ['order_id', 'metadata', 'identifies a row'],
        ['customer_id', 'metadata', 'defines groups'],
        ['placed_at', 'metadata', 'orders time, sets cutoff'],
        ['zone', 'feature', 'categorical, at checkout'],
        ['basket_items', 'feature', 'numeric, at checkout'],
        ['distance_km', 'feature', 'numeric, at checkout'],
        ['promise_min', 'feature', 'shown at checkout'],
        ['duration_min', 'target', 'observed at delivery'],
        ['late', 'target', 'duration > promise'],
      ],
    },
    {
      id: 'split',
      kind: 'code',
      filename: 'roles.py',
      label: `X = orders[["zone", "basket_items",
            "distance_km", "promise_min"]]
y = orders["duration_min"]      # or orders["late"]
meta = orders[["order_id", "customer_id",
               "placed_at"]]    # never a feature`,
    },
  ],
  edges: [{ source: 'roles', target: 'split', label: 'split by role' }],
}
