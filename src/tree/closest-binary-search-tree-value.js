/**
 * Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.
 * 
 * Note:
 * Given target value is a floating point.
 * You are guaranteed to have only one unique value in the BST that is closest to the target.
 */

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
const closestValue = (root, target) => {
  let closest = root.val;

  while (root) {
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
      closest = root.val;
    }

    if (root.val === target) {
      break;
    }

    root = target > root.val ? root.right : root.left;
  }

  return closest;
};

export default closestValue;
