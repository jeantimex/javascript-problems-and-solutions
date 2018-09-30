/**
 * Isomorphic Strings
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No
 * two characters may map to the same character but a character may map to itself.
 *
 * Example 1:
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 *
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Note:
 * You may assume both s and t have the same length.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const map1 = {};
  const map2 = {};

  for (let i = 0; i < s.length; i++) {
    const a = s[i];
    const b = t[i];

    if ((map1[a] && map1[a] !== b) || (map2[b] && map2[b] !== a)) {
      return false;
    }

    map1[a] = b;
    map2[b] = a;
  }

  return true;
};

export { isIsomorphic };
