import { assert } from 'chai';
import generateParenthesis from '../generate-parentheses';

describe('Generate Parentheses', () => {
  const testCases = [[3, ['((()))', '(()())', '(())()', '()(())', '()()()']]];

  testCases.forEach((testCase, index) => {
    it(`should generate parentheses ${index}`, () => {
      const n = testCase[0];
      const expected = testCase[1];
      const actual = generateParenthesis(n);
      assert.deepEqual(actual, expected);
    });
  });
});
