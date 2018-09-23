/**
 * Palindromic Substrings
 *
 * Given a string, your task is to count how many palindromic substrings in this string.
 *
 * The substrings with different start indexes or end indexes are counted as different substrings even they consist of
 * same characters.
 *
 * Example 1:
 *
 * Input: "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 *
 * Example 2:
 *
 * Input: "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 *
 * Note:
 * The input string length won't exceed 1000.
 */

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = s => {
  const extendPalindrome = (s, left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  };

  if (!s || s.length === 0) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // i is the mid point
    extendPalindrome(s, i, i); // odd length;
    extendPalindrome(s, i, i + 1); // even length
  }

  return count;
};

export { countSubstrings };
