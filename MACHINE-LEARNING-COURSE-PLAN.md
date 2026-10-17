# Machine Learning — From Problem Formulation to Justified Model Choice

## Audience and prerequisites

For learners who can read basic Python functions, loops, collections, and array/table operations. The companion [Python plan](PYTHON-COURSE-PLAN.md) provides the programming baseline; short local array/data-frame examples supply notation without replacing a general data-analysis course.

Mathematical prerequisites come from [Linear Algebra](LINEAR-ALGEBRA-COURSE-PLAN.md), [Calculus and Optimisation](CALCULUS-AND-OPTIMISATION-COURSE-PLAN.md), and [Probability and Statistics](PROBABILITY-AND-STATISTICS-COURSE-PLAN.md): vector/matrix geometry and least squares; gradients and optimisation objectives; conditioning, expectation, sampling, estimation, and uncertainty. Refresh the specific ideas where used; do not assume learners need every specialist chapter of those courses before beginning ML.

Scope: Shared prediction foundations, supervised model mechanisms, selection/calibration, unsupervised representations/clusters/densities/anomalies, and responsible interpretation. Mathematics is a prerequisite; operational implementation is owned by MLOps and neural mechanisms by Deep Learning.

Target capability: formulate learning tasks, express illustrative end-to-end pipelines, explain representative algorithms, design valid comparisons, diagnose errors, and justify a model/use recommendation under explicit assumptions. Demonstrations support reasoning and application; they do not establish assessed individual mastery.

Structure: **12 chapters, 88 sections**, distributed **7, 8, 8, 7, 8, 8, 8, 6, 8, 6, 8, 6**. Counts reflect coherent learning milestones, not equal duration.

Reference approach: Python with NumPy/pandas notation and scikit-learn for illustrative classical workflows. Source documentation checked on **2026-10-13**; retrieved scikit-learn pages identify **1.9.1**. This is a documentation observation, not a pinned runtime or executed lesson environment. Exact versions, solver/default choices, seeds, and data/metric conventions must be verified when executable illustrations are developed.

## Learning spine

Problem, Data, and Prediction Contract → Generalisation, Evaluation, and Feature Pipelines → Regression, Classification, and Loss → Regularisation and Learning Behaviour → Local, Probabilistic, and Margin-Based Models → Trees and Ensembles → Selection, Diagnosis, and Calibrated Decisions → Dimensionality Reduction and Representation → Clustering and Density Models → Anomaly and Novelty Detection → Interpretation and Responsible Model Use → Integrated Modelling and Companion Handoff.

Progression rationale: A model-comparison chapter contrasts locality, probability assumptions, and margins using independently numbered sections. Trees/ensembles form a partition-based progression. Selection/calibration connect evidence to action. Unsupervised representation, grouping/density, and unusualness remain distinct milestones.

Recurring example: a fictional retailer predicts order delivery duration and late-delivery risk at checkout, using only features available then and a promised deadline defined then. State whether evaluation targets future orders, unseen customers, or both; these imply different split requirements. Maintain label maturity and temporal feature cutoffs. Use a separate as-of-date customer summary for clustering and a separately specified unusual-order task for anomaly detection. Two-dimensional synthetic datasets and short review texts expose mechanism and transfer.

Teaching method: question and assumptions → representation/objective → mechanism and worked trace → fitted-pipeline illustration → validation evidence → failure/trade-off → outcome → bridge. Include annotated code and expected outputs, geometric diagrams, loss calculations, preprocessing-state traces, counterexamples, and supplied comparison tables. Explain mechanisms and selection reasoning, not just API calls. State when quantities are training observations, validation evidence, or final evaluation. Running demonstrations is optional; no submitted exercises, assessments, learner monitoring, executable lessons, applications, or deployments are delivered.

Course ownership: Mathematical derivations belong to the relevant mathematics plan; probability/inference and experiment theory to Probability and Statistics; general predictive/discovery evaluation to Machine Learning; neural computations and training-state behaviour to Neural Networks and Deep Learning; operational contracts, delivery, monitoring, and retraining to ML Engineering and MLOps. A local refresher or domain-specific failure case is intentional overlap, not a second full treatment.

## Chapter 1 — Problem, Data, and Prediction Contract

Objective: Formulate an ML problem and explain when learning from data is appropriate. Construct a defensible modelling dataset with explicit availability, quality, and population boundaries.

1. Learning paradigms and rules/classical baselines
2. Prediction unit, target, decision, and prediction time
3. Feature/target/metadata representations
4. Label maturity, missing outcomes, and annotation quality
5. Sampling coverage, duplicates, groups, and timestamps
6. Privacy, data quality, and documented exclusions
7. Prediction versus causal intervention

Worked illustrations: Define checkout-duration and late-risk targets using a small availability-timestamped table; exclude post-delivery features and distinguish future-order from new-customer claims.

