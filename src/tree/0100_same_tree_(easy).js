/**
 * Given two binary trees, write a function to check if they are equal or not.
 *
 * Two binary trees are considered equal if they are structurally identical and the nodes have the same value.
 *
 * Nothing fancy, just perform a preorder traversal for both trees at the same pace, simply return false whenever
 * we found a mismatch, otherwise continue the traversal on both left and right subtrees.
 *
 * Time complexity: O(n)
 * Space complexity: O(1) (ignore recursion stack, otherwise the height of the tree)
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

export default isSameTree;
