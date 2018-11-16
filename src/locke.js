import formatSentences from './formatSentences';
import { pipe } from 'ramda';
import { sentences } from 'markovian-nlp';
import {
  despondency as despondencyDist,
  reading as readingDist,
} from './lockeDistributions';

// TODO: Reduce duplication
export const despondency = pipe(
  seed => sentences({
    seed,
    count: 10,
    distribution: despondencyDist,
  }),
  formatSentences,
);

// TODO: Reduce duplication
export const reading = pipe(
  seed => sentences({
    seed,
    count: 10,
    distribution: readingDist,
  }),
  formatSentences,
);
