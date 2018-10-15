import distribution from './distribution';
import markovianSentences from '../markovianSentences';

const bars = markovianSentences(distribution);
const bar = bars();
const bars2 = bars(2);
const bars4 = bars(4);

const takeOnWreckingBall = (seeds = []) => [
  bars4(seeds[0]),
  bars4(seeds[1]),
  [
    bars4(seeds[2]),
    bar(seeds[3]),
  ].join('\n'),
  bars4(seeds[4]),
  bars4(seeds[1]),
  bars4(seeds[2]),
  [
    bars4(seeds[5]),
    bar(seeds[3]),
  ].join('\n'),
  [
    bars2(seeds[6]),
    bar(seeds[7]),
    bar(seeds[8]),
    bars2(seeds[6]),
    bar(seeds[8]),
  ].join('\n'),
  bars2(seeds[1]),
  bars4(seeds[2]),
  [
    bars4(seeds[5]),
    bar(seeds[3]),
  ].join('\n'),
  bar(seeds[3]),
].join('\n\n');

export default takeOnWreckingBall;
