/**
 * Given a set of words (without duplicates), find all word squares you can build from them.
 *
 * A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).
 *
 * For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.
 *
 * b a l l
 * a r e a
 * l e a d
 * l a d y
 *
 * Note:
 * There are at least 1 and at most 1000 words.
 * All words will have the exact same length.
 * Word length is at least 1 and at most 5.
 * Each word contains only lowercase English alphabet a-z.
 *
 * Example 1:
 *
 * Input:
 * ["area","lead","wall","lady","ball"]
 *
 * Output:
 * [
 *   [ "wall",
 *     "area",
 *     "lead",
 *     "lady"
 *   ],
 *   [ "ball",
 *     "area",
 *     "lead",
 *     "lady"
 *   ]
 * ]
 *
 * Explanation:
 * The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
 * Example 2:
 *
 * Input:
 * ["abat","baba","atan","atal"]
 *
 * Output:
 * [
 *   [ "baba",
 *     "abat",
 *     "baba",
 *     "atan"
 *   ],
 *   [ "baba",
 *     "abat",
 *     "baba",
 *     "atal"
 *   ]
 * ]
 *
 * Example 3:
 *
 * Input:
 * ['abcd', 'bnrt', 'crm', 'dt']
 *
 * Output:
 * [
 *   [ "abcd",
 *     "bnrt",
 *     "crm",
 *     "dt"
 *   ]
 * ]
 *
 * Explanation:
 * The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.words = []; // A list of words that have the same prefix
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
    let current = this.root;

    for (let i = 0; i < word.length; i++) {
      const c = word[i];

      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }

      current = current.children[c];
      current.words.push(word); // Record this word for the current prefix
    }
  }

  search(solution, results) {
    const count = solution.length;
    const length = solution[0].length;

    if (count === length) {
      return results.push(solution.slice()); // Found enough words
    }

    // Step 1. Get the prefix for the next word
    let prefix = '';
    for (let i = 0; i < count; i++) {
      prefix += solution[i][count] ? solution[i][count] : '';
    }

    // Step 2. Search the word with prefix in the trie
    let current = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const c = prefix[i];

      if (!current.children[c]) {
        return;
      }

      current = current.children[c];
    }

    // Step 3. Try each possible word
    const words = current.words;
    for (let j = 0; j < words.length; j++) {
      solution.push(words[j]); // Try this word
      this.search(solution, results);
      solution.pop(); // Backtracking
    }
  }
}

/**
 * @param {string[]} words
 * @return {string[][]}
 */
const wordSquares = words => {
  const results = [];
  const trie = new Trie(words);

  for (let i = 0; i < words.length; i++) {
    trie.search([words[i]], results);
  }

  return results;
};

export default wordSquares;
