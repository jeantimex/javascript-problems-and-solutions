import { assert } from 'chai';
import palindromePairs from '../palindrome-pairs';

describe('Palindrome Pairs', () => {
  const testCases = [
    [['bat', 'tab', 'cat'], [[0, 1], [1, 0]]],
    [['abcd', 'dcba', 'lls', 's', 'sssll'], [[0, 1], [1, 0], [3, 2], [2, 4]]],
    [['a', ''], [[0, 1], [1, 0]]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the palindrome pairs ${index}`, () => {
      const words = testCase[0];
      const expected = testCase[1];
      const actual = palindromePairs(words);
      assert.deepEqual(actual.sort(), expected.sort());
    });
  });
});
