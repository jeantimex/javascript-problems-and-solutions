import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import trimBST from '../trim-a-binary-search-tree';

describe('Trim a Binary Search Tree', () => {
  const testCases = [['1,0,2', 1, 2, '1,null,2'], ['3,0,4,null,2,null,null,1', 1, 3, '3,2,null,1']];

  testCases.map((testCase, index) => {
    it(`should trim a binary search tree`, () => {
      const root = deserializeTree(testCase[0]);
      const L = testCase[1];
      const R = testCase[2];
      const expected = testCase[3];
      const actual = serializeTree(trimBST(root, L, R));
      assert.equal(actual, expected);
    });
  });
});
