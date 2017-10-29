/**
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same
 * structure and node values with a subtree of s. A subtree of s is a tree consists of
 * a node in s and all of this node's descendants. The tree s could also be considered
 * as a subtree of itself.
 *
 * Example 1:
 * Given tree s:
 *
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 * Given tree t:
 *    4
 *   / \
 *  1   2
 * Return true, because t has the same structure and node values with a subtree of s.
 * Example 2:
 * Given tree s:
 *
 *      3
 *     / \
 *    4   5
 *   / \
 *  1   2
 *     /
 *    0
 *
 * Given tree t:
 *    4
 *   / \
 *  1   2
 *
 * Return false.
 */

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = (s, t) => {
  const stack = [s];

  while (stack.length) {
    const node = stack.pop();

    if (node.val === t.val && isSameTree(node, t)) {
      return true;
    }

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return false;
};

const isSameTree = (s, t) => {
  if (!s && !t) {
    return true;
  }

  if (!s || !t || s.val !== t.val) {
    return false;
  }

  return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
};

export default isSubtree;
