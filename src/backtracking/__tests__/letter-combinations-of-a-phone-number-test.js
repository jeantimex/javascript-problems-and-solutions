import { assert } from 'chai';
import letterCombinations from '../letter-combinations-of-a-phone-number';

describe('Letter Combinations of a Phone Number', () => {
  const testCases = [['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']], ['', []]];

  testCases.forEach((testCase, index) => {
    it(`should get the letter combinations ${index}`, () => {
      const [digits, expected] = testCase;
      const actual = letterCombinations(digits);
      assert.deepEqual(actual, expected);
    });
  });
});
