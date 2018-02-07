import { assert } from 'chai';
import plusOne from '../plus-one';

describe('Plus One', () => {
  const testCases = [[[0], [1]], [[9], [1, 0]], [[1, 0], [1, 1]], [[9, 9, 9], [1, 0, 0, 0]]];

  testCases.forEach(([digits, expected], index) => {
    it('should return the correct digits', () => {
      const actual = plusOne(digits);
      assert.deepEqual(actual, expected);
    });
  });
});
