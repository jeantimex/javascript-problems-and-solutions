/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 *
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 *
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * But the following [1,2,2,null,3,null,3] is not:
 *     1
 *    / \
 *   2   2
 *    \   \
 *    3    3
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 */

/**
 * Recursion Solution
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = root => {
  if (!root) {
    return true;
  }

  const isMirror = (p, q) => {
    if (!p && !q) {
      return true;
    }
    if (!p || !q) {
      return false;
    }
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  };

  return isMirror(root.left, root.right);
};

/**
 * Preorder DFS Iterative Solution
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetricDFS = root => {
  if (!root) {
    return true;
  }

  const isMirror = (p, q) => {
    const s1 = [p];
    const s2 = [q];

    while (s1.length > 0 || s2.length > 0) {
      const n1 = s1.pop();
      const n2 = s2.pop();

      // Two null nodes, let's continue
      if (!n1 && !n2) continue;

      // Return false as long as there is a mismatch
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      s1.push(n1.left);
      s1.push(n1.right);

      s2.push(n2.right);
      s2.push(n2.left);
    }

    return true;
  };

  return isMirror(root.left, root.right);
};

/**
 * BFS Iterative Solution
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetricBFS = root => {
  if (!root) {
    return true;
  }

  const isMirror = (s, t) => {
    const q1 = [s];
    const q2 = [t];

    while (q1.length > 0 || q2.length > 0) {
      const n1 = q1.shift();
      const n2 = q2.shift();

      if (!n1 && !n2) continue;

      if (!n1 || !n2 || n1.val !== n2.val) return false;

      q1.push(n1.left);
      q1.push(n1.right);

      q2.push(n2.right);
      q2.push(n2.left);
    }

    return true;
  };

  return isMirror(root.left, root.right);
};

export { isSymmetric, isSymmetricDFS, isSymmetricBFS };
