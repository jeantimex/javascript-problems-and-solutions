/**
 * You need to find the largest value in each row of a binary tree.
 *
 * Example:
 * Input:
 *
 *           1
 *          / \
 *         3   2
 *        / \   \
 *       5   3   9
 *
 * Output: [1, 3, 9]
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root, null];
  let max = Number.MIN_SAFE_INTEGER;

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      max = Math.max(max, node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    } else {
      result.push(max);
      max = Number.MIN_SAFE_INTEGER;

      if (queue.length) {
        queue.push(null);
      }
    }
  }

  return result;
};

export default largestValues;
