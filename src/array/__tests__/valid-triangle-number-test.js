import { assert } from 'chai';
import { triangleNumber } from '../valid-triangle-number';

describe('Valid Triangle Number', () => {
  const testCases = [[[2, 2, 3, 4], 3], [[3, 19, 22, 24, 35, 82, 84], 10]];

  testCases.forEach(([nums, expected], index) => {
    it(`should validate the triangle number for ${nums}`, () => {
      const actual = triangleNumber(nums);
      assert.equal(actual, expected);
    });
  });
});
