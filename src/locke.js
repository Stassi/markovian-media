import formatSentences from './formatSentences';
import { pipe } from 'ramda';
import { sentences } from 'markovian-nlp';
import {
  despondency as despondencyDist,
  reading as readingDist,
} from './lockeDistributions';

const essay = distribution => pipe(
  seed => sentences({
    distribution,
    seed,
    count: 10,
  }),
  formatSentences,
);

export const despondency = essay(despondencyDist);
export const reading = essay(readingDist);
