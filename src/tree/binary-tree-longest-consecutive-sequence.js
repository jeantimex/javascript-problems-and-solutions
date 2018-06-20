/**
 * Given a binary tree, find the length of the longest consecutive sequence path.
 *
 * The path refers to any sequence of nodes from some starting node to any node in
 * the tree along the parent-child connections. The longest consecutive path need
 * to be from parent to child (cannot be the reverse).
 *
 * For example,
 *
 *    1
 *     \
 *      3
 *     / \
 *    2   4
 *         \
 *          5
 *
 * Longest consecutive sequence path is 3-4-5, so return 3.
 *
 *    2
 *     \
 *      3
 *     /
 *    2
 *   /
 *  1
 *
 * Longest consecutive sequence path is 2-3,not3-2-1, so return 2.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const longestConsecutive = root => {
  /**
   * Return the max length so far on either side
   * and compare the max
   *
   * @param {TreeNode} root
   */
  const helper = root => {
    if (!root) {
      return 0;
    }

    let len = 1;
    const left = helper(root.left);
    const right = helper(root.right);

    if (root.left && root.val === root.left.val - 1) {
      len = Math.max(len, 1 + left);
    }

    if (root.right && root.val === root.right.val - 1) {
      len = Math.max(len, 1 + right);
    }

    max = Math.max(max, len);

    return len;
  };

  let max = 0;
  helper(root);
  return max;
};

export default longestConsecutive;
