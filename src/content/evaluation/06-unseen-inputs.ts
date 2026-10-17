import type { Section } from '../types'

export const unseenInputs: Section = {
  id: 'unseen-inputs',
  title: 'Categories, text and unseen inputs',
  scene: 'unseen-inputs',
  focus: 'onehot',
  slide: `## Categories, text and unseen inputs

Encoders learn their **vocabulary on train**, so the question is what happens to an input they never saw.

### Categories
- One-hot encoding gives each training zone its own 0/1 column
- A new zone, *west*, maps to **all zeros** with \`handle_unknown="ignore"\`
- Without that setting the pipeline **fails** at prediction time
- Very rare zones can be grouped into one **infrequent** column

### Text, as a separate illustration
- A count vectoriser builds its vocabulary from **training reviews only**
- Words first seen at validation, like *crushed*, are **dropped**
- A vocabulary built on all text leaks which words the held-out data uses
- Count how often unseen values occur: a rising share means the inputs are **shifting**`,
  narration:
    "Categorical and text features need encoding, and every encoder learns a vocabulary, which raises the question of what it does with something new. One-hot encoding gives each zone seen in training its own column of ones and zeros. Now the retailer opens a west zone, and a validation order arrives from it. With handle unknown set to ignore, that order gets zeros in every zone column, which the model treats as no zone information. Without that setting, the pipeline raises an error the first time it meets the new zone, which in production means a failed prediction. Text works the same way. As a separate illustration, take short customer reviews; they are not a checkout feature, because they are written after delivery. A count vectoriser builds its vocabulary from the training reviews only. A validation review containing a word first seen there, like crushed, simply loses that word. If you build the vocabulary on all the text instead, you leak which words the held-out data uses, and the validation score becomes optimistic.",
}
