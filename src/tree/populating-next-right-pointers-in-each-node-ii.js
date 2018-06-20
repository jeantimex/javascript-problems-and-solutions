/**
 * Follow up for problem "Populating Next Right Pointers in Each Node".
 *
 * What if the given tree could be any binary tree? Would your previous solution still work?
 *
 * Note:
 *
 * You may only use constant extra space.
 * For example,
 * Given the following binary tree,
 *
 *          1
 *        /  \
 *       2    3
 *      / \    \
 *     4   5    7
 *
 * After calling your function, the tree should look like:
 *
 *          1 -> NULL
 *        /  \
 *       2 -> 3 -> NULL
 *      / \    \
 *     4-> 5 -> 7 -> NULL
 *
 * The idea is level order with two loops, outter loop
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = root => {
  const getNext = root => {
    while (root) {
      if (root.left) {
        return root.left;
      }
      if (root.right) {
        return root.right;
      }
      root = root.next;
    }
    return null;
  };

  if (!root) return;

  while (root) {
    let current = root;

    while (current) {
      const { left, right, next } = current;

      if (left) {
        left.next = right ? right : getNext(next);
      }
      if (right) {
        right.next = getNext(next);
      }

      current = next;
    }

    root = getNext(root);
  }
};

export default connect;
