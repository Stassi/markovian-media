import { sentences } from 'markovian-nlp';

const markovianSentences = distribution => count => seed => sentences({
  count,
  distribution,
  seed,
}).join('\n');

export default markovianSentences;
