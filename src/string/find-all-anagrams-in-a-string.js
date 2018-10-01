/**
 * Find All Anagrams in a String
 *
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
 *
 * Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,
 * 100.
 *
 * The order of output does not matter.
 *
 * Example 1:
 *
 * Input:
 * s: "cbaebabacd" p: "abc"
 *
 * Output:
 * [0, 6]
 *
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of "abc".
 *
 * Example 2:
 *
 * Input:
 * s: "abab" p: "ab"
 *
 * Output:
 * [0, 1, 2]
 *
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  // Step 1. Build a map and count characters in p
  const map = {};
  for (let c of p) {
    map[c] = ~~map[c] + 1;
  }

  let i = 0;
  let j = 0;

  let start = 0;
  let counter = p.length;
  let result = [];

  // Step 2. Try to find the window in s with two pointers i, j
  while (j < s.length) {
    if (map[s[j++]]-- > 0) {
      counter--; // Found a character in t
    }

    // While the current window contains all the characters
    while (counter === 0) {
      if (j - i === p.length) {
        result.push(i);
      }

      if (map[s[i++]]++ === 0) {
        counter++; // Make it invalid
      }
    }
  }

  return result;
};

export { findAnagrams };
