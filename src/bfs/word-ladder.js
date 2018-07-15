/**
 * Word Ladder
 *
 * Given two words (beginWord and endWord), and a dictionary's word list,
 * find the length of shortest transformation sequence from beginWord to endWord, such that:
 *
 * 1. Only one letter can be changed at a time.
 * 2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Note:
 *
 * Return 0 if there is no such transformation sequence.
 *
 * - All words have the same length.
 * - All words contain only lowercase alphabetic characters.
 * - You may assume no duplicates in the word list.
 * - You may assume beginWord and endWord are non-empty and are not the same.
 *
 * Example 1:
 *
 * Input:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 *
 * Output: 5
 *
 * Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * return its length 5.
 *
 * Example 2:
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: 0
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
 */

/**
 * Bidirectional BFS
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = (beginWord, endWord, wordList) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const len = beginWord.length;

  // Step 1. Build the words set
  const wordSet = new Set(wordList);

  // Sanity check
  if (!wordSet.has(endWord)) {
    return 0;
  }

  const queue1 = [beginWord, '#'];

  const visited1 = new Set([beginWord]);

  let level1 = 1;

  while (queue1.length > 0) {
    const str1 = queue1.shift();

    if (str1 !== '#') {
      const curr1 = str1.split('');

      for (let i = 0; i < len; i++) {
        const char1 = curr1[i];

        for (let j = 0; j < letters.length; j++) {
          curr1[i] = letters[j];

          const word1 = curr1.join('');

          if (word1 === endWord) {
            return level1 + 1;
          }

          if (wordSet.has(word1) && !visited1.has(word1)) {
            visited1.add(word1);
            queue1.push(word1);
          }
        }

        curr1[i] = char1;
      }
    } else {
      if (queue1.length > 0) {
        queue1.push('#');
        level1 += 1;
      }
    }
  }

  return 0;
};

export { ladderLength };

const beginWord = 'hit';
const endWord = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];

const result = ladderLength(beginWord, endWord, wordList);
console.log(result);
