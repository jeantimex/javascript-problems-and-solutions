import { assert } from 'chai';
import { longestPalindrome, longestPalindromeExpand } from '../longest-palindromic-substring';

describe('Longest Palindromic Substring', () => {
  const testCases = [['babad', ['aba', 'bab']], ['aaaa', ['aaaa']]];

  testCases.forEach((testCase, index) => {
    it(`should get the longest palindromic substring using dynamic programming`, () => {
      const s = testCase[0];
      const expected = testCase[1];
      const actual = longestPalindrome(s);
      assert.include(expected, actual);
    });

    it(`should get the longest palindromic substring using expanding around center solution`, () => {
      const s = testCase[0];
      const expected = testCase[1];
      const actual = longestPalindromeExpand(s);
      assert.include(expected, actual);
    });
  });
});
