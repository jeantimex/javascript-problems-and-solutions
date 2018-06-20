/**
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that
 * every key of the original BST is changed to the original key plus sum of
 * all keys greater than the original key in BST.
 *
 * Example:
 *
 * Input: The root of a Binary Search Tree like this:
 *               5
 *             /   \
 *            2     13
 *
 * Output: The root of a Greater Tree like this:
 *              18
 *             /   \
 *           20     13
 */

import TreeNode from 'common/tree-node';

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const convertBST = root => {
  let last = 0;

  const helper = root => {
    if (!root) {
      return null;
    }

    helper(root.right);

    root.val += last;
    last = root.val;

    helper(root.left);

    return root;
  };

  return helper(root);
};

export default convertBST;
