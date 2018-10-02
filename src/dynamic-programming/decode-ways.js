/**
 * Decode Ways
 *
 * A message containing letters from A-Z is being encoded to numbers using the following mapping:
 *
 * 'A' -> 1
 * 'B' -> 2
 * ...
 * 'Z' -> 26
 * Given a non-empty string containing only digits, determine the total number of ways to decode it.
 *
 * Example 1:
 *
 * Input: "12"
 * Output: 2
 * Explanation: It could be decoded as "AB" (1 2) or "L" (12).
 *
 * Example 2:
 *
 * Input: "226"
 * Output: 3
 * Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
 */

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = s => {
  if (!s || s.length === 0 || s[0] === '0') {
    return 0;
  }

  const n = s.length;

  const dp = Array(n + 1);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    let count = 0;

    if (s[i - 1] > '0') {
      count = dp[i - 1];
    }

    if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] <= '6')) {
      count += dp[i - 2];
    }

    dp[i] = count;
  }

  return dp[n];
};

export { numDecodings };
