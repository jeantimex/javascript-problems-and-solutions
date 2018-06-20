/**
 * Given a binary search tree and a node in it, find the in-order predecessor of that node in the BST.
 *
 * Note: If the given node has no in-order predecessor in the tree, return null.
 */

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderPredecessorR = (root, p) => {
  if (!root) {
    return null;
  }

  if (root.val >= p.val) {
    return inorderPredecessorR(root.left, p);
  }

  const predecessor = inorderPredecessorR(root.right, p);
  return predecessor ? predecessor : root;
};

/**
 * Iterative
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderPredecessor = (root, p) => {
  if (p.left) {
    return getMaxNode(p.left);
  }

  let predecessor = null;

  while (root) {
    if (p.val <= root.val) {
      root = root.left;
    } else {
      predecessor = root;
      root = root.right;
    }
  }

  return predecessor;
};

const getMaxNode = root => {
  while (root.right) {
    root = root.right;
  }
  return root;
};

export { inorderPredecessor, inorderPredecessorR };
