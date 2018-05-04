import { assert } from 'chai';
import { letterCasePermutation } from '../letter-case-permutation';

describe('Letter Case Permutation', () => {
  const testCases = [['a1b2', ['a1b2', 'a1B2', 'A1b2', 'A1B2']], ['3z4', ['3z4', '3Z4']], ['12345', ['12345']]];

  testCases.forEach(([S, expected], index) => {
    it(`should generate the letter case permutation for ${S}`, () => {
      const actual = letterCasePermutation(S);
      assert.deepEqual(actual, expected);
    });
  });
});
