/**
 * Implement strStr()
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 *
 * Example 1:
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 * Example 2:
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr()
 * and Java's indexOf().
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j === needle.length) return i;
      if (i + j === haystack.length) return -1;
      if (needle[j] !== haystack[i + j]) break;
    }
  }
};

/**
 * KMP Algorithm
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStrKMP = (haystack, needle) => {
  const m = haystack.length;
  const n = needle.length;

  if (n === 0) {
    return 0;
  }

  const lps = getLPS(needle);

  let i = 0;
  let j = 0;

  while (i < m) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
      // found the needle in haystack!
      if (j === n) {
        return i - n;
      }
    } else if (j > 0) {
      j = lps[j - 1];
    } else {
      i++;
    }
  }

  return -1;
};

/**
 * KMP algorithm to get the longest prefix and suffix count
 *
 * len = lps[len - 1];
 *
 * From:
 *             len-1
 *             |
 * lps: ++++++++x________++++++++y
 *              |                |
 *              len              i
 * To:
 *
 * lps: ****y________________****y
 *          |                    |
 *          len                  i
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
    } else if (len > 0) {
      len = lps[len - 1];
    } else {
      i++;
    }
  }

  return lps;
};

export { strStr, strStrKMP };
