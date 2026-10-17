import type { Scene } from '@graphlearning/flow'

// §2 — six validation orders. Residual = actual − predicted. MAE = 62 / 6 = 10.3; MSE = 1728 / 6
// = 288, RMSE = 17.0; the median-prediction baseline (52 min) has MAE 117 / 6 = 19.5, so skill
// = 1 − 10.3 / 19.5 = 0.47. One 40-minute miss is most of the RMSE.
export const residuals: Scene = {
  id: 'residuals',
  title: 'Errors, squared or not',
  flow: 'TB',
  nodes: [
    {
      id: 'rows',
      kind: 'table',
      label: 'Validation orders (minutes)',
      headers: ['actual', 'predicted', 'residual', '|res|', 'res²'],
      values: [
        ['42', '45', '−3', '3', '9'],
        ['55', '50', '5', '5', '25'],
        ['38', '40', '−2', '2', '4'],
        ['71', '62', '9', '9', '81'],
        ['49', '52', '−3', '3', '9'],
        ['120', '80', '40', '40', '1600'],
      ],
    },
    {
      id: 'metrics',
      label: 'Validation evidence',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'mae', label: 'MAE 10.3', sub: 'mean |residual|', pattern: 'service', icon: 'ruler' },
        { id: 'rmse', label: 'RMSE 17.0', sub: 'one miss dominates', pattern: 'warn', icon: 'zap' },
        { id: 'baseline', label: 'Baseline 19.5', sub: 'MAE of the median', pattern: 'external', icon: 'sigma' },
        { id: 'skill', label: 'Skill 0.47', sub: '1 − MAE / baseline', pattern: 'user', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'rows', target: 'metrics', label: 'summarise' }],
}
