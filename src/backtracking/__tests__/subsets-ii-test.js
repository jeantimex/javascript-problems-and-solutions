import { assert } from 'chai';
import subsetsWithDup from '../subsets-ii';

const sorter = (a, b) => {
  if (a.length === b.length) {
    return a.toString().localeCompare(b.toString());
  }
  return a.length - b.length;
};

describe('Subsets II', () => {
  const testCases = [
    [[1, 2, 3], [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]],
    [[1, 2, 2], [[2], [1], [1, 2, 2], [2, 2], [1, 2], []]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the subsets using back tracking ${index}`, () => {
      const nums = testCase[0];
      const expected = testCase[1];
      const actual = subsetsWithDup(nums);
      assert(actual.sort(sorter), expected.sort(sorter));
    });
  });
});
