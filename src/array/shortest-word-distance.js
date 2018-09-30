/**
 * Shortest Word Distance
 *
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the
 * list.
 *
 * Example:
 * Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 *
 * Input: word1 = “coding”, word2 = “practice”
 * Output: 3
 *
 * Input: word1 = "makes", word2 = "coding"
 * Output: 1
 *
 * Note:
 * You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const shortestDistance = (words, word1, word2) => {
  let p1 = -1;
  let p2 = -1;
  let min = Infinity;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      p1 = i;
    } else if (words[i] === word2) {
      p2 = i;
    }

    if (p1 !== -1 && p2 !== -1) {
      min = Math.min(min, Math.abs(p1 - p2));
    }
  }

  return min;
};

export { shortestDistance };
