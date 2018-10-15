/**
 * Boggle Game
 *
 * Given a 2D board and a list of words from the dictionary, find all words in the board.
 *
 * Each word must be constructed from letters of sequentially adjacent cell, where "adjacent"
 * cells are those horizontally or vertically neighboring. The same letter cell may not be
 * used more than once in a word.
 *
 * For example,
 * Given words = ["oath","pea","eat","rain"] and board =
 *
 * [
 *   ['o','a','a','n'],
 *   ['e','t','a','e'],
 *   ['i','h','k','r'],
 *   ['i','f','l','v']
 * ]
 *
 * Return ["eat","oath"].
 * Note:
 * You may assume that all inputs are consist of lowercase letters a-z.
 *
 * click to show hint.
 *
 * You would need to optimize your backtracking to pass the larger test. Could you stop
 * backtracking earlier?
 *
 * If the current candidate does not exist in all words' prefix, you could stop backtracking
 * immediately. What kind of data structure could answer such query efficiently? Does a hash
 * table work? Why or why not? How about a Trie? If you would like to learn how to implement
 * a basic trie, please work on this problem: Implement Trie (Prefix Tree) first.
 *
 * Solution
 *
 * Intuitively, start from every cell and try to build a word in the dictionary.
 * Backtracking (dfs) is the powerful way to exhaust every possible ways.
 *
 * Apparently, we need to do pruning when current character is not in any word.
 *
 * 1. How do we instantly know the current character is invalid? HashMap?
 * 1. How do we instantly know what's the next valid character? LinkedList?
 * 2. But the next character can be chosen from a list of characters. "Mutil-LinkedList"?
 *
 * Combing them, Trie is the natural choice. Notice that:
 *
 * 1. TrieNode is all we need. search and startsWith are useless.
 * 2. No need to store character at TrieNode. c.next[i] != null is enough.
 * 3. Never use c1 + c2 + c3. Use StringBuilder.
 * 4. No need to use O(n^2) extra space visited[m][n].
 * 5. No need to use StringBuilder. Storing word itself at leaf node is enough.
 * 6. No need to use HashSet to de-duplicate. Use "one time search" trie.
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = (board, words) => {
  const result = [];
  const trie = new Trie(words);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, trie.root, result);
    }
  }

  return result;
};

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

const dfs = (board, i, j, current, result) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }

  const c = board[i][j];

  if (c === '#' || !current.children[c]) {
    return;
  }

  current = current.children[c];

  if (current.word) {
    // Found one
    result.push(current.word);
    // De duplicate
    current.word = null;
  }

  board[i][j] = '#'; // Mark as visited

  for (let k = 0; k < 4; k++) {
    dfs(board, i + dx[k], j + dy[k], current, result);
  }

  board[i][j] = c; // Backtracking
};

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
      if (!(word[i] in current.children)) {
        current.children[word[i]] = new TrieNode();
      }
      current = current.children[word[i]];
    }

    current.word = word;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.word = null;
  }
}

export default findWords;
