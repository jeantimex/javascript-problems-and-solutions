/**
 * Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.
 *
 * Note:
 * Given target value is a floating point.
 * You may assume k is always valid, that is: k ≤ total nodes.
 * You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
 * Follow up:
 * Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
 *
 */

import Stack from 'common/stack';

/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
const closestKValues = (root, target, k) => {
  const result = [];
  const successors = new Stack();
  const predecessors = new Stack();

  inorder(root, target, successors, true);
  inorder(root, target, predecessors, false);

  while (k--) {
    if (successors.isEmpty()) {
      result.push(predecessors.pop());
    } else if (predecessors.isEmpty()) {
      result.push(successors.pop());
    } else if (successors.peek() - target < target - predecessors.peek()) {
      result.push(successors.pop());
    } else {
      result.push(predecessors.pop());
    }
  }

  return result;
};

/**
 * Inorder traversal
 *
 * @param {*} root
 * @param {*} target
 * @param {*} list
 * @param {*} reverse
 */
const inorder = (root, target, stack, reverse) => {
  if (!root) {
    return;
  }

  inorder(reverse ? root.right : root.left, target, stack, reverse);

  if ((reverse && root.val <= target) || (!reverse && root.val > target)) {
    return;
  }

  stack.push(root.val);

  inorder(reverse ? root.left : root.right, target, stack, reverse);
};

export default closestKValues;
