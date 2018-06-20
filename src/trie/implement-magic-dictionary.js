/**
 * Implement Magic Dictionary
 *
 * Implement a magic directory with buildDict, and search methods.
 *
 * For the method buildDict, you'll be given a list of non-repetitive
 * words to build a dictionary.
 *
 * For the method search, you'll be given a word, and judge whether
 * if you modify exactly one character into another character in this
 * word, the modified word is in the dictionary you just built.
 *
 * Example 1:
 * Input: buildDict(["hello", "leetcode"]), Output: Null
 * Input: search("hello"), Output: False
 * Input: search("hhllo"), Output: True
 * Input: search("hell"), Output: False
 * Input: search("leetcoded"), Output: False
 *
 * Note:
 * - You may assume that all the inputs are consist of lowercase letters a-z.
 * - For contest purpose, the test data is rather small by now. You could think
 *   about highly efficient algorithm after the contest.
 * - Please remember to RESET your class variables declared in class MagicDictionary,
 *   as static/class variables are persisted across multiple test cases.
 *   Please see here for more details.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class MagicDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Build a dictionary through a list of words
   * @param {string[]} dict
   * @return {void}
   */
  buildDict(dict) {
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
    current.isEnd = true;
  }

  /**
   * Returns if there is any word in the trie that equals to the given word
   * after modifying exactly one character
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < letters.length; j++) {
        const letter = letters[j];

        if (word[i] !== letter) {
          const modifiedWord = word.substr(0, i) + letter + word.substr(i + 1);

          if (this.match(modifiedWord)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  match(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      if (!current.children[c]) {
        return false;
      }
      current = current.children[c];
    }
    return current.isEnd;
  }
}

export default MagicDictionary;
