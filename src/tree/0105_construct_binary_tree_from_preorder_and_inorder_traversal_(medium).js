/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 */

import TreeNode from 'common/tree-node';

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (preorder, inorder) => {
  const helper = (p1, p2, i1, i2) => {
    // sanity check
    if (p1 > p2 || i1 > i2) {
      return null;
    }

    const value = preorder[p1]; // get the root value
    const index = inorder.indexOf(value); // get inorder position
    const count = index - i1; // count nodes in left subtree
    const root = new TreeNode(value); // build the root node

    // build the left and right subtrees recursively
    root.left = helper(p1 + 1, p1 + count, i1, index - 1);
    root.right = helper(p1 + count + 1, p2, index + 1, i2);

    return root;
  };

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};

export default buildTree;
