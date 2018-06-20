/**
 * Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.
 *
 * An example is the root-to-leaf path 1->2->3 which represents the number 123.
 *
 * Find the total sum of all root-to-leaf numbers.
 *
 * For example,
 *
 *     1
 *    / \
 *   2   3
 * The root-to-leaf path 1->2 represents the number 12.
 * The root-to-leaf path 1->3 represents the number 13.
 *
 * Return the sum = 12 + 13 = 25.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = root => {
  return helper(root, 0);
};

const helper = (node, sum) => {
  if (!node) {
    return 0;
  }

  const { left, right } = node;

  sum = 10 * sum + node.val;

  if (!left && !right) {
    return sum;
  }

  return helper(left, sum) + helper(right, sum);
};

export default sumNumbers;
