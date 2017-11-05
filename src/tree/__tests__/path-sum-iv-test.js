import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import pathSum from '../path-sum-iv';

describe('Path Sum IV', () => {
  const testCases = [[[113, 215, 221], 12], [[113, 221], 4], [[], 0]];

  testCases.map((testCase, index) => {
    it(`should get the path sum`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = pathSum(nums);
      assert.equal(actual, expected);
    });
  });
});
