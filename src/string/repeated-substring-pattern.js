/**
 * Repeated Substring Pattern
 *
 * Given a non-empty string check if it can be constructed by taking a substring of it
 * and appending multiple copies of the substring together.
 * You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
 *
 * Example 1:
 *
 * Input: "abab"
 * Output: True
 *
 * Explanation: It's the substring "ab" twice.
 *
 * Example 2:
 *
 * Input: "aba"
 * Output: False
 *
 * Example 3:
 *
 * Input: "abcabcabcabc"
 * Output: True
 *
 * Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */

/**
 * Smart Solution
 *
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => {
  const str = s + s;
  return str.substring(1, str.length - 1).includes(s);
};

/**
 * Recursive Solution
 *
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = s => {
  const canRepeat = (s, rest) => {
    if (s.length > rest.length) {
      return false;
    }
    for (let i = 0; i < rest.length; i += s.length) {
      if (rest.substr(i, s.length) !== s) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (canRepeat(s.substr(0, i + 1), s.substr(i + 1))) {
      return true;
    }
  }

  return false;
};

export { repeatedSubstringPattern };
