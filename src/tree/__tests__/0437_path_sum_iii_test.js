import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import { pathSum, pathSumR } from '../path-sum-iii';

describe('Path Sum III', () => {
  const testCases = [['10,5,-3,3,2,null,11,3,-2,null,1', 8, 3]];

  testCases.map((testCase, index) => {
    it(`should get the total of paths that sum up to target`, () => {
      const root = deserializeTree(testCase[0]);
      const sum = testCase[1];
      const expected = testCase[2];
      const actual = pathSumR(root, sum);
      assert.equal(actual, expected);
    });
  });

  testCases.map((testCase, index) => {
    it(`should get the total of paths that sum up to target`, () => {
      const root = deserializeTree(testCase[0]);
      const sum = testCase[1];
      const expected = testCase[2];
      const actual = pathSum(root, sum);
      assert.equal(actual, expected);
    });
  });
});
