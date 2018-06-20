/**
 * Minimum Window Substring
 *
 * Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
 *
 * For example,
 * S = "ADOBECODEBANC"
 * T = "ABC"
 * Minimum window is "BANC".
 *
 * Note:
 * If there is no such window in S that covers all characters in T, return the empty string "".
 *
 * If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let result = '';

  // Step 1. Build a map and count characters in t
  const map = {};
  for (let c of t) {
    map[c] = ~~map[c] + 1;
  }

  // Step 2. Scan through s and try to keep a window [i, j] that contains all the characters in t
  let count = 0;
  for (let i = 0, j = 0; j < s.length; j++) {
    if (s[j] in map) {
      // (1) If char in s exists in t, increase counter
      if (map[s[j]] > 0) {
        count++;
      }
      map[s[j]] = map[s[j]] - 1;

      // (2) Found a window, and try to move i forward and search for a smaller window
      while (count === t.length) {
        // First, save the current result
        if (!result || j - i + 1 < result.length) {
          //console.log(i, j);
          result = s.substring(i, j + 1);
        }

        // Then move i forward
        if (s[i] in map) {
          map[s[i]] = map[s[i]] + 1;

          if (map[s[i]] > 0) {
            count--;
          }
        }

        i++;
      }
    }
  }

  return result;
};

export default minWindow;
