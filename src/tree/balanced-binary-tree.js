/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more than 1.
 */

const isBalanced = root => {
  const getHeight = root => {
    if (!root) {
      return 0;
    }

    const leftHeight = getHeight(root.left);
    if (leftHeight < 0) {
      return -1;
    }

    const rightHeight = getHeight(root.right);
    if (rightHeight < 0) {
      return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  };

  return getHeight(root) >= 0;
};

export default isBalanced;
