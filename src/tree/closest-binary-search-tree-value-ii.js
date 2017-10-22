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
var closestKValues = function(root, target, k) {
  var result = [];
  var successors = [];
  var predecessors = [];

  inorder(root, target, successors, true);
  inorder(root, target, predecessors, false);

  while (k--) {
    if (successors.length === 0) {
      result.push(predecessors.pop());
    } else if (predecessors.length === 0) {
      result.push(successors.pop());
    } else if (successors[successors.length - 1] - target < target - predecessors[predecessors.length - 1]) {
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
var inorder = function(root, target, stack, reverse) {
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
