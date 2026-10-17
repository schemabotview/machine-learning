import type { Section } from '../types'

export const recommendation: Section = {
  id: 'recommendation',
  title: 'Final refit and transparent recommendation',
  scene: 'recommendation',
  focus: 'record',
  slide: `## Final refit and recommendation

The workflow ends with **one refit, one test, and a record** that says what each number is.

### The closing sequence
- Choose the pipeline, calibration and threshold on development data
- **Refit** the chosen pipeline on all development data
- Score it **once** on the locked test set: log loss **0.32**
- Changing anything after that score turns the test into validation

### What the record states
- CV **0.31** is selection evidence; nested **0.33** estimates the procedure
- Test **0.32** is the final result — one sample, with its own noise
- Thresholds, calibration method and **known limits** sit beside the scores
- A reader can **reproduce** the choice from the record alone`,
  narration:
    "Model selection ends with a short, strict sequence. Everything is chosen on the development data: the pipeline and its settings by cross-validation within a declared budget, the calibrator on its own split, the threshold by cost or capacity. Then the chosen pipeline is refitted on all of the development data, because more data usually helps and nothing remains to be chosen. Then, and only then, the locked test set is opened and the refitted pipeline is scored on it once: a log loss of nought point three two. If anything is changed after seeing that number, the test set has become validation data and no longer provides a final estimate. The result is written down as a record in which every number says what kind of evidence it is. The cross-validated score of nought point three one is selection evidence. The nested estimate of nought point three three estimates the whole procedure. The test score of nought point three two is the final result, though still a single sample with its own noise. Beside them sit the calibration method, the threshold and its justification, and the known limits, such as weak interval coverage in new zones.",
}
