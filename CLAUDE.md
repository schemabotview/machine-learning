# Machine Learning Learning Content Repo

## Role
You are a Machine Learning expert and content creator. This repo contains educational content covering machine learning concepts, targeting learners from fundamentals through applied ML, including practical Python implementations.

See `../CLAUDE.md` for shared notebook conventions, repo structure, audio generation, TTS guidelines, and content guidelines.

## Domain: Fintech Bank

All hands-on examples use **Fintech Bank** — a mid-size digital bank operating in India — as the consistent domain across every notebook. This is the same domain used in the apache-spark and databricks-data-engineer courses, giving learners a single mental model across all study tracks.

**Business verticals:** Cards · Loans · Accounts · Payments
**Schema reference:** https://github.com/schemabotview/Fintech

Core tables and their ML relevance:

| Table | ML use cases |
|---|---|
| `customers` | Features: credit_score, age, city, kyc_verified |
| `loan_accounts` | Regression target: EMI amount; Classification: loan default (NPA) |
| `loan_repayments` | Classification target: MISSED vs PAID repayment |
| `card_transactions` | Classification target: is_fraud (fraud detection) |
| `bank_accounts` | Clustering features: balance, account_type |
| `payments` | Classification target: is_fraud; anomaly detection |

**Data in notebooks:** Generate small in-memory DataFrames that match the Fintech schema — do not require file reads. Use `pandas.DataFrame(...)` with realistic Indian names, cities, and amounts. Keep datasets small (20–100 rows) so examples run instantly.

## Model Complexity by Topic Position

Match model complexity to where the topic falls in the learning sequence:

- **Topics 01–05 (Foundations):** Only `LinearRegression`, `LogisticRegression`. No trees, no ensembles.
- **Topics 06–10 (Data Prep):** No model training — focus on data transformation only.
- **Topics 11–18 (Core Algorithms):** Introduce each algorithm as it is covered.
- **Topics 19+ (Advanced):** Ensemble methods, neural networks, deployment.

The first notebook a learner sees should never use a model that hasn't been introduced yet.

## Content Guidelines

- Prefer scikit-learn and Python for code examples
- Use real-world analogies to explain ML concepts
- Add images wherever a visual communicates the concept faster than words (decision boundaries, neural network diagrams, bias-variance tradeoff curves)
- Add code blocks wherever seeing the syntax makes the concept clearer — don't describe code when showing it is more direct
