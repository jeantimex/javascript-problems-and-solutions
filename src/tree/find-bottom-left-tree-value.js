/**
 * Given a binary tree, find the leftmost value in the last row of the tree.
 *
 * Example 1:
 * Input:
 *
 *     2
 *    / \
 *   1   3
 *
 * Output:
 * 1
 *
 * Example 2:
 * Input:
 *
 *         1
 *        / \
 *       2   3
 *      /   / \
 *     4   5   6
 *        /
 *       7
 *
 * Output:
 * 7
 *
 * Note: You may assume the tree (i.e., the given root node) is not NULL.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = root => {
  const queue = [root];

  while (queue.length) {
    root = queue.shift();

    if (root.right != null) {
      queue.push(root.right);
    }

    if (root.left != null) {
      queue.push(root.left);
    }
  }

  return root.val;
};

export default findBottomLeftValue;
