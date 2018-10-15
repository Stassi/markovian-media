import { expect } from 'chai';
import takeOnWreckingBall from '../src/takeOnWreckingBall';
import sampleMedia from './sampleMedia';

const { iCantLiveAWreckingBall } = sampleMedia;

describe('#takeOnWreckingBall', () => {
  describe('#seeded', () => {
    it('should return a deterministic song', () => {
      expect(takeOnWreckingBall()).to.equal(iCantLiveAWreckingBall);
    });
  });
});
