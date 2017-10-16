import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import upsideDownBinaryTree from '../binary-tree-upside-down';

describe('Binary Tree Upside Down', () => {
  const testCases = [['null', null], ['1', '1'], ['1,2', '2,null,1'], ['1,2,3,4,5', '4,5,2,null,null,3,1']];

  testCases.map((testCase, index) => {
    it(`should put the tree ${testCase[0]} upside down`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = serializeTree(upsideDownBinaryTree(root));
      assert.equal(actual, expected);
    });
  });
});
