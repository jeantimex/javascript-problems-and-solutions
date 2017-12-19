import { assert } from 'chai';
import { isMatch, isMatchDP } from '../wildcard-matching';

describe('Wildcard Matching', () => {
  const testCases = [
    ['a', 'a', true],
    ['a', 'a*', true],
    ['aa', 'a*', true],
    ['aa', 'a', false],
    ['aa', 'aa', true],
    ['aa', '?*', true],
    ['ab', '?*', true],
    ['aab', 'c*a*b', false],
    ['aaaaaaba', 'a*******b', false],
  ];

  testCases.forEach((testCase, index) => {
    it(`should check wildcard matching using recursive solution ${index}`, () => {
      const [s, p, expected] = testCase;
      const actual = isMatch(s, p);
      assert.equal(actual, expected);
    });

    it(`should check wildcard matching using dynamic programming solution ${index}`, () => {
      const [s, p, expected] = testCase;
      const actual = isMatchDP(s, p);
      assert.equal(actual, expected);
    });
  });
});
