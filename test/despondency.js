import { expect } from 'chai';
import despondency from '../src/despondency';
import sampleMedia from './sampleMedia';

const {
  inThoseOfTheUnderstanding: {
    essay,
    seed,
  },
} = sampleMedia;

describe('#despondency', () => {
  describe('#seeded', () => {
    it('should return a deterministic document', () => {
      expect(despondency(seed)).to.equal(essay);
    });
  });

  describe('#unseeded', () => {
    it('should return a nondeterministic document', () => {
      expect(despondency()).to.be.a('string');
    });
  });
});
