import { assert } from 'chai';
import findMedianSortedArrays from '../median-of-two-sorted-arrays';

describe('Median of Two Sorted Arrays', () => {
  const testCases = [[[1, 2], [3, 4], 2.5], [[], [1], 1], [[1, 2, 3], [4, 5], 3], [[1, 2, 2], [1, 2, 3], 2]];

  testCases.forEach((testCase, index) => {
    it(`should get the median of two sorted arrays: ${index}`, () => {
      const [nums1, nums2, expected] = testCase;
      const actual = findMedianSortedArrays(nums1, nums2);
      assert.equal(actual, expected);
    });
  });
});
