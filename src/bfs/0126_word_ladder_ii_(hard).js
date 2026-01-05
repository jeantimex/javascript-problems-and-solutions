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
 * Solution I - Bidirectional BFS
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = (beginWord, endWord, wordList) => {
  const dict = new Set(wordList);

  if (!dict.has(endWord)) {
    return [];
  }

  // Hash set for both ends
  const set1 = new Set([beginWord]);
  const set2 = new Set([endWord]);

  // Use a map to help construct the final result
  const map = new Map();

  // Build the map
  helper(dict, set1, set2, map, false);

  const res = [];

  // Recursively build the final result
  getPath(beginWord, endWord, map, [beginWord], res);

  return res;
};

const helper = (dict, set1, set2, map, flip) => {
  if (set1.size === 0) {
    return false;
  }

  if (set1.size > set2.size) {
    return helper(dict, set2, set1, map, !flip);
  }

  // remove words on current both ends from the dict
  for (let [str] of set1.entries()) {
    dict.delete(str);
  }
  for (let [str] of set2.entries()) {
    dict.delete(str);
  }

  // as we only need the shortest paths
  // we use a boolean value help early termination
  let done = false;

  // set for the next level
  const set = new Set();

  // for each string in set 1
  for (let [str] of set1.entries()) {
    const chars = str.split('');

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];

      // change one character for every position
      for (let j = 0; j < 26; j++) {
        chars[i] = String.fromCharCode(97 + j);

        const word = chars.join('');

        // make sure we construct the tree in the correct direction
        const key = flip ? word : str;
        const val = flip ? str : word;

        const list = map.has(key) ? map.get(key) : [];

        if (set2.has(word)) {
          done = true;

          list.push(val);
          map.set(key, list);
        }

        if (!done && dict.has(word)) {
          set.add(word);

          list.push(val);
          map.set(key, list);
        }
      }

      chars[i] = char;
    }
  }

  // early terminate if done is true
  return done || helper(dict, set2, set, map, !flip);
};

const getPath = (start, end, map, sol, res) => {
  if (start === end) {
    res.push(sol.slice());
    return;
  }

  // need this check in case the diff between start and end happens to be one
  // e.g "a", "c", {"a", "b", "c"}
  if (!map.has(start)) {
    return;
  }

  for (let word of map.get(start)) {
    sol.push(word);
    getPath(word, end, map, sol, res);
    sol.pop();
  }
};

/**
 * Solution II - Single-Directional BFS
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders_BFS = (beginWord, endWord, wordList) => {
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

export { findLadders, findLadders_BFS };
