import { assert } from 'chai';
import generateBrackets from '../generate-parentheses-ii';

describe('Generate Parentheses II', () => {
  const testCases = [
    [
      [1, 1, 1],
      [
        '()[]{}',
        '()[{}]',
        '(){[]}',
        '(){}[]',
        '([]){}',
        '([]{})',
        '([{}])',
        '({[]})',
        '({})[]',
        '({}[])',
        '[()]{}',
        '[(){}]',
        '[({})]',
        '[](){}',
        '[]({})',
        '[]{()}',
        '[]{}()',
        '[{()}]',
        '[{}()]',
        '[{}]()',
        '{()[]}',
        '{()}[]',
        '{([])}',
        '{[()]}',
        '{[]()}',
        '{[]}()',
        '{}()[]',
        '{}([])',
        '{}[()]',
        '{}[]()',
      ],
    ],
    [
      [2, 1, 0],
      [
        '(())[]',
        '(()[])',
        '(([]))',
        '()()[]',
        '()([])',
        '()[()]',
        '()[]()',
        '([()])',
        '([]())',
        '([])()',
        '[(())]',
        '[()()]',
        '[()]()',
        '[](())',
        '[]()()',
      ],
    ],
    [[0, 0, 0], []],
  ];

  testCases.forEach((testCase, index) => {
    it(`should generate brackets ${index}`, () => {
      const [n, m, k] = testCase[0];
      const expected = testCase[1];
      const actual = generateBrackets(n, m, k);
      assert.deepEqual(actual, expected);
    });
  });
});
