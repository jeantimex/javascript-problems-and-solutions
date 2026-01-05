import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import convertBST from '../convert-bst-to-greater-tree';

describe('Convert BST to Greater Tree', () => {
  const testCases = [['5,2,13', '18,20,13']];

  testCases.map((testCase, index) => {
    it(`should convert BST to greater tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      convertBST(root);
      const actual = serializeTree(root);
      assert.equal(actual, expected);
    });
  });
});
