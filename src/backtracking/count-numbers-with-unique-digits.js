/**
 * Count Numbers with Unique Digits
 *
 * Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.
 *
 * Example:
 * Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100,
 * excluding [11,22,33,44,55,66,77,88,99])
 */

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigitsR = n => {
  const result = [];
  backtracking(n, 0, 0, new Set(), result);
  return result.length;
};

const backtracking = (n, start, num, set, result) => {
  if (start === n) {
    result.push(num);
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (!set.has(i) || num === 0) {
      set.add(i);
      backtracking(n, start + 1, num * 10 + i, set, result);
      set.delete(i);
    }
  }
};

/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = n => {
  if (n === 0) {
    return 1;
  }

  let count = 10;
  let unique = 9;
  let ok = 9;

  while (n-- > 1 && ok > 0) {
    unique = unique * ok;
    count += unique;
    ok--;
  }

  return count;
};

export { countNumbersWithUniqueDigitsR, countNumbersWithUniqueDigits };
