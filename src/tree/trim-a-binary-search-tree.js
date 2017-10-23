/**
 * Given a binary search tree and the lowest and highest boundaries as L and R,
 * trim the tree so that all its elements lies in [L, R] (R >= L).
 *
 * You might need to change the root of the tree, so the result should return
 * the new root of the trimmed binary search tree.
 *
 * Example 1:
 * Input:
 *     1
 *    / \
 *   0   2
 *
 *   L = 1
 *   R = 2
 *
 * Output:
 *     1
 *       \
 *        2
 * Example 2:
 * Input:
 *     3
 *    / \
 *   0   4
 *    \
 *     2
 *    /
 *   1
 *
 *   L = 1
 *   R = 3
 *
 * Output:
 *       3
 *      /
 *    2
 *   /
 *  1
 */

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function(root, L, R) {
  if (!root) {
    return null;
  }

  const left = trimBST(root.left, L, R);
  const right = trimBST(root.right, L, R);

  if (root.val < L) {
    return right;
  }

  if (root.val > R) {
    return left;
  }

  root.left = left;
  root.right = right;

  return root;
};

export default trimBST;
