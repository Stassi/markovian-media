import { expect } from 'chai';
import main from '../src';

describe('main object', () => {
  it('should have all documented API methods as keys', () => {
    expect(main).to.have.all.keys(
      'despondency',
      'musicQueen',
      'takeOnWreckingBall',
    );
  });
});
