/**
 * Word Ladder II
 *
 * Given two words (beginWord and endWord), and a dictionary's word list,
 * find all shortest transformation sequence(s) from beginWord to endWord, such that:
 *
 * 1. Only one letter can be changed at a time
 * 2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
 *
 * Note:
 *
 * - Return an empty list if there is no such transformation sequence.
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
 * Output:
 * [
 *   ["hit","hot","dot","dog","cog"],
 *   ["hit","hot","lot","log","cog"]
 * ]
 *
 * Example 2:
 *
 * Input:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 *
 * Output: []
 *
 * Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
  const result = [];
  const dict = new Set(wordList);
  const queue = [[beginWord]];
  const words = new Set();

  let level = 1;
  let minLevel = Number.MAX_SAFE_INTEGER;

  while (queue.length > 0) {
    const path = queue.shift();

    // Clean up previous level
    if (path.length > level) {
      for (let [word] of words.entries()) {
        dict.delete(word);
      }

      words.clear();

      level = path.length;

      if (level > minLevel) {
        break;
      }
    }

    const characters = path[path.length - 1].split('');

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];

      for (let j = 0; j < 26; j++) {
        characters[i] = String.fromCharCode(97 + j);
        const newWord = characters.join('');

        if (!dict.has(newWord)) {
          continue;
        }

        words.add(newWord);
        const newPath = path.slice();
        newPath.push(newWord);

        if (newWord === endWord) {
          result.push(newPath);
          minLevel = level;
        } else {
          queue.push(newPath);
        }
      }

      characters[i] = char;
    }
  }

  return result;
};

export { findLadders };
