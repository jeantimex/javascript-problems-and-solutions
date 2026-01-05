import { assert } from 'chai';
import { wordBreak } from '../word-break-ii';

describe('Word Break II', () => {
  const testCases = [
    ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog'], ['cat sand dog', 'cats and dog']],
    [
      'pineapplepenapple',
      ['apple', 'pen', 'applepen', 'pine', 'pineapple'],
      ['pine apple pen apple', 'pineapple pen apple', 'pine applepen apple'],
    ],
    ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat'], []],
  ];

  testCases.forEach(([s, wordDict, expected], index) => {
    it(`should solve the word break problem ${index}`, () => {
      const actual = wordBreak(s, wordDict);
      assert.deepEqual(actual.sort(), expected.sort());
    });
  });
});
