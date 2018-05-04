import { assert } from 'chai';
import { countNumbersWithUniqueDigitsR, countNumbersWithUniqueDigits } from '../count-numbers-with-unique-digits';

describe('Count Numbers with Unique Digits', () => {
  const testCases = [[0, 1], [1, 10], [2, 91], [3, 739], [4, 5275], [5, 32491]];

  testCases.forEach(([n, expected], index) => {
    it(`should count numbers with unique digits for ${n} using backtracking`, () => {
      const actual = countNumbersWithUniqueDigitsR(n);
      assert.equal(actual, expected);
    });

    it(`should count numbers with unique digits for ${n} without backtracking`, () => {
      const actual = countNumbersWithUniqueDigits(n);
      assert.equal(actual, expected);
    });
  });
});
