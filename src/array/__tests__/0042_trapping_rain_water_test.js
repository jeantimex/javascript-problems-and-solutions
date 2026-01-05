import { assert } from 'chai';
import trap from '../trapping-rain-water/trapping-rain-water';

describe('Trapping Rain Water', () => {
  const testCases = [[[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6]];

  testCases.forEach(([height, expected], index) => {
    it(`should get the trapping rain water ${index}`, () => {
      const actual = trap(height);
      assert.equal(actual, expected);
    });
  });
});
