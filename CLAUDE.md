# CLAUDE.md — machine-learning

The GraphL concept app for **Machine Learning**, served at `graphl.in/machine-learning/`. Scaffolded
from `schemabotview/content-repo-template`. The workspace-level `CLAUDE.md` holds the invariants that
span every repo; this file is only what is true *here*.

## What this repo is

One concept, 12 courses, 88 sections. A **section** is `(scene, slide, narration)` and is one segment
of the course video. One section = one slide. The syllabus is `MACHINE-LEARNING-COURSE-PLAN.md` —
it is the source of scope, ordering and ownership; authoring follows it, not the other way round.

The render engine is `@graphlearning/flow`; the app shell is `@graphlearning/shell`. Both are
**published packages pinned by version** (`flow@^1.2.0`, `shell@^0.8.0`). This repo's own surface is
`src/content/`, `src/scenes/`, `src/main.tsx` and `src/theme.css` — nothing else.

## Route contract and course ids

Routes are `#/<courseId>-<sectionId>`; `#/` is the catalog. Course ids are fixed — they are route
prefixes, audio folders (`public/audio/<courseId>/`) and `scripts/titles.json` keys:

| ch | course id | title | sections |
| --- | --- | --- | --- |
| 1 | `problem-framing` | Problem, Data, and Prediction Contract | 7 |
| 2 | `evaluation` | Generalisation, Evaluation, and Feature Pipelines | 8 |
| 3 | `regression-classification` | Regression, Classification, and Loss | 8 |
| 4 | `regularisation` | Regularisation and Learning Behaviour | 7 |
| 5 | `model-families` | Local, Probabilistic, and Margin-Based Models | 8 |
| 6 | `trees-ensembles` | Trees and Ensembles | 8 |
| 7 | `selection` | Selection, Diagnosis, and Calibrated Decisions | 8 |
| 8 | `representation` | Dimensionality Reduction and Representation | 6 |
| 9 | `clustering` | Clustering and Density Models | 8 |
| 10 | `anomaly` | Anomaly and Novelty Detection | 6 |
| 11 | `responsible-use` | Interpretation and Responsible Model Use | 8 |
| 12 | `capstone` | Integrated Modelling and Companion Handoff | 6 |

## Course conventions

- **One recurring example**: a fictional retailer predicting delivery duration and late-delivery
  risk *at checkout*. Every feature must be available at checkout; say whether a claim is about
  future orders, unseen customers, or both. Ch 9 uses an as-of-date customer summary; ch 10 a
  separately specified unusual-order task. Small 2-D synthetic sets and short review texts carry
  mechanism.
- **Label the evidence**: a number on screen is a training observation, validation evidence, or a
  final-test result — the slide says which.
- **Ownership**: derivations defer to the maths courses, neural mechanisms to Deep Learning,
  persistence/serving/monitoring to MLOps. A local refresher is fine; a second full treatment is not.
- **Scene shape by point being made**: `kind: 'plot'` (with `equal: true` wherever distance is the
  content — boundaries, margins, k-means, PCA) for geometry and curves; `kind: 'table'` for
  feature tables, confusion matrices and comparison grids; `kind: 'code'` for scikit-learn
  pipelines; containers + edges for data flow (split → fit → transform → predict). Numbers in plot
  data are illustrative and must be internally consistent (a computed split gain matches its table).

## Scene inventory

Each course adds a `src/scenes/<courseId>/` bundle; list its scenes here as it lands.

