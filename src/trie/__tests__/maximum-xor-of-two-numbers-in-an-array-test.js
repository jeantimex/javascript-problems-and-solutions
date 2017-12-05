import { assert } from 'chai';
import findMaximumXOR from '../maximum-xor-of-two-numbers-in-an-array';

describe('Maximum XOR of Two Numbers in an Array', () => {
  const testCases = [[[3, 10, 5, 25, 2, 8], 28], [[4, 6, 7], 3], [[8, 10, 2], 10]];

  testCases.forEach((testCase, index) => {
    it(`should get the maximum xor of two numbers in an array ${index}`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = findMaximumXOR(nums);
      assert.equal(actual, expected);
    });
  });
});
