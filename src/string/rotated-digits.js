/**
 * Rotated Digits
 *
 * X is a good number if after rotating each digit individually by 180 degrees,
 * we get a valid number that is different from X.  Each digit must be rotated - we cannot choose to leave it alone.
 *
 * A number is valid if each digit remains a digit after rotation. 0, 1, and 8 rotate to themselves; 2 and 5
 * rotate to  * each other; 6 and 9 rotate to each other, and the rest of the numbers do not rotate to any
 * other number and become  * invalid.
 *
 * Now given a positive number N, how many numbers X from 1 to N are good?
 *
 * Example:
 * Input: 10
 * Output: 4
 *
 * Explanation:
 * There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
 *
 * Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.
 *
 * Note:
 *
 * N  will be in range [1, 10000].
 */

/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = N => {
  // Count how many n in [1, N] are good.
  let ans = 0;

  for (let n = 1; n <= N; ++n) {
    if (isGood(n, false)) ans++;
  }

  return ans;
};

// Return true if n is good.
// The flag is true iff we have an occurrence of 2, 5, 6, 9.
const isGood = (n, flag) => {
  if (n == 0) return flag;

  const d = n % 10;

  if (d == 3 || d == 4 || d == 7) {
    return false;
  }

  if (d == 0 || d == 1 || d == 8) {
    return isGood(Math.floor(n / 10), flag);
  }

  return isGood(Math.floor(n / 10), true);
};

export { rotatedDigits };
