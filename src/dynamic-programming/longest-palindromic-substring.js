/**
 * Longest Palindromic Substring
 *
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example:
 *
 * Input: "babad"
 *
 * Output: "bab"
 *
 * Note: "aba" is also a valid answer.
 * Example:
 *
 * Input: "cbbd"
 *
 * Output: "bb"
 *
 */

/**
 * Solution 1: Dynamic Programming
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  const n = s.length;

  const dp = [];
  for (let i = 0; i < n; i++) {
    dp[i] = [];
  }

  let result = '';
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      dp[i][j] = s[i] === s[j] && (j - i <= 2 || dp[i + 1][j - 1]);

      if (dp[i][j] && j - i + 1 > result.length) {
        result = s.substring(i, j + 1);
      }
    }
  }

  return result;
};

/**
 * Solution 2: Expand Around Center
 *
 * @param {string} s
 * @return {string}
 */
const longestPalindromeExpand = s => {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
};

const expandAroundCenter = (s, left, right) => {
  let L = left;
  let R = right;

  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }

  return R - L - 1;
};

export { longestPalindrome, longestPalindromeExpand };
