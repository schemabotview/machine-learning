import type { Section } from '../types'

export const ldaQda: Section = {
  id: 'lda-qda',
  title: 'LDA and QDA covariance assumptions',
  scene: 'lda-qda',
  focus: 'boundaries',
  slide: `## LDA and QDA

Both model each class as a **Gaussian** cloud; they differ only in what they assume about its **shape**.

### The assumption decides the boundary
- **LDA**: one covariance shared by all classes — the boundary is a **line**
- **QDA**: each class gets its own covariance — the boundary **curves**
- Here class A is tight and round, class B wide: QDA bends around A

### Choosing between them
- QDA needs a covariance **per class**: with 20 features, roughly double LDA's parameters
- Few rows per class: QDA's estimates turn noisy and can **collapse**
- LDA is more biased but steadier; regularised covariance sits between
- If the classes are not roughly Gaussian, neither probability can be trusted`,
  narration:
    "Linear and quadratic discriminant analysis are also generative: they model each class as a Gaussian cloud and classify a point by which cloud makes it most likely. The only difference is what they assume about the clouds' shapes. LDA assumes every class shares one covariance, the same spread and tilt, just shifted to a different centre. Under that assumption the boundary between classes is always a straight line. QDA lets each class have its own covariance, and then the boundary can curve. In this example class A is tight and round while class B is wide, so QDA's boundary bends around A, while LDA has to settle for a line. QDA is not simply better. Each class now needs its own covariance matrix, and with twenty features that roughly doubles the number of parameters. With few rows in a class, those estimates become noisy, and in the extreme they collapse. LDA is more biased but steadier. Regularised covariance estimates sit between the two. And both rest on the classes being roughly Gaussian; when they are not, the boundary may still work, but the probabilities should not be trusted.",
}
