/**
 * Given a binary tree, count the number of uni-value subtrees.
 *
 * A Uni-value subtree means all nodes of the subtree have the same value.
 *
 * For example:
 * Given binary tree,
 *               5
 *              / \
 *             1   5
 *            / \   \
 *           5   5   5
 * return 4.
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const countUnivalSubtrees = root => {
  const isUnivalSubtree = root => {
    if (!root) {
      return true;
    }

    const { left, right } = root;
    const isLeftUnival = isUnivalSubtree(left);
    const isRightUnival = isUnivalSubtree(right);

    if (!isLeftUnival || !isRightUnival) {
      return false;
    }

    if ((left && root.val !== left.val) || (right && root.val !== right.val)) {
      return false;
    }

    count++;

    return true;
  };

  let count = 0;
  isUnivalSubtree(root);
  return count;
};

export default countUnivalSubtrees;
