import { expect } from 'chai';
import main from '../src';

describe('main object', () => {
  it('should have keys: [#takeOnWreckingBall]', () => {
    expect(main).to.have.all.keys('takeOnWreckingBall');
  });
});
