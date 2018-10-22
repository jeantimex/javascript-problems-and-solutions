/**
 * Power of Four
 *
 * Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
 *
 * Example 1:
 *
 * Input: 16
 * Output: true
 *
 * Example 2:
 *
 * Input: 5
 * Output: false
 * Follow up: Could you solve it without loops/recursion?
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = num => {
  // 0x55555555 is to get rid of those power of 2 but not power of 4
  // so that the single 1 bit always appears at the odd position
  return num > 0 && (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
};

/**
 * Solution I: Using loops
 *
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour_I = num => {
  if (num > 1) {
    while (num % 4 === 0) {
      num /= 4;
    }
  }

  return num === 1;
};

export { isPowerOfFour, isPowerOfFour_I };
