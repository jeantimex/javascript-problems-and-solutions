/**
 * Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.
 *
 * You may assume each number in the sequence is unique.
 *
 * Follow up:
 * Could you do it using only constant space complexity?
 */

/**
 * @param {number[]} preorder
 * @return {boolean}
 */
const verifyPreorder = preorder => {
  let low = Number.MIN_SAFE_INTEGER;
  const stack = [];

  for (let i = 0; i < preorder.length; i++) {
    const p = preorder[i];

    if (p < low) {
      return false;
    }

    while (stack.length && p > stack[stack.length - 1]) {
      low = stack.pop();
    }

    stack.push(p);
  }

  return true;
};

export default verifyPreorder;
