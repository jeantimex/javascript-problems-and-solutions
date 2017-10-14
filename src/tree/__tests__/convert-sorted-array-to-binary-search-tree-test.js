import { assert } from 'chai';
import { serializeTree } from 'utils/tree-util';
import sortedArrayToBST from '../convert-sorted-array-to-binary-search-tree';

describe('Convert Sorted Array to Binary Search Tree', () => {
  const testCases = [[[1], '1'], [[1, 2, 3, 4], '2,1,3,null,null,null,4']];

  testCases.map((testCase, index) => {
    it(`should convert the sorted array ${index} to binary search tree`, () => {
      const nums = testCase[0];
      const actual = serializeTree(sortedArrayToBST(nums));
      const expected = testCase[1];
      assert.equal(actual, expected);
    });
  });
});