| course | scene id | shape | used by |
| --- | --- | --- | --- |
| `problem-framing` | `paradigms` | source card → 3 containers × 4 leaves | §1 |
| | `prediction-contract` | TB timeline container ⟶ table | §2 |
| | `column-roles` | table → code card | §3 |
| | `label-maturity` | plot (maturity curve + cutoff) over 3-leaf container | §4 |
| | `sample-checks` | table → 2×2 container | §5 |
| | `exclusion-log` | running-total table → 2×3 container | §6 |
| | `prediction-vs-cause` | 2-leaf container → nested confounding graph | §7 |
| `evaluation` | `split-roles` | source card → 3 containers × 4 leaves | §1 |
|  | `split-strategies` | scatter plot (group + time cuts) over table | §2 |
|  | `leakage-audit` | evolution (validation MAE) over audit table | §3 |
|  | `fold-state` | TB fit→transform container ⟶ code card | §4 |
|  | `impute-scale` | table → 2×2 container | §5 |
|  | `unseen-inputs` | code card → two tables | §6 |
|  | `history-features` | 3-leaf container → table → code card | §7 |
|  | `composite-pipeline` | code card → nested pipeline container | §8 |
| `regression-classification` | `linear-fit` | scatter + fitted line over coefficient table | §1 |
|  | `residuals` | residual table → 2×2 metric container | §2 |
|  | `extrapolation` | plot (cubic fit + extrapolation) over 3-leaf container | §3 |
|  | `logistic` | plot (sigmoid + labelled orders) over log-loss table | §4 |
|  | `confusion` | 2×2 chain container → confusion table → 3-leaf container | §5 |
|  | `curves` | container of ROC + PR plots → 3-leaf container | §6 |
|  | `probability-quality` | comparison table → container of two nested containers | §7 |
|  | `imbalance` | code card → table → 3-leaf container | §8 |
| `regularisation` | `capacity` | plot (train vs validation by degree) over 3-leaf container | §1 |
|  | `penalty-paths` | stacked ridge + lasso path plots ⟶ code card | §2 |
|  | `sparsity-stability` | scatter (twin features) over bootstrap table | §3 |
|  | `optimisation` | plot (three loss traces) over 3-leaf container | §4 |
|  | `early-stopping` | plot (train vs inner split) over 3-leaf container | §5 |
|  | `learning-curves` | stacked bias + variance plots ⟶ 3-leaf column | §6 |
|  | `complexity-costs` | cost table → 2×2 container | §7 |
| `model-families` | `knn` | equal-axis scatter + k-circle over computed neighbour table | §1 |
|  | `distance-k` | plot (error vs k) over 3-leaf container | §2 |
|  | `naive-bayes` | likelihood table → arithmetic code card | §3 |
|  | `lda-qda` | scatter + LDA line + QDA ellipse over table | §4 |
|  | `margins` | scatter + margins + computed support vectors over C table | §5 |
|  | `kernels` | ring data + RBF circle over gamma table | §6 |
|  | `svr` | scatter + ε-tube over memory table | §7 |
|  | `compare-families` | family table → 2×3 container | §8 |
| `trees-ensembles` | `tree-split` | split table → depth-2 tree of cards | §1 |
|  | `tree-complexity` | plot (log loss vs depth) over resample table | §2 |
|  | `forest` | source card → 3 trees → average → seed table | §3 |
|  | `boosting` | one-round table → 2×2 container | §4 |
|  | `learning-rate` | plot (two learning rates) over code card | §5 |
|  | `stacking` | 2×2 base models → out-of-fold table → meta card | §6 |
|  | `importance` | importance table → 2×2 container | §7 |
|  | `tree-tradeoffs` | candidate table → 2×2 container | §8 |
| `selection` | `cv-search` | search code card → fold-score table | §1 |
|  | `ablation` | ablation table → 2×2 container | §2 |
|  | `nested` | 2-leaf loop container → outer-fold table → locked card | §3 |
|  | `slices` | paired fold plot over slice table | §4 |
|  | `calibration` | reliability plot over 3-leaf container | §5 |
|  | `thresholds` | cost-curve plot over computed count table | §6 |
|  | `intervals` | quantile-band plot over coverage table | §7 |
|  | `recommendation` | 2×2 sequence container → record table | §8 |

## Invariants — do not break

- **Never write `x` or `y`.** Scenes are declarative: nodes, edges, nesting. `computeLayout` is not
  exported, so there is no way around this, and that is the point — reproducible frames.
- **Do not reimplement the shell.** `SectionView`, `CourseIndex`, `SlidePanel` and the hooks are
  withheld on purpose. The route contract (`#/<courseId>-<sectionId>`, `?capture=1`,
  `window.__scene.plan()`) is what every recorder drives, and it holds only if every repo composes
  the pieces identically.
- **`SiteHeader` goes on the catalog page only** — never on a section. A section is a video frame.
- **Three stylesheets, in cascade order**, imported in `main.tsx`. The order is load-bearing:
  1. `@graphlearning/flow/styles.css` — react-flow plus the IBM Plex faces the engine is
     *calibrated* to. `codeMetrics` sizes code nodes from a measured 9.02px glyph advance, so a
     different monospace face mis-sizes every code card. Carries the `.tok-*` colours.
  2. `@graphlearning/shell/styles.css` — the shell paints the canvas (`--bg: #1a1d23`; SceneView
     draws its dots at `#2a2f38` assuming a dark surface).
  3. `./theme.css` — this repo's three brand tokens. **Last, or the brand loses to the defaults.**
- **`file:../ui-flow` / `file:../ui-shell` must never be committed.** Local engine work only; CI has
  no sibling checkout.
- **Narration is never hand-produced.** `.tts` → `.wav` via Colab + Chatterbox only.

## Layout rules the frames actually care about