Outcome: Specify a prediction/discovery problem, distinguish learning paradigms, and explain the decision a model would support. Explain the relationship between problem, population, features, and labels, and identify dataset defects that invalidate modelling.

Bridge: The prediction contract determines the valid split and preparation boundary.

## Chapter 2 — Generalisation, Evaluation, and Feature Pipelines

Objective: Design model evaluation around the intended use and protect the evidence from leakage. Express train-only feature preparation and apply it consistently to unseen examples.

1. Training/validation/test roles and generalisation assumptions
2. Random/stratified, group, and temporal splits
3. Baseline construction and leakage diagnosis
4. Fit/transform/predict and fold-local learned state
5. Missing values and numeric scaling
6. Categorical/text representations and unseen inputs
7. Historical features, target encoding, and cross-fitting
8. Composite end-to-end pipelines

Worked illustrations: Trace one mixed-type pipeline within valid splits and contrast future-derived aggregates or global vocabulary/scaling with training-only fitting.

Outcome: Specify a split and baseline matched to a prediction claim, identify leakage, and distinguish fitting from model-selection evidence. Explain pipeline state, construct an illustrative preparation flow, and justify its behaviour for missing/new inputs without using validation/test information to fit it.

Bridge: A valid pipeline now supports first regression and classification models.

## Chapter 3 — Regression, Classification, and Loss

Objective: Explain regression mechanisms and match prediction targets to loss and evaluation choices. Explain classification predictions and evaluate discrimination and decisions separately.

1. Linear predictions, coefficients, and collinearity
2. Regression losses, residuals, and baseline-relative metrics
3. Basis/interaction features and extrapolation
4. Logistic/softmax models and likelihood losses
5. Scores, probabilities, labels, and confusion matrices
6. Precision/recall, ROC/PR, and averaging conventions
7. Probability losses, multiclass/multilabel distinctions
8. Imbalance, weighting, and train-only resampling

Worked illustrations: Calculate duration errors and a late-risk confusion matrix; distinguish full column rank from feature independence, ranking from probability quality, and log-target inversion from mean prediction.

Outcome: Explain a regression fit and its errors, select a metric aligned with the prediction goal, and recognise unsupported extrapolation or coefficient claims. Interpret scores and classification metrics, match them to the task, and distinguish ranking, probability quality, and decision quality.

Bridge: Initial losses expose the need to control fitting and generalisation.

## Chapter 4 — Regularisation and Learning Behaviour

Objective: Connect training objectives and optimisation to generalisation without conflating their roles.

1. Empirical risk, capacity, and generalisation
2. Ridge/lasso/elastic net and feature scaling
3. Correlated predictors and sparsity stability
4. Optimisation diagnostics using prerequisite gradient theory
5. Early stopping and validation boundaries
6. Learning curves and targeted under/overfit diagnosis
7. Numerical costs and valid complexity comparisons

Worked illustrations: Compare polynomial training/validation curves and an unstable correlated-feature L1 choice; a well-optimised training objective can still generalise poorly.

Outcome: Explain regularisation and fitting behaviour, diagnose basic optimisation/generalisation failures, and justify a complexity-control choice.

Bridge: Alternative model mechanisms offer different assumptions and costs.

## Chapter 5 — Local, Probabilistic, and Margin-Based Models

Objective: Explain neighbourhood models through geometry, representation, and computational costs. Explain classification by class-conditional models and assess its distribution assumptions. Explain large-margin learning and the trade-offs of implicit feature spaces.

1. Nearest-neighbour classification/regression
2. Distances, neighbourhood size, and dimensionality
3. Naive Bayes likelihood assumptions and smoothing
4. LDA/QDA covariance assumptions
5. Linear margins, hinge loss, and soft constraints
6. Kernel models, scaling, and nonlinear flexibility
7. Support-vector regression and prediction costs
8. Comparing assumptions, calibration, and resource trade-offs

Worked illustrations: Trace a neighbour vote, smoothed text-class likelihood, and soft-margin boundary on contrasting datasets; scores and vote fractions are not automatically calibrated probabilities.

Outcome: Trace a neighbourhood prediction and justify distance, scaling, and complexity choices for a stated dataset. Explain generative classification mechanisms, compare their assumptions, and recognise prior/covariance or calibration failures. Explain margin/kernel mechanisms and compare representation, tuning, and cost trade-offs.

Bridge: Trees replace global/local geometric rules with conditional partitions.

## Chapter 6 — Trees and Ensembles

Objective: Explain tree construction, predictions, and complexity control. Explain how ensemble construction changes learning behaviour and when combination adds value.

