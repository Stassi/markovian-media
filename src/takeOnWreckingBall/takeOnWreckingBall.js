import distribution from './distribution';
import markovianSentences from '../markovianSentences';

const separatedNewlines = x => x.join('\n');
const separatedDoubleNewlines = x => x.join('\n\n');

const bars = markovianSentences(distribution);
const bar = bars();
const bars2 = bars(2);
const bars4 = bars(4);

const takeOnWreckingBall = (seeds = []) => separatedDoubleNewlines([
  bars4(seeds[0]),
  bars4(seeds[1]),
  separatedNewlines([
    bars4(seeds[2]),
    bar(seeds[3]),
  ]),
  bars4(seeds[4]),
  bars4(seeds[1]),
  bars4(seeds[2]),
  separatedNewlines([
    bars4(seeds[5]),
    bar(seeds[3]),
  ]),
  separatedNewlines([
    bars2(seeds[6]),
    bar(seeds[7]),
    bar(seeds[8]),
    bars2(seeds[6]),
    bar(seeds[8]),
  ]),
  bars2(seeds[1]),
  bars4(seeds[2]),
  separatedNewlines([
    bars4(seeds[5]),
    bar(seeds[3]),
  ]),
  bar(seeds[3]),
]);

export default takeOnWreckingBall;
