# Machine Learning — Topic Plan

Each topic maps to one `.ipynb` notebook + one `.tts` audio script.

> Neural networks, deep learning, and NLP are covered in a separate repo.

---

## Part 1: Foundations

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 01 | What is Machine Learning? | `01-what-is-machine-learning.ipynb` | Types of ML, when to use ML, real-world examples |
| 02 | The ML Workflow | `02-the-ml-workflow.ipynb` | Problem → data → model → evaluate → deploy cycle |
| 03 | Math Foundations — Linear Algebra | `03-math-linear-algebra.ipynb` | Vectors, matrices, dot product, matrix multiplication |
| 04 | Math Foundations — Calculus & Probability | `04-math-calculus-probability.ipynb` | Derivatives, chain rule, probability, distributions |
| 05 | Python for ML — NumPy & Pandas | `05-python-numpy-pandas.ipynb` | Arrays, DataFrames, vectorized ops — practical primer |

---

## Part 2: Data Preparation

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 06 | Exploratory Data Analysis (EDA) | `06-exploratory-data-analysis.ipynb` | Distributions, correlations, missing values, visualizations |
| 07 | Data Cleaning | `07-data-cleaning.ipynb` | Handling nulls, outliers, duplicates, data types |
| 08 | Feature Engineering | `08-feature-engineering.ipynb` | Encoding, scaling, binning, interaction features |
| 09 | Feature Selection | `09-feature-selection.ipynb` | Filter, wrapper, embedded methods; reducing dimensionality |
| 10 | Train/Test Split & Cross-Validation | `10-train-test-split-cross-validation.ipynb` | Holdout, k-fold, stratified split, data leakage pitfalls |

---

## Part 3: Supervised Learning — Regression

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 11 | Linear Regression | `11-linear-regression.ipynb` | OLS, gradient descent, assumptions, R² |
| 12 | Polynomial & Regularized Regression | `12-polynomial-regularized-regression.ipynb` | Ridge, Lasso, ElasticNet, overfitting |
| 13 | Bias-Variance Tradeoff | `13-bias-variance-tradeoff.ipynb` | Underfitting vs overfitting, the curve, practical intuition |

---

## Part 4: Supervised Learning — Classification

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 14 | Logistic Regression | `14-logistic-regression.ipynb` | Sigmoid, decision boundary, log loss |
| 15 | K-Nearest Neighbors (KNN) | `15-k-nearest-neighbors.ipynb` | Distance metrics, choosing K, curse of dimensionality |
| 16 | Naive Bayes | `16-naive-bayes.ipynb` | Bayes theorem, conditional independence, text classification |
| 17 | Support Vector Machines (SVM) | `17-support-vector-machines.ipynb` | Hyperplane, margin, kernel trick |
| 18 | Decision Trees | `18-decision-trees.ipynb` | Gini, entropy, splits, pruning, visualization |

---

## Part 5: Model Evaluation

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 19 | Classification Metrics | `19-classification-metrics.ipynb` | Accuracy, precision, recall, F1, ROC-AUC, confusion matrix |
| 20 | Regression Metrics | `20-regression-metrics.ipynb` | MAE, MSE, RMSE, R², when to use which |
| 21 | Hyperparameter Tuning | `21-hyperparameter-tuning.ipynb` | Grid search, random search, early stopping |

---

## Part 6: Ensemble Methods

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 22 | Bagging & Random Forests | `22-bagging-random-forests.ipynb` | Bootstrap aggregation, feature importance |
| 23 | Boosting — AdaBoost & Gradient Boosting | `23-boosting-adaboost-gradient-boosting.ipynb` | Sequential learners, loss minimization |
| 24 | XGBoost & LightGBM | `24-xgboost-lightgbm.ipynb` | Tree boosting at scale, practical tuning |
| 25 | Stacking & Voting | `25-stacking-voting.ipynb` | Meta-learners, combining diverse models |

---

## Part 7: Unsupervised Learning

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 26 | K-Means Clustering | `26-k-means-clustering.ipynb` | Centroids, inertia, elbow method, limitations |
| 27 | Hierarchical Clustering | `27-hierarchical-clustering.ipynb` | Dendrograms, linkage methods |
| 28 | DBSCAN | `28-dbscan.ipynb` | Density-based, noise points, no k required |
| 29 | Principal Component Analysis (PCA) | `29-pca.ipynb` | Variance explained, projections, dimensionality reduction |
| 30 | t-SNE & UMAP | `30-tsne-umap.ipynb` | High-dim visualization, when to use each |

---

## Part 8: End-to-End ML & Deployment

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 31 | End-to-End ML Project — Loan Default Prediction | `31-end-to-end-loan-default.ipynb` | Full pipeline: EDA → features → model → eval (Fintech Bank) |
| 32 | Pipelines with scikit-learn | `32-sklearn-pipelines.ipynb` | ColumnTransformer, Pipeline, avoiding leakage |
| 33 | Saving & Loading Models | `33-saving-loading-models.ipynb` | joblib, pickle, ONNX |
| 34 | Deploying ML Models to Production | `34-deploying-ml-models.ipynb` | Flask/FastAPI serving, Docker basics, REST endpoints |

---

## Part 9: Where to Go Next

| # | Topic | Notebook | Notes |
|---|-------|----------|-------|
| 35 | Where to Go Next — Deep Learning, NLP & Certifications | `35-where-to-go-next.ipynb` | Pointer to deep-learning repo, NLP repo; certification roadmap |

---

**Total: 35 topics**
