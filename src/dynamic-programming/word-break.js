/**
 * Word Break
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Note:
 *
 * - The same word in the dictionary may be reused multiple times in the segmentation.
 * - You may assume the dictionary does not contain duplicate words.
 *
 * Example 1:
 *
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet code".
 *
 * Example 2:
 *
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
 *              Note that you are allowed to reuse a dictionary word.
 *
 * Example 3:
 *
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 */

/**
 * Recursion
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreakR = (s, wordDict) => {
  if (s === '') {
    return true;
  }

  for (let i = 1; i <= s.length; i++) {
    const prefix = s.substring(0, i);
    const rest = s.substring(i);

    if (wordDict.includes(prefix) && wordBreakR(rest, wordDict)) {
      return true;
    }
  }

  return false;
};

/**
 * Dynamic Programming
 *
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  const table = Array(s.length + 1).fill(false);

  table[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const rest = s.substring(j, i);

      if (table[j] && wordDict.includes(rest)) {
        table[i] = true;
        break;
      }
    }
  }

  return table[s.length];
};

export { wordBreakR, wordBreak };
