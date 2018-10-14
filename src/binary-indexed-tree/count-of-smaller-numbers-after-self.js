/**
 * Count of Smaller Numbers After Self
 *
 * You are given an integer array nums and you have to return a new counts array.
 * The counts array has the property where counts[i] is the number of smaller
 * elements to the right of nums[i].
 *
 * Example:
 *
 * Input: [5,2,6,1]
 * Output: [2,1,1,0]
 *
 * Explanation:
 *
 * To the right of 5 there are 2 smaller elements (2 and 1).
 * To the right of 2 there is only 1 smaller element (1).
 * To the right of 6 there is 1 smaller element (1).
 * To the right of 1 there is 0 smaller element.
 */

import BinaryIndexedTree from 'common/binary-indexed-tree';

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = nums => {
  // Step 1. Re-think this problem by counting the occurrence of smaller nums
  // in a sorted array. We only need to know the index in the sorted nums
  const indexMap = {};
  nums
    .slice(0)
    .sort((a, b) => a - b)
    .map((num, index) => {
      indexMap[num] = index;
    });

  const tree = new BinaryIndexedTree(nums.length);
  const result = [];

  // Step 2. Update the count by 1 per occurrence when we see the number
  // so that for number appears after it, we can count the smaller numbers correctly
  // Pay attention to the index
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = tree.getSum(indexMap[nums[i]] - 1);
    tree.update(indexMap[nums[i]], 1);
  }

  return result;
};

export { countSmaller };
