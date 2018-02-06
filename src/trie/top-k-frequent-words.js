/**
 * Top K Frequent Words
 *
 * Given a non-empty list of words, return the k most frequent elements.
 *
 * Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency,
 * then the word with the lower alphabetical order comes first.
 *
 * Example 1:
 * Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
 * Output: ["i", "love"]
 *
 * Explanation: "i" and "love" are the two most frequent words.
 *     Note that "i" comes before "love" due to a lower alphabetical order.
 *
 * Example 2:
 * Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
 * Output: ["the", "is", "sunny", "day"]
 *
 * Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
 *     with the number of occurrence being 4, 3, 2 and 1 respectively.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Input words contain only lowercase letters.
 *
 * Follow up:
 * Try to solve it in O(n log k) time and O(n) extra space.
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = (words, k) => {
  const result = [];
  const map = new Map();
  const queue = new PriorityQueue({
    comparator: (a, b) => {
      if (a.count < b.count) {
        return 1;
      } else if (a.count > b.count) {
        return -1;
      }
      return a.key.localeCompare(b.key);
    },
  });

  // Count the words
  words.forEach(word => {
    if (!map.has(word)) {
      map.set(word, 0);
    }
    map.set(word, map.get(word) + 1);
  });

  // Put the counted words to a max heap
  map.forEach((count, key) => {
    queue.offer({ key, count });
  });

  // Dequeue the max heap to results
  while (k-- > 0) {
    const { key } = queue.poll();
    result.push(key);
  }

  return result;
};

export default topKFrequent;
