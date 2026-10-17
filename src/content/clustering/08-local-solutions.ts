import type { Section } from '../types'

export const localSolutions: Section = {
  id: 'local-solutions',
  title: 'Local solutions, component counts and new data',
  scene: 'local-solutions',
  focus: 'restarts',
  slide: `## Local solutions and new customers

k-means and EM only find a **local** best, and not every method can score a customer it has not seen.

### Restarts, computed
- Ten random starts on the same customers, each run to convergence
- Best inertia **6.6**; **3 of 10** starts stall in a worse solution, up to 43.4
- Run several starts and keep the best — \`n_init\` does this

### Mixtures can collapse
- A component can shrink onto **one point**, its likelihood heading to infinity
- Regularise the covariance (\`reg_covar\`) and compare counts by **BIC** or held-out likelihood

### New customers
- k-means and mixtures can **predict** an assignment for a new customer
- DBSCAN and agglomerative clustering have **no predict**: refit, or train a classifier`,
  narration:
    "Two practical problems remain. The first is that k-means and EM only find a local best, a solution that no single step can improve, which is not necessarily the best one. The table, computed on our customers, runs k-means from ten random starts and lets each converge. The best reaches an inertia of six point six. Three of the ten stall in clearly worse solutions, the worst at forty-three point four, typically with two centroids sharing one group while another group is split. The remedy is simple: run several starts and keep the best, which is what the n init setting does. Mixtures have an extra failure. A component can shrink onto a single customer, its variance heading toward zero and its likelihood toward infinity, which looks like a superb fit and is meaningless. A small covariance regularisation prevents it, and the number of components is compared with a penalised criterion such as BIC, or with held-out likelihood. The second problem is new customers. k-means and mixtures can assign a new customer directly. DBSCAN and agglomerative clustering in scikit-learn have no predict method, so you refit, or train a classifier on the cluster labels.",
}
