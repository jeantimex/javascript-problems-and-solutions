/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 *
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * return its level order traversal as:
 * [
 *   [3],
 *   [9,20],
 *   [15,7]
 * ]
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = root => {
  if (!root) {
    return [];
  }

  const result = [];
  const queue = [root, null];
  let level = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node) {
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    } else {
      result.push(level);

      if (queue.length > 0) {
        level = [];
        queue.push(null);
      }
    }
  }

  return result;
};

export default levelOrder;
