import { expect } from 'chai';
import { reading } from '../src/locke';
import sampleMedia from './sampleMedia';

const {
  reading: {
    essay,
    seed,
  },
} = sampleMedia;

describe('#reading', () => {
  describe('#seeded', () => {
    it('should return a deterministic document', () => {
      expect(reading(seed)).to.equal(essay);
    });
  });

  describe('#unseeded', () => {
    it('should return a nondeterministic document', () => {
      expect(reading()).to.be.a('string');
    });
  });
});
