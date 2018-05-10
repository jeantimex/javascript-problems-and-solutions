/**
 * Longest Palindromic Subsequence
 *
 * Given a string s, find the longest palindromic subsequence's length in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Example 1:
 * Input:
 *
 * "bbbab"
 * Output:
 * 4
 * One possible longest palindromic subsequence is "bbbb".
 * Example 2:
 * Input:
 *
 * "cbbd"
 * Output:
 * 2
 * One possible longest palindromic subsequence is "bb".
 */

/**
 * Recursion
 *
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseqR = s => {
  return helper(s, 0, s.length - 1);
};

const helper = (s, l, h) => {
  if (l === h) {
    return 1;
  }

  if (s[l] === s[h] && l + 1 === h) {
    return 2;
  }

  if (s[l] === s[h]) {
    return 2 + helper(s, l + 1, h - 1);
  }

  return Math.max(helper(s, l, h - 1), helper(s, l + 1, h));
};

/**
 * Dynamic Programming
 *
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = s => {
  const n = s.length;
  const table = Array(n)
    .fill()
    .map(() => Array(n));

  for (let i = 0; i < n; i++) {
    table[i][i] = 1;
  }

  for (let len = 2; len <= n; len++) {
    for (let i = 0; i < n - k + 1; i++) {
      const j = i + len - 1;

      if (s[i] === s[j] && len === 2) {
        table[i][j] = 2;
      } else if (s[i] === s[j]) {
        table[i][j] = 2 + table[i + 1][j - 1];
      } else {
        table[i][j] = Math.max(table[i + 1][j], table[i][j - 1]);
      }
    }
  }

  return table[0][n - 1];
};

export { longestPalindromeSubseqR, longestPalindromeSubseq };
