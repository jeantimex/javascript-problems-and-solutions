/**
 * Sentence Similarity II
 *
 * Given two sentences words1, words2 (each represented as an array of strings), and a list of similar
 * word pairs pairs, determine if two sentences are similar.
 *
 * For example, words1 = ["great", "acting", "skills"] and words2 = ["fine", "drama", "talent"] are similar,
 * if the similar word pairs are pairs = [["great", "good"], ["fine", "good"], ["acting","drama"],
 * ["skills","talent"]].
 *
 * Note that the similarity relation is transitive. For example, if "great" and "good" are similar, and
 * "fine" and "good" are similar, then "great" and "fine" are similar.
 *
 * Similarity is also symmetric. For example, "great" and "fine" being similar is the same as "fine" and
 * "great" being similar.
 *
 * Also, a word is always similar with itself. For example, the sentences words1 = ["great"], words2 =
 * ["great"], pairs = [] are similar, even though there are no specified similar word pairs.
 *
 * Finally, sentences can only be similar if they have the same number of words. So a sentence like words1 =
 * ["great"] can never be similar to words2 = ["doubleplus","good"].
 *
 * Note:
 *
 * The length of words1 and words2 will not exceed 1000.
 * The length of pairs will not exceed 2000.
 * The length of each pairs[i] will be 2.
 * The length of each words[i] and pairs[i][j] will be in the range [1, 20].
 */

/**
 * Solution: Union Find
 *
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 */
const areSentencesSimilarTwo = (words1, words2, pairs) => {
  if (words1.length !== words2.length) {
    return false;
  }

  // Build the hash map for union find
  const map = new Map();
  for (let pair of pairs) {
    const parent1 = find(map, pair[0]);
    const parent2 = find(map, pair[1]);

    if (parent1 !== parent2) {
      map.set(parent1, parent2);
    }
  }

  for (let i = 0; i < words1.length; i++) {
    const word1 = words1[i];
    const word2 = words2[i];

    if (word1 !== word2 && find(map, word1) !== find(map, word2)) {
      return false;
    }
  }

  return true;
};

const find = (map, word) => {
  if (!map.has(word)) {
    map.set(word, word);
  }
  return word === map.get(word) ? word : find(map, map.get(word));
};

export { areSentencesSimilarTwo };
