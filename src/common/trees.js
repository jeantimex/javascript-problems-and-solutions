import TreeNode from 'common/tree-node';

/**
 *        1
 *       / \
 *      2   3
 */
export const tree1 = (() => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  return root;
})();

/**
 *        1
 *         \
 *          2
 */
export const tree2 = (() => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  return root;
})();

/**
 *        1
 *         \
 *          2
 *         / \
 *        3   4
 */
export const tree3 = (() => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  root.right.right = new TreeNode(4);
  return root;
})();

/**
 *        1
 *         \
 *          2
 *         /
 *        3
 */
export const tree4 = (() => {
  const root = new TreeNode(1);
  root.right = new TreeNode(2);
  root.right.left = new TreeNode(3);
  return root;
})();

/**
 *        1
 *       /
 *      2
 *     /
 *    3
 */
export const tree5 = (() => {
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.left = new TreeNode(3);
  return root;
})();
