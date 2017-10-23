/**
 * Given a binary tree, you need to compute the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 *
 * Example:
 * Given a binary tree
 *
 *           1
 *          / \
 *         2   3
 *        / \
 *       4   5
 *
 * Return 4, which is the length of the path [4,2,1,3] or [5,2,1,3].
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = root => {
  const helper = root => {
    if (!root) {
      return 0;
    }

    const left = helper(root.left);
    const right = helper(root.right);

    max = Math.max(max, 1 + left + right);

    return 1 + Math.max(left, right);
  };

  let max = 0;
  helper(root);
  return max;
};

export default diameterOfBinaryTree;
