import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import binaryTreePaths from '../binary-tree-paths';

describe('Binary Tree Paths', () => {
  const testCases = [['1', ['1']], ['1,2,3', ['1->2', '1->3']], ['null', []]];

  testCases.map((testCase, index) => {
    it(`should print the binary tree paths`, () => {
      const root = deserializeTree(testCase[0]);
      const expected = testCase[1];
      const actual = binaryTreePaths(root);
      assert.deepEqual(actual, expected);
    });
  });
});
