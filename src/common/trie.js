/**
 * Implement a trie with insert, search, and startsWith methods.
 *
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 * The following picture explains construction of trie using keys given in the example below,
 *
 *                        root
 *                     /   \    \
 *                     t   a     b
 *                     |   |     |
 *                     h   n     y
 *                     |   |  \  |
 *                     e   s  y  e
 *                  /  |   |
 *                  i  r   w
 *                  |  |   |
 *                  r  e   e
 *                         |
 *                         r
 *
 * Trie is an efficient information reTrieval data structure. Using Trie,
 * search complexities can be brought to optimal limit (key length).
 *
 * If we store keys in binary search tree, a well balanced BST will need time proportional to M * log N,
 * where M is maximum string length and N is number of keys in tree. Using Trie, we can search the key in O(M) time.
 *
 * However the penalty is on Trie storage requirements.
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }

      current = current.children[word[i]];
    }

    current.isEnd = true;
  }

  search(word) {
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in current.children)) {
        return false;
      }

      current = current.children[word[i]];
    }

    return current.isEnd;
  }

  startsWith(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      if (!(prefix[i] in current.children)) {
        return false;
      }

      current = current.children[prefix[i]];
    }

    return true;
  }
}
