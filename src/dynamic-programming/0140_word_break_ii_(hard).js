/**
 * Word Break II
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
 * add spaces in s to construct a sentence where each word is a valid dictionary word.
 * Return all such possible sentences.
 *
 * Note:
 *
 * The same word in the dictionary may be reused multiple times in the segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * Example 1:
 *
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 *   "cats and dog",
 *   "cat sand dog"
 * ]
 * Example 2:
 *
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 *   "pine apple pen apple",
 *   "pineapple pen apple",
 *   "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * Example 3:
 *
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = (s, wordDict) => {
  if (!canBreak(s, wordDict)) {
    return [];
  }

  const result = [];
  dfs(s, wordDict, 0, [], result);
  return result;
};

const dfs = (s, wordDict, start, solution, result) => {
  if (start === s.length) {
    result.push(solution.join(' '));
  }

  for (let end = start + 1; end <= s.length; end++) {
    const prefix = s.substring(start, end);

    if (wordDict.includes(prefix)) {
      solution.push(prefix);
      dfs(s, wordDict, end, solution, result);
      solution.pop();
    }
  }
};

const canBreak = (s, wordDict) => {
  const table = Array(s.length + 1).fill(false);

  table[0] = true; // Empty string can be formed from the dictionary

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

export { wordBreak };
