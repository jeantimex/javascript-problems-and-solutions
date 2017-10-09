import { assert } from 'chai';
import TreeNode from '../../common/tree-node';
import { serializeTree, deserializeTree } from '../tree-util';

/**
 *        1
 *       / \
 *      2   3
 */
const tree1 = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  return root;
};

/**
 *        1
 *         \
 *          2
 */
const tree2 = () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  return root;
};

/**
 *        1
 *         \
 *          2
 *         / \
 *        3   4
 */
const tree3 = () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(4);
  return root;
};

/**
 *        1
 *         \
 *          2
 *         /
 *        3
 */
const tree4 = () => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  return root;
};

/**
 *        1
 *       /
 *      2
 *     /
 *    3
 */
const tree5 = () => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  return root;
};

describe('Tree Util', () => {
  describe('Serialize', () => {
    const testCases = [
      [null, null],
      [tree1(), '[1,2,3]'],
      [tree2(), '[1,null,2]'],
      [tree3(), '[1,null,2,3,4]'],
      [tree4(), '[1,null,2,3]'],
      [tree5(), '[1,2,null,3]'],
    ];

    testCases.map((testCase, index) => {
      it(`should serialize the tree ${index}: ${testCase[1]}`, () => {
        const root = testCase[0];
        const expected = testCase[1];
        const actual = serializeTree(root);
        assert.equal(actual, expected);
      });
    });
  });

  describe('deserialize', () => {
    const testCases = [
      [null],
      ['bad input', null],
      ['[1,2,3]'],
      ['[1,null,2]'],
      ['[1,null,2,3,4]'],
      ['[1,null,2,3]'],
      ['[1,2,null,3]'],
    ];

    testCases.map((testCase, index) => {
      it(`should deserialize the tree ${index}: ${testCase[0]}`, () => {
        const input = testCase[0];
        const expected = testCase.length === 1 ? testCase[0] : testCase[1];
        const actual = serializeTree(deserializeTree(input));
        assert.equal(actual, expected);
      });
    });
  });
});
