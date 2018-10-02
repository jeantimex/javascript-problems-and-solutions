/**
 * Longest Common Prefix
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Note:
 * All given inputs are in lowercase letters a-z.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  if (!strs || strs.length === 0) {
    return '';
  }

  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 1; i < strs.length; i++) {
      if (j >= strs[i].length || strs[i][j] !== strs[0][j]) {
        return strs[0].substring(0, j);
      }
    }
  }

  return strs[0];
};

export { longestCommonPrefix };
