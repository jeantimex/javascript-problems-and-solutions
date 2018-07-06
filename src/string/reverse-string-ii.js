/**
 * Reverse String II
 *
 * Given a string and an integer k, you need to reverse the first k characters
 * for every 2k characters counting from the start of the string.
 * If there are less than k characters left, reverse all of them.
 * If there are less than 2k but greater than or equal to k characters,
 * then reverse the first k characters and left the other as original.
 *
 * Example:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 *
 * Restrictions:
 * The string consists of lower English letters only.
 * Length of the given string and k will in the range [1, 10000]
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
  const arr = s.split('');

  for (let i = 0; i < arr.length; i += 2 * k) {
    // try to reverse as much as we can within k characters
    reverse(arr, i, Math.min(i + k - 1, arr.length - 1));
  }

  return arr.join('');
};

const reverse = (arr, i, j) => {
  while (i < j) [arr[i++], arr[j--]] = [arr[j], arr[i]];
};
