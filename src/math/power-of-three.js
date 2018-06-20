/**
 * Power of Three
 *
 * Given an integer, write a function to determine if it is a power of three.
 *
 * Example 1:
 *
 * Input: 27
 * Output: true
 * Example 2:
 *
 * Input: 0
 * Output: false
 * Example 3:
 *
 * Input: 9
 * Output: true
 * Example 4:
 *
 * Input: 45
 * Output: false
 * Follow up:
 * Could you do it without using any loop / recursion?
 */

/**
 * Solution I
 *
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree_I = n => {
  if (n < 1) {
    return false;
  }

  while (n % 3 === 0) {
    n = Math.floor(n / 3);
  }

  return n === 1;
};

/**
 * Solution II
 *
 * 1162261467 = 3^19
 *
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree_II = n => {
  return n > 0 && 1162261467 % n == 0;
};

export { isPowerOfThree_I, isPowerOfThree_II };
