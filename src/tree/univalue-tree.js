/**
 * Given a binary tree, check if it's uni-value tree.
 *
 * A Uni-value tree means all nodes of the tree have the same value.
 *
 * For example:
 * Given binary tree,
 *               5
 *              / \
 *             5   5
 *            / \   \
 *           5   5   5
 * return true.
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = root => {
  if (!root) {
    return true;
  }

  if (root.left && root.left.val !== root.val) {
    return false;
  }

  if (root.right && root.right.val !== root.val) {
    return false;
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};

export default isUnivalTree;
