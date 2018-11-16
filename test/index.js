import { expect } from 'chai';
import { musicQueen, takeOnWreckingBall } from '../src';

describe('main object', () => {
  describe('musicQueen', () => {
    it('should be a function', () => {
      expect(musicQueen).to.be.a('function');
    });
  });

  describe('takeOnWreckingBall', () => {
    it('should be a function', () => {
      expect(takeOnWreckingBall).to.be.a('function');
    });
  });
});
