/**
 * Power of Two
 *
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Example 1:
 *
 * Input: 1
 * Output: true
 * Explanation: 20 = 1
 * Example 2:
 *
 * Input: 16
 * Output: true
 * Explanation: 24 = 16
 * Example 3:
 *
 * Input: 218
 * Output: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_I = n => {
  if (n < 1) {
    return false;
  }

  while (n % 2 === 0) {
    n = Math.floor(n / 2);
  }

  return n === 1;
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo_II = n => n > 0 && (n & (n - 1)) === 0;

export { isPowerOfTwo_I, isPowerOfTwo_II };
