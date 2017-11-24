/**
 * Add and Search Word - Data structure design
 *
 * Design a data structure that supports the following two operations:
 *
 * void addWord(word)
 * bool search(word)
 * search(word) can search a literal word or a regular expression string containing only
 * letters a-z or .. A . means it can represent any one letter.
 *
 * For example:
 *
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 *
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export default class WordDictionary {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    var current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }

    current.isEnd = true;
  }

  search(word) {
    var search = function(current, level) {
      // Cannot search for the word
      if (!current || (level === word.length && !current.isEnd)) {
        return false;
      }

      if (level === word.length && current.isEnd) {
        return true;
      }

      if (word[level] === '.') {
        for (let i = 0; i < 26; i++) {
          var ch = String.fromCharCode(97 + i);

          if (search(current.children[ch], level + 1)) {
            return true;
          }
        }

        return false;
      }

      return search(current.children[word[level]], level + 1);
    };

    return search(this.root, 0);
  }
}
