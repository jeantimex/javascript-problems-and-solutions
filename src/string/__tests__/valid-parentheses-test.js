import { assert } from 'chai';
import isValid from '../valid-parentheses';

describe('Valid Parentheses', () => {
  const testCases = [['()', true], ['()[]{}', true], ['((', false], ['()(', false], [')', false]];

  testCases.forEach((testCase, index) => {
    it(`should validate the parentheses ${index}`, () => {
      const [s, expected] = testCase;
      const actual = isValid(s);
      assert.equal(actual, expected);
    });
  });
});
