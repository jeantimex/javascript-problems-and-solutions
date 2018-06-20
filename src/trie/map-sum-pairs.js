/**
 * Implement a MapSum class with insert, and sum methods.
 *
 * For the method insert, you'll be given a pair of (string, integer).
 * The string represents the key and the integer represents the value.
 * If the key already existed, then the original key-value pair will
 * be overridden to the new one.
 *
 * For the method sum, you'll be given a string representing the prefix,
 * and you need to return the sum of all the pairs' value whose key starts with the prefix.
 *
 * Example 1:
 * Input: insert("apple", 3), Output: Null
 * Input: sum("ap"), Output: 3
 * Input: insert("app", 2), Output: Null
 * Input: sum("ap"), Output: 5
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.val = null;
  }
}

/**
 * Initialize your data structure here.
 */
class MapSum {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} key
   * @param {number} val
   * @return {void}
   */
  insert(key, val) {
    let current = this.root;

    for (let i = 0; i < key.length; i++) {
      const c = key[i];
      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }
      current = current.children[c];
    }

    current.val = val;
  }

  /**
   * @param {string} prefix
   * @return {number}
   */
  sum(prefix) {
    let current = this.root;

    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];
      if (current.children[c]) {
        current = current.children[c];
      } else {
        return 0;
      }
    }

    return this.dfs(current);
  }

  dfs(current) {
    let sum = current.val === null ? 0 : current.val;

    Object.keys(current.children).forEach(c => {
      sum += this.dfs(current.children[c]);
    });

    return sum;
  }
}

export default MapSum;
