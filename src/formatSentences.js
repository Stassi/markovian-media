import {
  join,
  map,
  pipe,
  splitAt,
  toUpper,
} from 'ramda';

const capitalizeFirstLetters = pipe(
  splitAt(1),
  ([ head, ...props ]) => [toUpper(head), ...props],
  join(''),
);

const punctuateSentences = pipe(
  join('. '),
  x => `${x}.`,
);

const formatSentences = pipe(
  map(capitalizeFirstLetters),
  punctuateSentences,
);

export default formatSentences;
