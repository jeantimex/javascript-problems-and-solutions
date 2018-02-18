/**
 * Shortest Palindrome
 *
 * Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it.
 * Find and return the shortest palindrome you can find by performing this transformation.
 *
 * For example:
 *
 * Given "aacecaaa", return "aaacecaaa".
 *
 * Given "abcd", return "dcbabcd".
 */

/**
 * KMP algorithm to get the longest prefix and suffix count
 *
 * @param {string} s
 * @return {number[]}
 */
const getLPS = s => {
  const lps = Array(s.length).fill(0);
  let i = 1;
  let len = 0;

  while (i < s.length) {
    if (s[i] === s[len]) {
      lps[i++] = ++len;
    } else if (len === 0) {
      lps[i++] = 0;
    } else {
      len = lps[len - 1];
    }
  }

  return lps;
};

/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = s => {
  const r = s
    .split('')
    .reverse()
    .join('');
  const lps = getLPS(s + '|' + r);
  return r.substring(0, r.length - lps[lps.length - 1]) + s;
};

export default shortestPalindrome;
