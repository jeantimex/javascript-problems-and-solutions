/**
 * Maximum Product of Word Lengths
 *
 * Given a string array words, find the maximum value of length(word[i]) * length(word[j]) where the two words do not
 * share common letters. You may assume that each word will contain only lower case letters. If no such two words exist,
 *  return 0.
 *
 * Example 1:
 *
 * Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
 * Output: 16
 * Explanation: The two words can be "abcw", "xtfn".
 *
 * Example 2:
 *
 * Input: ["a","ab","abc","d","cd","bcd","abcd"]
 * Output: 4
 * Explanation: The two words can be "ab", "cd".
 *
 * Example 3:
 *
 * Input: ["a","aa","aaa","aaaa"]
 * Output: 0
 * Explanation: No such pair of words.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = words => {
  const n = words.length;
  const values = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let ch of words[i]) {
      values[i] |= 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0));
    }
  }

  let max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((values[i] & values[j]) === 0 && words[i].length * words[j].length > max) {
        max = words[i].length * words[j].length;
      }
    }
  }

  return max;
};

export { maxProduct };
