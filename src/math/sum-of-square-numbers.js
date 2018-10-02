/**
 * Sum of Square Numbers
 *
 * Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a^2 + b^2 = c.
 *
 * Example 1:
 *
 * Input: 5
 * Output: True
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 * Example 2:
 *
 * Input: 3
 * Output: False
 */

/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = c => {
  if (c < 0) {
    return false;
  }

  let lo = 0;
  let hi = Math.floor(Math.sqrt(c));

  while (lo <= hi) {
    const cur = lo * lo + hi * hi;

    if (cur < c) {
      lo++;
    } else if (cur > c) {
      hi--;
    } else {
      return true;
    }
  }

  return false;
};

export { judgeSquareSum };
