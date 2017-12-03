import { assert } from 'chai';
import wordSquares from '../word-squares';

describe('Word Squares', () => {
  const testCases = [
    [['area', 'lead', 'wall', 'lady', 'ball'], [['wall', 'area', 'lead', 'lady'], ['ball', 'area', 'lead', 'lady']]],
    [['abat', 'baba', 'atan', 'atal'], [['baba', 'abat', 'baba', 'atan'], ['baba', 'abat', 'baba', 'atal']]],
    [['abcd', 'bnrt', 'crmy', 'dtye'], [['abcd', 'bnrt', 'crmy', 'dtye']]],
    [['abcd', 'bnrt', 'crm', 'dt'], [['abcd', 'bnrt', 'crm', 'dt']]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the word squares`, () => {
      const words = testCase[0];
      const expected = testCase[1];
      const actual = wordSquares(words);
      assert.deepEqual(actual, expected);
    });
  });
});
