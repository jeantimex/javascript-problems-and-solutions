/**
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 */

import TreeNode from 'common/tree-node';

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = nums => {
  const helper = (i, j) => {
    if (i > j) {
      return null;
    }

    const mid = i + parseInt((j - i) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = helper(i, mid - 1);
    root.right = helper(mid + 1, j);

    return root;
  };

  return helper(0, nums.length - 1);
};

export default sortedArrayToBST;
