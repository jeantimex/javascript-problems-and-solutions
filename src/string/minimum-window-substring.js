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
  // Step 1. Build a map and count characters in t
  const map = {};
  for (let c of t) {
    map[c] = ~~map[c] + 1;
  }

  let i = 0;
  let j = 0;

  let start = 0;
  let size = Infinity;
  let counter = t.length;

  // Step 2. Try to find the window in s with two pointers i, j
  while (j < s.length) {
    if (map[s[j++]]-- > 0) {
      counter--; // Found a character in t
    }

    // While the current window contains all the characters
    while (counter === 0) {
      if (j - i < size) {
        size = j - i;
        start = i;
      }

      if (map[s[i++]]++ === 0) {
        counter++; // Make it invalid
      }
    }
  }

  return size === Infinity ? '' : s.substr(start, size);
};

export default minWindow;
