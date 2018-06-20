/**
 * Given a list of strings words representing an English Dictionary, find the longest word in words
 * that can be built one character at a time by other words in words. If there is more than one
 * possible answer, return the longest word with the smallest lexicographical order.
 *
 * If there is no answer, return the empty string.
 *
 * Example 1:
 *
 * Input:
 * words = ["w","wo","wor","worl", "world"]
 *
 * Output: "world"
 *
 * Explanation:
 * The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
 *
 * Example 2:
 *
 * Input:
 * words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
 *
 * Output: "apple"
 *
 * Explanation:
 * Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is
 * lexicographically smaller than "apply".
 *
 * Note:
 *
 * - All the strings in the input will only contain lowercase letters.
 * - The length of words will be in the range [1, 1000].
 * - The length of words[i] will be in the range [1, 30].
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
      this.addWord(word);
    });
  }

  addWord(word) {
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
}

const filter = node => {
  return Object.keys(node.children)
    .filter(c => !!node.children[c].word)
    .map(c => node.children[c])
    .sort((a, b) => b.word.localeCompare(a.word));
};

/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = words => {
  const trie = new Trie(words);
  let result = null;

  // Perform BFS
  let queue = filter(trie.root);

  while (queue.length > 0) {
    const node = queue.shift();
    const next = filter(node);

    result = node.word;
    queue = queue.concat(next);
  }

  return result;
};

export default longestWord;
