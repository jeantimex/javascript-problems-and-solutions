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

/**
 * Binary Search Tree Solution
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = nums => {
  const result = [];
  let root = null;

  // For every entry in nums, insert it into the root BST
  for (let i = nums.length - 1; i >= 0; i--) {
    root = insert(root, nums[i], result, i, 0);
  }

  return result;
};

/**
 * A BST Node representation where val contains the node value and
 * count contains the number of nodes to the left of the current node
 *
 * @param {number} value The Node value
 */
class TreeNode {
  constructor(value) {
    this.val = value;
    this.count = 0;
    this.right = null;
    this.left = null;
  }
}

/**
 * A function to insert a node into the BST root at the same time as
 * outputing into countArr how many smaller nodes were inserted before
 * the current root node.
 *
 * When root is null, create a new Node using val and count and insert
 * count into countArr at index position.
 *
 * When the value of root is greater than val, increment the root
 * count and insert val into the left node of root.
 *
 * When the value of root is smaller or equal to val, insert val into
 * the right node of root incrementing count by one only if the root
 * value is smaller than val.
 *
 * @param {TreeNode} root The BST node
 * @param {number} val The value to insert into the BST
 * @param {number[]} countArr The array to insert the count
 * @param {number} index The current index to insert into countArr
 * @param {number} count The actual count of smaller nodes before val
 *
 * return <TreeNode> root The BST node passed to the function call
 */
const insert = (root, val, countArr, index, count) => {
  if (!root) {
    root = new TreeNode(val);
    countArr[index] = count;
  } else if (root.val > val) {
    root.count++;
    root.left = insert(root.left, val, countArr, index, count);
  } else {
    root.right = insert(root.right, val, countArr, index, root.count + count + (root.val < val ? 1 : 0));
  }

  return root;
};
