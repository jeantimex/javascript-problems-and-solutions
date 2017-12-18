import { assert } from 'chai';
import { isMatch, isMatchDP } from '../regular-expression-matching';

describe('Regular Expression Matching', () => {
  const testCases = [
    ['a', 'a', true],
    ['a', 'a*', true],
    ['aa', 'a*', true],
    ['aa', 'a', false],
    ['aa', 'aa', true],
    ['aa', '.*', true],
    ['ab', '.*', true],
  ];

  testCases.forEach((testCase, index) => {
    it(`should check regular expression matching using recursive solution ${index}`, () => {
      const [s, p, expected] = testCase;
      const actual = isMatch(s, p);
      assert.equal(actual, expected);
    });

    it(`should check regular expression matching using dynamic programming ${index}`, () => {
      const [s, p, expected] = testCase;
      const actual = isMatchDP(s, p);
      assert.equal(actual, expected);
    });
  });
});
