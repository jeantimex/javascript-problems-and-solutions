import { assert } from 'chai';
import findWords from '../word-search-ii';

describe('Word Search II', () => {
  const testCases = [
    [[['a']], ['a'], ['a']],
    [
      [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']],
      ['oath', 'pea', 'eat', 'rain', 'aaa', 'ooo'],
      ['aaa', 'eat', 'oath'],
    ],
  ];

  testCases.forEach((testCase, index) => {
    it(`should search the words inside the board ${index}`, () => {
      const board = testCase[0];
      const words = testCase[1];
      const expected = testCase[2];
      const actual = findWords(board, words).sort();
      assert.deepEqual(actual, expected);
    });
  });
});
