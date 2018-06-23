/**
 * Remove Duplicate Letters
 *
 * Given a string which contains only lowercase letters, remove duplicate letters so that
 * every letter appear once and only once. You must make sure your result is the smallest
 * in lexicographical order among all possible results.
 *
 * Also make sure you keep the original order.
 *
 * Example 1:
 *
 * Input: "bcabc"
 * Output: "abc"
 *
 * Example 2:
 *
 * Input: "cbacdcbc"
 * Output: "acdb"
 */

Object.defineProperty(Array.prototype, 'last', {
  get: function() {
    return this[this.length - 1];
  },
});

/**
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = s => {
  // Step 1. Build a counter map and count the characters
  const counter = {};
  for (let c of s) {
    counter[c] = ~~counter[c] + 1;
  }

  // Step 2. Go through the string
  const result = [];
  const visited = new Set();

  for (let c of s) {
    counter[c]--; // important

    if (visited.has(c)) {
      continue;
    }

    while (result.last > c && counter[result.last] > 0) {
      visited.delete(result.last);
      result.pop();
    }

    result.push(c);
    visited.add(c);
  }

  return result.join('');
};

export { removeDuplicateLetters };
