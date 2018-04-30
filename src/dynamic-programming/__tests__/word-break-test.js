import { assert } from 'chai';
import { wordBreakR, wordBreak } from '../word-break';

describe('Word Break', () => {
  const testCases = [
    ['leetcode', ['leet', 'code'], true],
    ['applepenapple', ['apple', 'pen'], true],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], false],
  ];

  testCases.forEach(([s, wordDict, expected], index) => {
    it(`should solve the word break problem using recursion ${index}`, () => {
      const actual = wordBreakR(s, wordDict);
      assert.equal(actual, expected);
    });

    it(`should solve the word break problem using dynamic programming ${index}`, () => {
      const actual = wordBreak(s, wordDict);
      assert.equal(actual, expected);
    });
  });
});
