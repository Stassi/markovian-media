import { join, pipe } from 'ramda';
import distribution from './distribution';
import markovianSentences from '../markovianSentences';

const bars = markovianSentences(distribution);
const bars2 = bars(2);
const bars4 = bars(4);
const bars8 = bars(8);

const seedsToSections = ([
  introSeed,
  verseOneSeed,
  preChorusSeed,
  chorusSeed,
  verseTwoSeed,
  bridgeSeed,
  verseThreeSeed,
  codaSeed,
]) => ({
  bridge: bars8(bridgeSeed),
  chorus: bars4(chorusSeed),
  coda: bars2(codaSeed),
  introduction: bars2(introSeed),
  preChorus: bars4(preChorusSeed),
  verses: [
    bars4(verseOneSeed),
    bars4(verseTwoSeed),
    bars4(verseThreeSeed),
  ],
});

const arrangeBars = ({
  bridge,
  chorus,
  coda,
  introduction,
  preChorus,
  verses,
}) => ([
  introduction,
  verses[0],
  preChorus,
  chorus,
  verses[1],
  preChorus,
  chorus,
  bridge,
  verses[2],
  chorus,
  coda,
]);

const joinDoubleNewlines = join('\n\n');

const musicQueen = pipe(
  (seeds = []) => seeds,
  seedsToSections,
  arrangeBars,
  joinDoubleNewlines,
);

export default musicQueen;
