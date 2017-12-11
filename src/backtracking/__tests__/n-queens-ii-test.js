import { assert } from 'chai';
import totalNQueens from '../n-queens-ii';

describe('N-Queens', () => {
  const testCases = [[4, 2], [6, 4], [8, 92]];

  testCases.forEach((testCase, index) => {
    it(`should get the n-queens ${index}`, () => {
      const n = testCase[0];
      const expected = testCase[1];
      const actual = totalNQueens(n);
      assert.deepEqual(actual, expected);
    });
  });
});
