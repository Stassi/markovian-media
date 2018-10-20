import { pipe } from 'ramda';
import { sentences } from 'markovian-nlp';
import distribution from './distribution';
import formatSentences from '../formatSentences';

const reading = pipe(
  seed => sentences({
    distribution,
    seed,
    count: 10,
  }),
  formatSentences,
);

export default reading;
