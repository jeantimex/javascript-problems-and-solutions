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
  // Step 1. Build the words set
  const dict = new Set(wordList);

  if (!dict.has(endWord)) {
    return 0;
  }

  let head = new Set([beginWord]);
  let tail = new Set([endWord]);
  let distance = 2;

  dict.delete(beginWord);
  dict.delete(endWord);

  while (head.size > 0 && tail.size > 0) {
    if (head.size > tail.size) {
      [head, tail] = [tail, head];
    }

    const temp = new Set();

    for (let [word] of head.entries()) {
      const characters = word.split('');

      for (let i = 0; i < characters.length; i++) {
        const char = characters[i];

        for (let j = 0; j < 26; j++) {
          characters[i] = String.fromCharCode(97 + j);
          const newWord = characters.join('');

          if (newWord === word) {
            continue;
          }

          if (tail.has(newWord)) {
            return distance;
          }

          if (dict.has(newWord)) {
            dict.delete(newWord);
            temp.add(newWord);
          }
        }

        characters[i] = char;
      }
    }

    distance++;

    head = temp;
  }

  return 0;
};

export { ladderLength };
