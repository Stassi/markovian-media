# markovian-media
[![npm dependencies][shields dependencies]][markovian-media package]
[![npm dev dependencies][shields dev dependencies]][markovian-media package]
[![license][shields license]][markovian-media license]
[![npm bundle size (minified)][shields min]][bundlephobia markovian-media]
[![npm bundle size (minified + gzip)][shields minzip]][bundlephobia markovian-media]
[![node version compatibility][shields node]][markovian-media package]
[![npm current version][shields npm]][npm markovian-media]

## Quick start
As an isomorphic JavaScript package, there are multiple ways for clients, servers, and bundlers to start using this library. Several methods do not require installation.

### RunKit
RunKit provides one of the least difficult ways to get started:
* [test with RunKit][runkit markovian-media]

### CodePen
Declare imports in the `JS` section to get started:
```es6
import { takeOnWreckingBall } from 'https://unpkg.com/markovian-media@latest?module';
```

```es6
const song = takeOnWreckingBall();
console.log(song);
// example output: 'i guess i never meant to be gone...'
```
* [test with CodePen][codepen new]

### Browsers
Insert the following element within the `<head>` tag of an HTML document:
```html
<script src="https://unpkg.com/markovian-media@latest"></script>
```

After the script is loaded, the `markovianMedia` browser global is exposed:
```es6
const song = markovianMedia.takeOnWreckingBall();
console.log(song);
// example output: 'i guess i never meant to be gone...'
```

## Node.js
With [`npm` installed][npm install], run terminal command:
```shell
npm i markovian-media
```
* [npm package][npm markovian-media]

Once installed, declare method imports at the top of each JavaScript file they will be used.

### ES2015
__Recommended__
```es6
import { takeOnWreckingBall } from 'markovian-media';
```

### CommonJS
```javascript
const { takeOnWreckingBall } = require('markovian-media');
```

## Usage
### Generate a random song
```es6
takeOnWreckingBall();
// example output: 'i guess i never meant to be gone...'
```

### Generate a specific song
Optionally providing `seeds` generates deterministic media.

```es6
const seeds = [
  74,
  40,
  83,
  115,
  110,
  108,
  158,
  204,
  245,
];

takeOnWreckingBall(seeds);
// output: 'i guess i never meant to be gone...'
```

## Media catalogue
Providing methods with `seeds` generates deterministic media. This section lists `seeds` that generate titled works.

### Songs
title | method | seeds
----- | ------ | -----
"I Can't Live a Wrecking Ball" | `takeOnWreckingBall` | `[74, 40, 83, 115, 110, 108, 158, 204, 245]`
"I Want to Boogie Woogie" | `musicQueen` | `[146, 114, 183, 189, 173, 98, 179, 163]`

## API
All methods accept `seeds`, an optional [Array][mdn array] of [Numbers][mdn number].

All methods return a [String][mdn string].

method | number of optional `seeds`
------ | -----
`musicQueen` | 8
`takeOnWreckingBall` | 9

 Omit _all_ `seeds` to generate random media.

 Omit _some_ `seeds` to generate a random and deterministic media combination. Substitute any numbers with `null` to randomize those specific seeds (e.g.: `seeds = [1, 2, null, 4]` is 25% random, 75% deterministic).

## Learn more
This package is powered by __markovian-nlp__, available on [npm][npm markovian-nlp] and [GitHub][github markovian-nlp].

[bundlephobia markovian-media]: https://bundlephobia.com/result?p=markovian-media
    (bundlephobia: markovian-media)
[codepen new]: https://codepen.io/pen
    (CodePen: Create a New Pen)
[github markovian-nlp]: https://github.com/Stassi/markovian-nlp
    (GitHub: markovian-nlp)
[markovian-media license]: LICENSE
    (markovian-media license)
[markovian-media package]: package.json
    (markovian-media package.json)
[mdn array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    (MDN JavaScript reference: Array)
[mdn number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    (MDN JavaScript reference: Number)
[mdn string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    (MDN JavaScript reference: String)
[npm markovian-nlp]: https://www.npmjs.com/package/markovian-nlp
    (npm: markovian-nlp)
[npm install]: https://www.npmjs.com/get-npm
    (npm: install npm with Node.js)
[npm markovian-media]: https://www.npmjs.com/package/markovian-media
    (npm: markovian-media)
[runkit markovian-media]: https://npm.runkit.com/markovian-media
    (RunKit+npm: test markovian-media)
[shields dependencies]: https://img.shields.io/david/Stassi/markovian-media.svg
[shields dev dependencies]: https://img.shields.io/david/dev/Stassi/markovian-media.svg
[shields license]: https://img.shields.io/npm/l/markovian-media.svg
[shields min]: https://img.shields.io/bundlephobia/min/markovian-media.svg
[shields minzip]: https://img.shields.io/bundlephobia/minzip/markovian-media.svg
[shields node]: https://img.shields.io/node/v/markovian-media.svg
[shields npm]: https://img.shields.io/npm/v/markovian-media.svg
