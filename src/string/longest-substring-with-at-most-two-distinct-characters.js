/**
 * Longest Substring with At Most Two Distinct Characters
 *
 * Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
 *
 * Example 1:
 *
 * Input: "eceba"
 * Output: 3
 * Explanation: t is "ece" which its length is 3.
 * Example 2:
 *
 * Input: "ccaabbb"
 * Output: 5
 * Explanation: t is "aabbb" which its length is 5.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstringTwoDistinct = s => {
  const k = 2;
  const map = {};
  let max = 0;

  for (let i = 0, j = 0; j < s.length; j++) {
    // Step 1. count the character
    map[s[j]] = ~~map[s[j]] + 1;

    // Step 2. clean up the map if condition does't match
    while (Object.keys(map).length > k) {
      if (--map[s[i]] === 0) {
        delete map[s[i]]; // that character count has become 0
      }
      i++;
    }

    // Step 3. condition matched, now update the result
    max = Math.max(max, j - i + 1);
  }

  return max;
};

export { lengthOfLongestSubstringTwoDistinct };
