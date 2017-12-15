import { assert } from 'chai';
import exist from '../word-search';

describe('Word Search', () => {
  const testCases = [
    [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED', true],
    [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE', true],
    [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB', false],
  ];

  testCases.forEach((testCase, index) => {
    it(`should search for the word ${index}`, () => {
      const board = testCase[0];
      const word = testCase[1];
      const expected = testCase[2];
      const actual = exist(board, word);
      assert.equal(actual, expected);
    });
  });
});
