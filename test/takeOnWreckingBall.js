import { expect } from 'chai';
import takeOnWreckingBall from '../src/takeOnWreckingBall';
import sampleMedia from './sampleMedia';

const {
  iCantLiveAWreckingBall: {
    lyrics,
    seeds,
  },
} = sampleMedia;

describe('#takeOnWreckingBall', () => {
  describe('#seeded', () => {
    it('should return a deterministic song', () => {
      expect(takeOnWreckingBall(seeds)).to.equal(lyrics);
    });
  });
});
