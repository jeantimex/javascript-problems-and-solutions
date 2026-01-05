/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 *
 * Note:
 * You may assume that duplicates do not exist in the tree.
 */

import TreeNode from 'common/tree-node';

/**
 * @param {number[]} postorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = (postorder, inorder) => {
  const helper = (p1, p2, i1, i2) => {
    // sanity check
    if (p1 > p2 || i1 > i2) {
      return null;
    }

    const value = postorder[p2]; // get the root value
    const index = inorder.indexOf(value); // get inorder position
    const count = index - i1; // count nodes in left subtree
    const root = new TreeNode(value); // build the root node

    // build the left and right subtrees recursively
    root.left = helper(p1, p1 + count - 1, i1, index - 1);
    root.right = helper(p1 + count, p2 - 1, index + 1, i2);

    return root;
  };

  return helper(0, postorder.length - 1, 0, inorder.length - 1);
};

export default buildTree;
