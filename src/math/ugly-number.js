/**
 * Ugly Number
 *
 * Write a program to check whether a given number is an ugly number.
 *
 * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
 *
 * Example 1:
 *
 * Input: 6
 * Output: true
 * Explanation: 6 = 2 × 3
 * Example 2:
 *
 * Input: 8
 * Output: true
 * Explanation: 8 = 2 × 2 × 2
 * Example 3:
 *
 * Input: 14
 * Output: false
 * Explanation: 14 is not ugly since it includes another prime factor 7.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
const isUgly = num => {
  for (let p of [2, 3, 5]) {
    while (num && num % p == 0) num /= p;
  }
  return num === 1;
};

export { isUgly };