1. Recursive splits, impurity/loss, and leaf prediction
2. Depth, leaf size, pruning, and instability
3. Bootstrap aggregation and random forests
4. Boosting as sequential loss reduction
5. Learning rate, tree complexity, and early stopping
6. Voting/averaging and out-of-fold stacking
7. Importance biases and implementation-specific missing/category support
8. Evaluation, calibration, memory, and latency trade-offs

Worked illustrations: Calculate one tree split and boosting correction, then draw out-of-fold stacking. Out-of-bag evidence does not automatically respect grouped/time deployment claims.

Outcome: Trace tree fitting/prediction, explain complexity controls, and recognise instability and misleading importance claims. Explain representative ensemble mechanisms and justify their construction and evaluation under explicit assumptions.

Bridge: More candidates require disciplined selection and decision validation.

## Chapter 7 — Selection, Diagnosis, and Calibrated Decisions

Objective: Compare full modelling procedures while accounting for tuning, selection bias, and uncertainty. Connect model outputs to decisions while stating the limits of uncertainty estimates.

1. Valid cross-validation and joint pipeline search
2. Declared budgets, feature selection, and ablation
3. Nested evaluation and protected final tests
4. Learning curves, error slices, and score variability
5. Reliability diagrams and separate calibration fitting
6. Validation-based cost/capacity thresholds
7. Predictive quantiles, abstention, and coverage limitations
8. Final refit and transparent recommendation

Worked illustrations: Compare pipelines on identical valid splits; distinguish selected CV scores from performance estimates and dependent fold variation from a confidence interval. Trace calibration and threshold fitting without touching the test.

Outcome: Specify a valid model-selection workflow, diagnose errors from evidence, and report what performance estimates do and do not establish. Explain calibration and decision trade-offs, design a leakage-aware threshold workflow, and distinguish bounded uncertainty evidence from guarantees.

Bridge: Unsupervised representations optimise a different question about inputs.

## Chapter 8 — Dimensionality Reduction and Representation

Objective: Explain what a lower-dimensional representation preserves and what its use may discard.

1. Selection versus extraction and representation objectives
2. Centred PCA/SVD and component scores
3. Scaling, explained variance, and reconstruction
4. Sparse truncated SVD and nonnegative factors
5. Visual embeddings and distorted distances
6. Fold-local reduction and downstream validation

Worked illustrations: Contrast high-variance reconstruction with preservation of a predictive low-variance feature; use Linear Algebra for derivations and avoid treating embedding separation as class truth.

Outcome: Interpret a representation's objective and trade-offs and justify its evaluation without leaking held-out information.

Bridge: Representation and distance choices determine discovered groups and densities.

## Chapter 9 — Clustering and Density Models

Objective: Compare clustering mechanisms and assess usefulness without treating every partition as a natural truth. Explain density-based modelling, latent memberships, and their evaluation limits.

1. Cluster definitions, distance, and feature scaling
2. k-means assignment/update and initialisation
3. Hierarchical linkage and dendrograms
4. DBSCAN-style density clusters and noise
5. Internal metrics, stability, and domain validation
6. Mixture densities, soft memberships, and EM
7. KDE bandwidth and held-out density reasoning
8. Local solutions, component counts, and new-data assignment

Worked illustrations: Trace k-means and mixture responsibilities on a small customer summary; contrast elongated clusters, covariance collapse, and semantically meaningless partitions despite improved fit.

Outcome: Explain representative clustering mechanisms, compare their assumptions, and assess a partition using geometry, stability, and domain evidence. Explain density/mixture objectives and EM behaviour, identify failure modes, and compare model fit without assuming semantic truth.

Bridge: Unusualness requires its own reference population and evaluation.

## Chapter 10 — Anomaly and Novelty Detection

Objective: Define unusualness operationally and compare detection mechanisms without equating anomalies with wrongdoing.

1. Reference population and unusualness contract
2. Training outliers versus new-data novelty
3. Local-density and isolation mechanisms
4. One-class margin and covariance assumptions
5. Score/threshold conventions and alert budgets
6. Scarce labels, subgroup structure, and shift evaluation

Worked illustrations: Compare legitimate rare orders with corrupt records; preserve LOF training/new-data semantics and avoid equating anomaly scores with fraud.

Outcome: Explain an anomaly task and detector assumptions and justify a bounded evaluation/alert policy.

Bridge: Explanations must account for model and metric assumptions and responsible use.

## Chapter 11 — Interpretation and Responsible Model Use

Objective: Explain model behaviour using suitable inspection methods and recognise when explanations mislead. Evaluate model use in context, including population coverage, error distribution, and human decisions.

1. Global/local interpretation questions
2. Coefficients, correlations, and model-specific importance
3. Held-out permutation importance and dependence plots
4. Explanation stability and noncausal limitations
5. Subgroup error, uncertainty, and bias sources
6. Sensitive proxies, privacy, and context-dependent fairness
7. Human review, interventions, and feedback loops
8. Documentation and use boundaries

