import type { Section } from '../types'

export const questions: Section = {
  id: 'questions',
  title: 'Global and local interpretation questions',
  scene: 'interpretation-questions',
  focus: 'table',
  slide: `## Start from the question

"Explain the model" is not one request: each question has a **scope** and a method that fits it.

### Scopes
- **Global**: what does the model rely on, and how do predictions move with an input?
- **Local**: why did this one order get 74 minutes?
- **Subgroup**: where, and for whom, is it wrong?
- Name the **audience** too: an engineer debugging and a customer asking need different answers
- Global answers can hide local exceptions

### The question it cannot answer
- "Would express shipping make this order on time?" is **causal**
- A predictive model describes associations under the **policy that produced the data**
- Answering it needs an experiment or causal methods — chapter 1's boundary again
- Every explanation in this chapter describes **the model**, evaluated on held-out data`,
  narration:
    "Requests to explain a model usually bundle several different questions together, and each one needs a different tool. Global questions are about the model as a whole: what does it rely on, and how do its predictions change as an input like distance changes? Local questions are about one prediction: why did this particular order get seventy-four minutes? Subgroup questions ask where, and for whom, the model is wrong, which is the subject of the second half of this chapter. And then there is a question that sounds like the others but is not: would giving this order express shipping make it arrive on time? That is a causal question about an intervention. A predictive model describes the associations in data produced under the existing policy, and, as chapter one warned, it cannot say what would happen if we acted differently. Answering that needs a randomised experiment or causal methods, which belong to other courses. So everything in this chapter explains the model, evaluated on held-out data. It tells us what the model does, which is necessary for using it responsibly, but it is not a description of how deliveries work.",
}
