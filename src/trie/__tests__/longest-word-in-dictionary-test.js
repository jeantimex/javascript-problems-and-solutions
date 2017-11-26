import { assert } from 'chai';
import longestWord from '../longest-word-in-dictionary';

describe('Longest Word in Dictionary', () => {
  const testCases = [
    [
      [
        't',
        'ti',
        'tig',
        'tige',
        'tiger',
        'e',
        'en',
        'eng',
        'engl',
        'engli',
        'englis',
        'english',
        'h',
        'hi',
        'his',
        'hist',
        'histo',
        'histor',
        'history',
      ],
      'english',
    ],
    [['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'], 'apple'],
  ];

  testCases.forEach((testCase, index) => {
    it('should get the longest word in dictionary', () => {
      const words = testCase[0];
      const expected = testCase[1];
      const actual = longestWord(words);
      assert.equal(actual, expected);
    });
  });
});
