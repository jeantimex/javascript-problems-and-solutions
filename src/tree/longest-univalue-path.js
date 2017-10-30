/**
 * Given a binary tree, find the length of the longest path where each node in the path has the same value.
 * This path may or may not pass through the root.
 *
 * Note: The length of path between two nodes is represented by the number of edges between them.
 *
 * Example 1:
 *
 * Input:
 *
 *               5
 *              / \
 *             4   5
 *            / \   \
 *           1   1   5
 * Output:
 *
 * 2
 * Example 2:
 *
 * Input:
 *
 *               1
 *              / \
 *             4   5
 *            / \   \
 *           4   4   5
 * Output:
 *
 * 2
 * Note: The given binary tree has not more than 10000 nodes. The height of the tree is not more than 1000.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestUnivaluePath = root => {
  const helper = node => {
    if (!node) {
      return 0;
    }

    let left = helper(node.left);
    let right = helper(node.right);

    if (node.left) {
      left += node.left.val === node.val ? 1 : -left;
    }

    if (node.right) {
      right += node.right.val === node.val ? 1 : -right;
    }

    max = Math.max(max, left + right);

    return Math.max(left, right);
  };

  let max = 0;
  helper(root);
  return max;
};

export default longestUnivaluePath;