`npm run check` (`scripts/check-content.mjs`) models four silent failures — each builds green and
breaks only on screen. Its comments carry the measured constants; the short version:

- **Leaf cards are a fixed 210×96** with a ~134px text column. Only containers grow to fit. Keep the
  `label` to 2 wrapped lines; 2 label lines + 2 sub lines fits. Watch unbreakable tokens — `_`, `.`
  and `/` are **not** break opportunities in CSS, so `snake_case` and paths overflow sideways in a
  way the height model cannot see.
- **Slides do not scale to fit.** Type size is fixed by the frame (`zoom = paneWidth / 806`,
  width-proportional only), so an over-long slide **clips at the bottom** with no error.
  `check` fails over 1000 modelled design px; the band below gives the floor too. Bullets cost far
  more than prose of the same length.
- **A `focus:` that names no node in its scene is a silent no-op** — nothing lights up.
- **`icon:` names are NOT guarded.** The engine's lucide registry is `Record<string, LucideIcon>`
  and does not enumerate its keys, so a wrong name type-checks, passes `check`, builds, and renders
  a card with no glyph. There are ~75 valid keys; copy one off an existing scene rather than
  guessing a lucide name (`volume`, `move`, `maximize` and `git` are all absent, for instance).
- **A section with no wav narrates silence** and records a silent segment. Audio resolves purely by
  convention: `public/audio/<course>/<section-id>.wav`.

What `check` does *not* model: an edge label landing on top of a card, or whether the frame is too
empty. Look at the route.

### Density targets — the frame must use the space it has

The guarded failure is a slide that overflows. The unguarded one is its opposite: a frame that
builds green, reads correctly, and leaves half its pane empty. Against the ~1080 design px pane:

| | target | why |
| --- | --- | --- |
| slide height | **80–95 %** of the pane (≈ 865–1025px; `SLIDE_H_MAX` caps the top at 1000) | below 80 % the right half looks empty; above ~95 % it risks clipping |
| scene, binding axis | ≥ 0.85 of the pane | the board should reach the edge it is limited by |
| scene, area | ≥ 0.55 of the pane (w × h) | a wide board that fills the width but a third of the height wastes the pane |
| eyebrow | no node under the top-left eyebrow label | boards that bind on height run up to y≈30 |

**Measure it**: with `npm run dev` running, `npm run density [-- <courseId>] [--strict]` drives every
route in capture mode at 1920×1080 and prints slide / binding-axis / area ratios with flags, plus a
screenshot per route in `.tmp/density/`. `npm run check` also *warns* (does not fail) on a slide
modelled under 865px. Rendered slide height runs ~0.95–1.0× the modelled figure — author to
~920–990 modelled to land at 85–92 % on screen.

Levers: **add real content, not padding**; **restack** a board toward the pane's ~1:1 aspect; lower
scene `padding` to 0.04 for boards that float, **raise** it for tall boards that touch the eyebrow —
the engine default is already ~0.12, so 0.12 is a no-op here; 0.17 is the value that moves a board.

Learned on chapter 1: an edge into a nested container's *card* is drawn across that container's
header — target the container instead. A wide board (one long LR row) loses area; restack it into
columns. Tables render small, so give them a companion node rather than standing alone.

Learned on chapters 2–5: author slides to ~950–990 modelled from the first draft — rendered height
runs 0.88–1.0× the model (lower for bold- and symbol-heavy slides), and the 1000 cap is a hard
failure, so trim with one-line bullets rather than dropping a block. Prefer TB stacks: a code card or
table beside a tall stack shrinks to illegible. For an equal-axis plot that binds on height, widen its
x-range rather than lowering padding (lower padding pushes it under the eyebrow). Plot geometry that
a slide quotes (neighbours, support vectors, tube violations) is COMPUTED in the scene file from the
seeded points in `src/scenes/points.ts`, never typed in, so slide and frame cannot disagree.

These are read off the rendered route by eye — `check` models no density at all. The two ratios come
from one repo's ~80 frames of diagram-and-code-card boards, so a deliberately sparse board can sit
under them. Targets, not thresholds.

## Guards before handing over

```sh
npm run build && npx tsc --noEmit && npm run check
```

All three are a **floor, not proof** — they pass on frames that are visually wrong. The rendered
route is the real bar, and the owner reviews it.

## Working agreement

- **Author the whole unit, then hand over the route.** Scenes, slides and narration together.
- **No ASCII sketches of scenes.** A sketch cannot show what the layout engine will do, which is the
  only thing worth looking at.
- **No silent scaffolding**, no work outside the ask. Say plainly what was built, what was verified,
  and what was left out.
