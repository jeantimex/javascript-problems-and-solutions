/**
 * Given a binary tree, find the maximum path sum.
 *
 * For this problem, a path is defined as any sequence of nodes from some starting node to any node
 * in the tree along the parent-child connections. The path must contain at least one node and does
 * not need to go through the root.
 *
 * For example:
 * Given the below binary tree,
 *
 *        1
 *       / \
 *      2   3
 *
 * Return 6.
 *
 * The helper function returns the max path including the current node's value.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxPathSum = root => {
  const helper = root => {
    if (!root) {
      return 0;
    }

    const left = Math.max(helper(root.left), 0);
    const right = Math.max(helper(root.right), 0);

    max = Math.max(max, root.val + left + right);

    return root.val + Math.max(left, right);
  };

  let max = Number.MIN_SAFE_INTEGER;
  helper(root);
  return max;
};

export default maxPathSum;
