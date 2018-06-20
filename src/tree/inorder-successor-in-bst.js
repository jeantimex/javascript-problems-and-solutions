/**
 * Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
 *
 * Note: If the given node has no in-order successor in the tree, return null.
 */

/**
 * Recursion
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessorR = (root, p) => {
  if (!root) {
    return null;
  }

  if (root.val <= p.val) {
    return inorderSuccessorR(root.right, p);
  }

  const successor = inorderSuccessorR(root.left, p);
  return successor ? successor : root;
};

/**
 * Iterative
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessor = (root, p) => {
  if (p.right) {
    return getMinNode(p.right);
  }

  let successor = null;

  while (root) {
    if (p.val >= root.val) {
      root = root.right;
    } else {
      successor = root;
      root = root.left;
    }
  }

  return successor;
};

const getMinNode = root => {
  while (root.left) {
    root = root.left;
  }
  return root;
};

export { inorderSuccessor, inorderSuccessorR };
