import type { Section } from '../types'

export const finalTest: Section = {
  id: 'final-test',
  title: 'Final test evidence and documented limitations',
  scene: 'final-test',
  focus: 'evidence',
  slide: `## Final test evidence

With pipeline, calibration and policy fixed, the locked test set is opened **once** and every number keeps its label.

### The evidence ladder
- Training **0.22** → CV best **0.31** → nested **0.33** → test **0.32**
- The test score sits inside the nested estimate's range: the procedure **held up**
- Test cost at t = 0.3: **£628** per 1,000 orders, close to the validation **£622**
- Nothing is changed after this: a change would make the test **validation**

### What the test does not settle
- Two months cannot show **seasonal** behaviour
- West zone recall **0.40** rests on 25 late orders
- The express policy's effect needs the **holdout**, not the test
- Later drift is a **monitoring** question, handed to MLOps`,
  narration:
    "With the pipeline, its calibration and the decision policy all fixed, the locked February and March test set is opened once. The useful way to present the result is as a ladder, with every number labelled by the kind of evidence it is. Training log loss is nought point two two, a training observation that says only that the model fits. The best cross-validated score is nought point three one, selection evidence, optimistic because it won. Nested cross-validation estimated the whole procedure at nought point three three. And the test result is nought point three two, inside the range the nested estimate predicted, which is what it looks like when an evaluation procedure has been honest. The cost at the chosen threshold, six hundred and twenty-eight pounds per thousand orders, is close to the six hundred and twenty-two seen on validation. Just as important is what the test cannot settle. Two months say nothing about seasons. West-zone recall of nought point four rests on twenty-five late orders. The effect of the express policy is measured by the holdout, not the test. And whether performance drifts later is a monitoring question for the MLOps course.",
}
