import { expect } from 'chai';
import {
  despondency,
  musicQueen,
  reading,
  takeOnWreckingBall,
} from '../src';

describe('main object', () => {
  describe('despondency', () => {
    it('should be a function', () => {
      expect(despondency).to.be.a('function');
    });
  });

  describe('musicQueen', () => {
    it('should be a function', () => {
      expect(musicQueen).to.be.a('function');
    });
  });

  describe('reading', () => {
    it('should be a function', () => {
      expect(reading).to.be.a('function');
    });
  });

  describe('takeOnWreckingBall', () => {
    it('should be a function', () => {
      expect(takeOnWreckingBall).to.be.a('function');
    });
  });
});
