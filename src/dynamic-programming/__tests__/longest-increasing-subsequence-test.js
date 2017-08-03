import { assert } from 'chai';
import Solution from '../longest-increasing-subsequence';

describe('Longest Increasing Subsequence', () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  it('should return the correct result', () => {
    [
      {
        input: [10, 22, 9, 33, 21, 50, 41, 60],
        expected: 5,
      },
    ].forEach(test => {
      const result = solution.lis(test.input);
      assert.equal(result, test.expected);
    });
  });
});
