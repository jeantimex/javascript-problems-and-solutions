/**
 * K Edit Distance
 *
 * Given a list of word and a target word, output all the words for each the edit distance
 * with the target no greater than k.
 *
 * e.g. [abc, abd, abcd, adc], target “ac”, k = 1,
 *
 * output = [abc, adc]
 *
 * Naive Solution:
 * A naive solution would be, for each word in the list, calculate the edit distance with the target word.
 * If it is equal or less than k, output to the result list. If we assume that the average length of the
 * words is m, and the total number of words in the list is n, the total time complexity is O(n * m^2).
 *
 * Trie tree:
 * The problem with the previous solution is if the given list of the words is like ab, abc, abcd,
 * each time we need to repeatedly calculate the edit distance with the target word. If we can combine
 * the prefix of all words together, we can save lots of time.
 *
 * The basic idea is using dynamic programming with a Trie.
 *
 * For example:
 * words = ["cs", "ct", "cby"]
 * target = "cat"
 * k = 1
 *
 * The Trie will look like this:
 *
 *            c
 *          / | \
 *         b  s  t
 *        /
 *       y
 *
 * The search path is c -> cb -> (cby) -> cs -> ct
 *
 * We maintain a DP table for each character or Trie node:
 *
 *           c a t
 *       [ 0 1 2 3 ] <- prev_dist
 * -> c  [ 1 0 1 2 ] <- curr_dist
 *    cb [ 2 1 1 2 ]
 *    cs [ 2 1 1 2 ]
 *    ct [ 2 1 1 1 ]
 *
 * The last number at the end of each row is the edit distance between the target and the current character.
 * If that value is <= k, then add the word to the result.
 */

/**
 * @param {string[]} words
 * @param {string} traget
 * @param {number} k
 * @return {string[]}
 */
const kEditDistance = (words, target, k) => {
  const result = [];
  const trie = new Trie(words);

  // The edit distance from curr to target
  const dist = Array(target.length + 1);
  for (let i = 0; i < dist.length; i++) {
    dist[i] = i;
  }

  search(target, k, trie.root, dist, '', result);

  return result;
};

const search = (target, k, root, prevDist, curr, result) => {
  if (root.isWord) {
    if (prevDist[target.length] <= k) {
      result.push(curr);
    } else {
      return;
    }
  }

  for (let c in root.children) {
    const currDist = Array(target.length + 1);
    currDist[0] = curr.length + 1;

    for (let i = 1; i < prevDist.length; i++) {
      if (target[i - 1] === c) {
        currDist[i] = prevDist[i - 1];
      } else {
        currDist[i] = Math.min(Math.min(prevDist[i - 1], prevDist[i]), currDist[i - 1]) + 1;
      }
    }

    search(target, k, root.children[c], currDist, curr + c, result);
  }
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

    current.isWord = true;
  }
}

class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

export { kEditDistance };
