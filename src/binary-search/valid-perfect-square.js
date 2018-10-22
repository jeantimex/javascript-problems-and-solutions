/**
 * Valid Perfect Square
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Note: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 *
 * Input: 16
 * Output: true
 * Example 2:
 *
 * Input: 14
 * Output: false
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = num => {
  let lo = 0;
  let hi = num;

  while (lo <= hi) {
    const mid = (lo + hi) >>> 1;

    if (mid * mid === num) {
      return true;
    } else if (mid * mid < num) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return false;
};

export { isPerfectSquare };
