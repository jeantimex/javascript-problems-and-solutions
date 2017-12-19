/**
 * Wildcard Matching
 *
 * Implement wildcard pattern matching with support for '?' and '*'.
 *
 * '?' Matches any single character.
 * '*' Matches any sequence of characters (including the empty sequence).
 *
 * The matching should cover the entire input string (not partial).
 *
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 *
 * Some examples:
 * isMatch("aa","a") → false
 * isMatch("aa","aa") → true
 * isMatch("aaa","aa") → false
 * isMatch("aa", "*") → true
 * isMatch("aa", "a*") → true
 * isMatch("ab", "?*") → true
 * isMatch("aab", "c*a*b") → false
 */

/**
 * Recursive Solution
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  if (p === '') {
    return s === '';
  }

  if (s === '') {
    return p === '*'.repeat(p.length);
  }

  if (p[0] === '*') {
    return isMatch(s, p.substring(1)) || isMatch(s.substring(1), p);
  } else {
    return (s[0] === p[0] || p[0] === '?') && isMatch(s.substring(1), p.substring(1));
  }
};

/**
 * Dynamic Programming Solution
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatchDP = (s, p) => {
  const sLen = s.length;
  const pLen = p.length;

  const dp = [];
  for (let i = 0; i <= sLen; i++) {
    dp[i] = Array(pLen + 1).fill(false);
  }

  dp[0][0] = true;

  for (let j = 1; j <= pLen; j++) {
    dp[0][j] = p[j - 1] === '*' && dp[0][j - 1];
  }

  for (let i = 1; i <= sLen; i++) {
    for (let j = 1; j <= pLen; j++) {
      if (p[j - 1] === '*') {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else {
        dp[i][j] = (s[i - 1] === p[j - 1] || p[j - 1] === '?') && dp[i - 1][j - 1];
      }
    }
  }

  return dp[sLen][pLen];
};

export { isMatch, isMatchDP };
