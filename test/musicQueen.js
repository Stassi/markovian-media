import { expect } from 'chai';
import musicQueen from '../src/musicQueen';
import sampleMedia from './sampleMedia';

const {
  iWantToBoogieWoogie: {
    lyrics,
    seeds,
  },
} = sampleMedia;

describe('#musicQueen', () => {
  describe('#seeded', () => {
    it('should return a deterministic song', () => {
      expect(musicQueen(seeds)).to.equal(lyrics);
    });
  });

  describe('#unseeded', () => {
    it('should return a nondeterministic song', () => {
      expect(musicQueen()).to.be.a('string');
    });
  });
});
