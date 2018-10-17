import { expect } from 'chai';
import main from '../src';

describe('main object', () => {
  it('should have keys: [#musicQueen, #takeOnWreckingBall]', () => {
    expect(main).to.have.all.keys('musicQueen', 'takeOnWreckingBall');
  });
});
