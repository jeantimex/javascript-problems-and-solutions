/**
 * One Edit Distance
 *
 * Given two strings s and t, determine if they are both one edit distance apart.
 *
 * Note:
 *
 * There are 3 possiblities to satisify one edit distance apart:
 *
 * Insert a character into s to get t
 * Delete a character from s to get t
 * Replace a character of s to get t
 *
 * Example 1:
 *
 * Input: s = "ab", t = "acb"
 * Output: true
 * Explanation: We can insert 'c' into s to get t.
 *
 * Example 2:
 *
 * Input: s = "cab", t = "ad"
 * Output: false
 * Explanation: We cannot get t from s by only one step.
 *
 * Example 3:
 *
 * Input: s = "1203", t = "1213"
 * Output: true
 * Explanation: We can replace '0' with '1' to get t.
 *
 * There're 3 possibilities to satisfy one edit distance apart:
 *
 * 1) Replace 1 char:
 *    s: a B c
 *    t: a D c
 *
 * 2) Delete 1 char from s:
 *    s: a D  b c
 *    t: a    b c
 *
 * 3) Delete 1 char from t
 *    s: a   b c
 *    t: a D b c
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = (s, t) => {
  for (let i = 0; i < Math.min(s.length, t.length); i++) {
    if (s[i] !== t[i]) {
      if (s.length === t.length) {
        // s has the same length as t, so the only possibility is replacing one char in s and t
        return s.substring(i + 1) === t.substring(i + 1);
      } else if (s.length < t.length) {
        // t is longer than s, so the only possibility is deleting one char from t
        return s.substring(i) === t.substring(i + 1);
      } else {
        // s is longer than t, so the only possibility is deleting one char from s
        return t.substring(i) === s.substring(i + 1);
      }
    }
  }

  // All previous chars are the same, the only possibility is deleting the end char in the longer one of s and t
  return Math.abs(s.length - t.length) === 1;
};

export { isOneEditDistance };
