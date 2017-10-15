import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import pathSum from '../path-sum-ii';

describe('Path Sum', () => {
  const testCases = [
    ['null', 7, []],
    ['1,2,3,4,5', 8, [[1, 2, 5]]],
    ['5,4,8,11,null,13,4,7,2,null,null,5,1', 22, [[5, 4, 11, 2], [5, 8, 4, 5]]],
  ];

  testCases.map((testCase, index) => {
    it(`should find all the paths for tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const sum = testCase[1];
      const expected = testCase[2];
      const actual = pathSum(root, sum);
      assert.deepEqual(actual, expected);
    });
  });
});
