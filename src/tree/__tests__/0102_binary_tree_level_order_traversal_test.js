import { assert } from 'chai';
import { deserializeTree } from 'utils/tree-util';
import levelOrder from '../binary-tree-level-order-traversal';

describe('Binary Tree Level Order Traversal', () => {
  const testCases = [
    ['null', []],
    ['1', [[1]]],
    ['1, 2', [[1], [2]]],
    ['3, 9, 20, null, null, 15, 7', [[3], [9, 20], [15, 7]]],
  ];

  testCases.map((testCase, index) => {
    it(`should level order traverse tree ${testCase[0]}`, () => {
      const root = deserializeTree(testCase[0]);
      const actual = levelOrder(root);
      const expected = testCase[1];
      assert.deepEqual(actual, expected);
    });
  });
});
