import { assert } from 'chai';
import shortestPalindrome from '../shortest-palindrome';

describe('Shortest Palindrome', () => {
  const testCases = [['aacecaaa', 'aaacecaaa'], ['abcd', 'dcbabcd']];

  testCases.forEach(([s, expected], index) => {
    it(`should get the shortest palindrome ${index}`, () => {
      const actual = shortestPalindrome(s);
      assert.equal(actual, expected);
    });
  });
});
