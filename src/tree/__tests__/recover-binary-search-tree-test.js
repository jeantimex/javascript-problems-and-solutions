import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import recoverTree from '../recover-binary-search-tree';

describe('Recover Binary Search Tree', () => {
  const testCases = [['0,1', '1,0'], ['4,2,3,1,5', '4,2,5,1,3']];

  testCases.map((testCase, index) => {
    it(`should recover the binary search tree: ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      recoverTree(root);
      const actual = serializeTree(root);
      assert.equal(actual, expected);
    });
  });
});