Worked illustrations: Contrast correlated-feature importance and implausible dependence-plot combinations; report subgroup denominators and show how an intervention changes future labels.

Outcome: Select an inspection method for a stated question, interpret its scope, and identify unstable or unsupported explanations. Explain important responsible-use risks, assess uneven error evidence, and document limitations without claiming a universal fairness or legal-compliance guarantee.

Bridge: Combine the modelling evidence and specify the engineering handoff.

## Chapter 12 — Integrated Modelling and Companion Handoff

Objective: Synthesize a justified modelling recommendation and specify its inference and evaluation contract for the engineering course.

1. Task/data/split/baseline manifest
2. Reproducible model/pipeline comparison
3. Accuracy–resource trade-offs and decision policy
4. Final test evidence and documented limitations
5. Inference/preprocessing contract for engineering
6. Separate validation of supervised and discovery tasks

Worked illustrations: Present a checkout prediction comparison and separate clustering recommendation. Specify required inference inputs and artefacts; implementation of persistence, serving, monitoring, and retraining belongs in MLOps.

Outcome: Justify a supervised or discovery recommendation from valid evidence and identify the inputs, artefacts, and unresolved limitations needed for handoff.

Bridge: Continue with unfamiliar examples and reasoned implementation practice; use the companion courses for the named specialist and operational depth.

## Sources and scope

The [scikit-learn user guide](https://scikit-learn.org/stable/user_guide.html) and selected conceptual sections provide the implementation-oriented baseline, particularly [leakage/pitfalls](https://scikit-learn.org/stable/common_pitfalls.html), [pipelines](https://scikit-learn.org/stable/modules/compose.html), [evaluation](https://scikit-learn.org/stable/modules/model_evaluation.html), [cross-validation](https://scikit-learn.org/stable/modules/cross_validation.html), and the individual supervised/unsupervised family guides. Inspection covers selected explanation, mechanism, assumption, and example material, not every API, example, or estimator implementation.

James, Witten, Hastie, Tibshirani, and Taylor's [An Introduction to Statistical Learning with Applications in Python (2023)](https://www.statlearning.com/) was inspected through the author site's audience/topic descriptions; the linked full PDF was inaccessible. Murphy's [Probabilistic Machine Learning: An Introduction (MIT Press, 2022)](https://probml.github.io/pml-book/book1.html) was compared through the author site and [detailed contents](https://probml.github.io/pml-book/toc1.pdf); its preface could not be retrieved. These are bounded book comparisons, not full-book study. The accessible statistical exposition of ISLP and Murphy's probabilistic breadth inform scope while evaluation/pipelines come earlier in this teaching sequence.

Selected scikit-learn [calibration](https://scikit-learn.org/stable/modules/calibration.html), [threshold](https://scikit-learn.org/stable/modules/classification_threshold.html), [permutation-importance](https://scikit-learn.org/stable/modules/permutation_importance.html), [partial-dependence](https://scikit-learn.org/stable/modules/partial_dependence.html), and [persistence](https://scikit-learn.org/stable/model_persistence.html) guidance supports applied reasoning. Google's [fairness](https://developers.google.com/machine-learning/crash-course/fairness) and [production-system](https://developers.google.com/machine-learning/crash-course/production-ml-systems) overviews inform use boundaries. Detailed sources, coverage, inspection limits, and review status remain in [README.md](../README.md).

Intentional exclusions: detailed neural networks/backpropagation/architectures; generative AI; reinforcement learning; specialist NLP/vision, forecasting, survival models, recommendation/ranking, and causal inference; advanced Bayesian/graphical and Gaussian-process models; formal learning-theory proofs; formal conformal guarantees; advanced semi/self-supervised methods; distributed training and production infrastructure implementation. Basic text features and visual embeddings remain bounded illustrations. Splines/GAM surveys, local-attribution algorithms, advanced search-resource methods, and operational implementation are deferred or owned by companion courses.

Intentional overlap: regression/likelihood and uncertainty are developed statistically in Probability and Statistics; projections/PCA in Linear Algebra; fitting objectives and numerical methods in Calculus and Optimisation. Here those foundations are used to make valid predictive and discovery choices. Deep learning and MLOps orientation connects the collection while leaving specialist depth in those companion concepts.


Scope refinement checked on **2026-10-14**: Advanced search heuristics, splines/GAM surveys, random-projection theory, spectral-clustering variants, local-attribution algorithms, and detailed operational persistence/monitoring/retraining are deferred or moved to their owner course. Keep the mechanism, assumptions, and failure cases of representative supervised and unsupervised methods. Earlier source inspections are retained as research evidence, including sources for topics now deferred; a retained citation does not imply core coverage.
