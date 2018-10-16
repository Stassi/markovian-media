import {
  join,
  juxt,
  lensIndex,
  pipe,
  view,
} from 'ramda';
import distribution from './distribution';
import markovianSentences from '../markovianSentences';

const mergeNewlines = join('\n');
const mergeDoubleNewlines = join('\n\n');

const viewIndex = pipe(lensIndex, view);
const bars = markovianSentences(distribution);
const indicesToBars = barCount => index => pipe(
  viewIndex(index),
  bars(barCount),
);

const toBar = indicesToBars();
const to2Bars = indicesToBars(2);
const to4Bars = indicesToBars(4);

const seedsToBars = juxt([
  toBar(3),
  toBar(7),
  toBar(8),
  to2Bars(1),
  to2Bars(6),
  to4Bars(0),
  to4Bars(1),
  to4Bars(2),
  to4Bars(4),
  to4Bars(5),
]);

const indicesSixAndSeven = [
  viewIndex(6),
  viewIndex(7),
];

const indicesNineAndZero = [
  viewIndex(9),
  viewIndex(0),
];

const arrangeBars = juxt([
  viewIndex(5),
  ...indicesSixAndSeven,
  viewIndex(0),
  viewIndex(8),
  ...indicesSixAndSeven,
  ...indicesNineAndZero,
  viewIndex(4),
  viewIndex(1),
  viewIndex(2),
  viewIndex(4),
  viewIndex(2),
  viewIndex(3),
  viewIndex(7),
  ...indicesNineAndZero,
  viewIndex(0),
]);

const mergeLines = ([
  a,
  b,
  c,
  d,
  e,
  f,
  g,
  h,
  i,
  j,
  k,
  l,
  m,
  n,
  o,
  p,
  q,
  r,
  ...props
]) => [
  a,
  b,
  mergeNewlines([c, d]),
  e,
  f,
  g,
  mergeNewlines([h, i]),
  mergeNewlines([
    j,
    k,
    l,
    m,
    n,
  ]),
  o,
  p,
  mergeNewlines([q, r]),
  ...props,
];

const takeOnWreckingBall = pipe(
  seedsToBars,
  arrangeBars,
  mergeLines,
  mergeDoubleNewlines,
);

export default takeOnWreckingBall;
