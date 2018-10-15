/**
 * Strobogrammatic Number
 *
 * A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
 *
 * Write a function to determine if a number is strobogrammatic. The number is represented as a string.
 *
 * Example 1:
 *
 * Input:  "69"
 * Output: true
 * Example 2:
 *
 * Input:  "88"
 * Output: true
 * Example 3:
 *
 * Input:  "962"
 * Output: false
 */

/**
 * @param {string} num
 * @return {boolean}
 */
const isStrobogrammatic = num => {
  const map = new Map([['6', '9'], ['9', '6'], ['0', '0'], ['1', '1'], ['8', '8']]);

  for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
    if (!map.has(num[i]) || map.get(num[i]) !== num[j]) {
      return false;
    }
  }

  return true;
};

export { isStrobogrammatic };
