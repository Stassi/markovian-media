import distribution from './distribution';
import markovianSentences from '../markovianSentences';

const bars = markovianSentences(distribution);

const a1 = bars()(204);
const b1 = bars()(245);
const a2 = bars(2)(158);

const bridge = [
  a2,
  a1,
  b1,
  a2,
  b1,
].join('\n');

const mapBar4 = seeds => seeds.map(bars(4));
const choruses = mapBar4([83, 108]);
const verses = mapBar4([74, 110]);

const preChorus = bars(4)(40);
const preChorusHalf = bars(2)(40);

const refrain = bars()(115);

const appendRefrain = x => [x, refrain].join('\n');

const bothChoruses = [
  choruses[0],
  appendRefrain(choruses[1]),
];

// TODO: Parameterize
const takeOnWreckingBall = () => ([
  verses[0],
  preChorus,
  appendRefrain(choruses[0]),
  verses[1],
  preChorus,
  ...bothChoruses,
  bridge,
  preChorusHalf,
  ...bothChoruses,
  refrain,
].join('\n\n'));

export default takeOnWreckingBall;
