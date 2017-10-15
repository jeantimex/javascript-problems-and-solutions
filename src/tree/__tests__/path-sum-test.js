import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import hasPathSum from '../path-sum';

describe('Path Sum', () => {
  const testCases = [
    ['', 0, false],
    ['5,4,8,11,null,13,4,7,2,null,null,null,1', 22, true],
    ['1', 0, false],
    ['1', 1, true],
    ['1,2', 3, true],
    ['1,null,2', 3, true],
  ];

  testCases.map((testCase, index) => {
    it(`should validate if there's a path for ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const sum = testCase[1];
      const expected = testCase[2];
      const actual = hasPathSum(root, sum);
      assert.equal(actual, expected);
    });
  });
});
