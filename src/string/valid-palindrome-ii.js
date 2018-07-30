/**
 * Valid Palindrome II
 *
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 *
 * Example 1:
 *
 * Input: "aba"
 * Output: True
 *
 * Example 2:
 *
 * Input: "abca"
 * Output: True
 *
 * Explanation: You could delete the character 'c'.
 *
 * Note:
 *
 * - The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = s => {
  let i = -1;
  let j = s.length;

  while (++i < --j) {
    if (s[i] !== s[j]) {
      return isPalindromic(s, i, j + 1) || isPalindromic(s, i - 1, j);
    }
  }

  return true;
};

const isPalindromic = (s, i, j) => {
  while (++i < --j) {
    if (s[i] !== s[j]) return false;
  }
  return true;
};

export { validPalindrome };
