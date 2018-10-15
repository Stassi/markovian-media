import distribution from './distribution';
import markovianSentences from '../markovianSentences';

const bars = markovianSentences(distribution);

const takeOnWreckingBall = () => [
  bars(4)(74),
  bars(4)(40),
  [
    bars(4)(83),
    bars()(115),
  ].join('\n'),
  bars(4)(110),
  bars(4)(40),
  bars(4)(83),
  [
    bars(4)(108),
    bars()(115),
  ].join('\n'),
  [
    bars(2)(158),
    bars()(204),
    bars()(245),
    bars(2)(158),
    bars()(245),
  ].join('\n'),
  bars(2)(40),
  bars(4)(83),
  [
    bars(4)(108),
    bars()(115),
  ].join('\n'),
  bars()(115),
].join('\n\n');

export default takeOnWreckingBall;
