import { assert } from 'chai';
import topKFrequent from '../top-k-frequent-words';

describe('Top K Frequent Words', () => {
  const testCases = [
    [['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2, ['i', 'love']],
    [['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'], 4, ['the', 'is', 'sunny', 'day']],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the top k frequent words ${index}`, () => {
      const words = testCase[0];
      const k = testCase[1];
      const expected = testCase[2];
      const actual = topKFrequent(words, k);
      assert.deepEqual(actual, expected);
    });
  });
});
