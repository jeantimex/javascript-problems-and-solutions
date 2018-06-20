/**
 * In English, we have a concept called root, which can be followed by some
 * other words to form another longer word - let's call this word successor.
 * For example, the root an, followed by other, which can form another word another.
 *
 * Now, given a dictionary consisting of many roots and a sentence.
 * You need to replace all the successor in the sentence with the root forming it.
 * If a successor has many roots can form it, replace it with the root with the
 * shortest length.
 *
 * You need to output the sentence after the replacement.
 *
 * Example 1:
 *
 * Input: dict = ["cat", "bat", "rat"]
 * sentence = "the cattle was rattled by the battery"
 * Output: "the cat was rat by the bat"
 *
 * Note:
 * - The input will only have lower-case letters.
 * - 1 <= dict words number <= 1000
 * - 1 <= sentence words number <= 1000
 * - 1 <= root length <= 100
 * - 1 <= sentence words length <= 1000
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.word = false;
  }
}

class Trie {
  constructor(dict) {
    this.root = new TrieNode();

    dict.forEach(word => {
      this.insert(word);
    });
  }

  insert(word) {
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
        return word;
      }
      current = current.children[c];
      if (current.word) {
        return current.word;
      }
    }
    return word;
  }
}

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
const replaceWords = (dict, sentence) => {
  const trie = new Trie(dict);
  const original = sentence.split(' ');
  const result = original.map(word => trie.search(word));
  return result.join(' ');
};

export default replaceWords;
