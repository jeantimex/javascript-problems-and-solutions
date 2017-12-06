import { assert } from 'chai';
import { subsets_backtracking, subsets_iterative } from '../subsets';

const sorter = (a, b) => {
  if (a.length === b.length) {
    return a.toString().localeCompare(b.toString());
  }
  return a.length - b.length;
};

describe('Subsets', () => {
  const testCases = [[[1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]]];

  testCases.forEach((testCase, index) => {
    it(`should get the subsets using back tracking ${index}`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = subsets_backtracking(nums);
      assert(actual.sort(sorter), expected.sort(sorter));
    });

    it(`should get the subsets iteratively ${index}`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = subsets_iterative(nums);
      assert(actual.sort(sorter), expected.sort(sorter));
    });
  });
});
