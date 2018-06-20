/**
 * Concatenated Words
 *
 * Given a list of words (without duplicates), please write a program that returns all concatenated words in the given list of words.
 *
 * A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
 *
 * Example:
 * Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
 *
 * Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
 *
 * Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
 *  "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
 * "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".
 *
 * Note:
 * The number of elements of the given array will not exceed 10,000
 * The length sum of elements in the given array will not exceed 600,000.
 * All the input string will only include lower case letters.
 * The returned elements order does not matter.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

class Trie {
  constructor(words) {
    this.root = new TrieNode();

    words.forEach(word => {
      this.insert(word);
    });
  }

  insert(word) {
    if (!word) {
      return;
    }

    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
    }

    current.word = word;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        return 0;
      }

      current = current.children[c];

      if (current.word) {
        const rest = word.substr(current.word.length);

        if (this.search(rest) > 0) {
          return 2;
        }
      }
    }

    return current.word === word ? 1 : 0;
  }
}

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = words => {
  const results = [];
  const trie = new Trie(words);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const count = trie.search(word);

    if (count > 1) {
      results.push(word);
    }
  }

  return results;
};

export default findAllConcatenatedWordsInADict;
