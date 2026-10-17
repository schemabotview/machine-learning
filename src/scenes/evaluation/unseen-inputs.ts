import type { Scene } from '@graphlearning/flow'

// §6 — a zone the encoder never saw, and review words the vectoriser never saw. Both encoders are
// fitted on train and told what to do with the unknown; the review texts are a separate illustration,
// not a checkout feature (reviews arrive after delivery).
export const unseenInputs: Scene = {
  id: 'unseen-inputs',
  title: 'Inputs the training set never saw',
  flow: 'TB',
  padding: 0.08, // the board floats: let it reach the pane
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'encode.py',
      label: `enc = OneHotEncoder(handle_unknown="ignore")
enc.fit(train[["zone"]])      # north, east, south

vec = CountVectorizer()
vec.fit(train_reviews)        # train vocabulary only

enc.transform(val[["zone"]])  # "west" -> all zeros
vec.transform(val_reviews)    # new words dropped`,
    },
    {
      id: 'onehot',
      kind: 'table',
      label: 'One-hot: zone',
      headers: ['zone', 'north', 'east', 'south'],
      values: [
        ['north', '1', '0', '0'],
        ['east', '0', '1', '0'],
        ['south', '0', '0', '1'],
        ['west (new)', '0', '0', '0'],
      ],
    },
    {
      id: 'counts',
      kind: 'table',
      label: 'Counts: review text',
      headers: ['text', 'late', 'damaged', 'early'],
      values: [
        ['late again', '1', '0', '0'],
        ['box damaged, late', '1', '1', '0'],
        ['arrived early', '0', '0', '1'],
        ['parcel crushed (new)', '0', '0', '0'],
      ],
    },
  ],
  edges: [
    { source: 'code', target: 'onehot' },
    { source: 'code', target: 'counts' },
  ],
}
