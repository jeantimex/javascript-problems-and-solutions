/**
 * Divide Two Integers
 *
 * Divide two integers without using multiplication, division and mod operator.
 *
 * If it is overflow, return MAX_INT.
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  let p = Math.abs(dividend);
  let q = Math.abs(divisor);

  let result = 0;

  while (p >= q) {
    let count = 1;
    let base = q;

    while (p >> 1 >= base) {
      base = base << 1;
      count = count << 1;
    }

    result += count;
    p -= base;
  }

  return dividend > 0 === divisor > 0 ? result : -result;
};

export default divide;
