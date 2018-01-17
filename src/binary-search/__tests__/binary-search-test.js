import { assert } from 'chai';
import binarySearch from '../binary-search';

describe('Binary Search', () => {
  const testCases = [[[], 0, -1], [[0, 1, 2], 1, 1], [[0, 1, 1, 2], 2, 3], [[0, 1, 2, 3], 4, -1], [[0, 1, 2, 3], 0, 0]];

  testCases.forEach((testCase, index) => {
    it(`should find the index of target ${index}`, () => {
      const [nums, target, expected] = testCase;
      const actual = binarySearch(nums, target);
      assert.equal(actual, expected);
    });
  });
});
