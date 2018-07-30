/**
 * Find the n-th digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...
 *
 * Note:
 * n is positive and will fit within the range of a 32-bit signed integer (n < 231).
 *
 * Example 1:
 *
 * Input:
 * 3
 *
 * Output:
 * 3
 * Example 2:
 *
 * Input:
 * 11
 *
 * Output:
 * 0
 *
 * Explanation:
 * The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
 */

/**
 * Straight forward way to solve the problem in 3 steps:
 * 1. find the length of the number where the nth digit is from
 * 2. find the actual number where the nth digit is from
 * 3. find the nth digit and return
 *
 * @param {number} n
 * @return {number}
 */
const findNthDigit = n => {
  let len = 1;
  let count = 9;
  let start = 1;

  while (n > len * count) {
    n -= len * count;
    len += 1;
    count *= 10;
    start *= 10;
  }

  start += Math.floor((n - 1) / len);

  const s = start + '';

  return parseInt(s[(n - 1) % len]);
};

export { findNthDigit };
