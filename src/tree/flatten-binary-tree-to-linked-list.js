/**
 * Given a binary tree, flatten it to a linked list in-place.
 *
 * For example,
 * Given
 *
 *          1
 *         / \
 *        2   5
 *       / \   \
 *      3   4   6
 *
 * The flattened tree should look like:
 *
 *    1
 *     \
 *      2
 *       \
 *        3
 *         \
 *          4
 *           \
 *            5
 *             \
 *              6
 */

/**
 * Preorder
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const preorder = root => {
  const helper = current => {
    if (!current) {
      return;
    }

    if (last) {
      last.left = null;
      last.right = current;
    }

    last = current;

    const left = current.left;
    const right = current.right;

    helper(left);
    helper(right);
  };

  let last = null;
  helper(root);
};

/**
 * Postorder
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = root => {
  const helper = root => {
    if (!root) {
      return;
    }

    helper(root.right);
    helper(root.left);

    root.left = null;
    root.right = last;

    last = root;
  };

  let last = null;
  helper(root);
};

export { flatten, preorder };
