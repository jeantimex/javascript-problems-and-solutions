/**
 * Given the root of a binary tree, then value v and depth d, you need to add a row of nodes with value v at the given depth d.
 * The root node is at depth 1.
 *
 * The adding rule is: given a positive integer depth d, for each NOT null tree nodes N in depth d-1, create two tree nodes with
 * value v as N's left subtree root and right subtree root. And N's original left subtree should be the left subtree of the new
 * left subtree root, its original right subtree should be the right subtree of the new right subtree root. If depth d is 1 that
 * means there is no depth d-1 at all, then create a tree node with value v as the new root of the whole original tree, and the
 * original tree is the new root's left subtree.
 *
 * Example 1:
 * Input:
 * A binary tree as following:
 *
 *        4
 *      /   \
 *     2     6
 *    / \   /
 *   3   1 5
 *
 * v = 1
 *
 * d = 2
 *
 * Output:
 *
 *        4
 *       / \
 *      1   1
 *     /     \
 *    2       6
 *   / \     /
 *  3   1   5
 *
 * Example 2:
 * Input:
 * A binary tree as following:
 *
 *       4
 *      /
 *     2
 *    / \
 *   3   1
 *
 * v = 1
 *
 * d = 3
 *
 * Output:
 *
 *       4
 *      /
 *     2
 *    / \
 *   1   1
 *  /     \
 * 3       1
 *
 * Note:
 * The given d is in range [1, maximum depth of the given tree + 1].
 * The given binary tree has at least one tree node.
 */

import TreeNode from 'common/tree-node';

/**
 * DFS Solution
 *
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRowDFS = (root, v, d) => {
  const helper = (root, level, v, d) => {
    if (!root) {
      return;
    }

    if (level < d - 1) {
      helper(root.left, level + 1, v, d);
      helper(root.right, level + 1, v, d);
    } else {
      // Handle the left subtree
      const left = root.left;
      root.left = new TreeNode(v);
      root.left.left = left;

      // Handle the right subtree
      const right = root.right;
      root.right = new TreeNode(v);
      root.right.right = right;
    }
  };

  if (d === 1) {
    const newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }

  helper(root, 1, v, d);

  return root;
};

/**
 * BFS Solution
 *
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRowBFS = (root, v, d) => {
  if (d === 1) {
    const newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  }

  const queue = [root];

  for (let k = 1; k <= d - 2; k++) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  while (queue.length > 0) {
    const node = queue.shift();

    // Handle the left subtree
    const left = node.left;
    node.left = new TreeNode(v);
    node.left.left = left;

    // Handle the right subtree
    const right = node.right;
    node.right = new TreeNode(v);
    node.right.right = right;
  }

  return root;
};

export { addOneRowDFS, addOneRowBFS };
