/**
 * First Unique Character in a String
 *
 * Given a string, find the first non-repeating character in it and return it's index.
 * If it doesn't exist, return -1.
 *
 * Examples:
 *
 * s = "leetcode"
 * return 0.
 *
 * s = "loveleetcode",
 * return 2.
 */

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => {
  const map = {};

  // Count the characters
  for (let c of s) {
    map[c] = ~~map[c] + 1;
  }

  // Find the unique character
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

export default firstUniqChar;
