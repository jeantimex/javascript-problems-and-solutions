/**
 * If the depth of a tree is smaller than 5, then this tree can be represented by a list of three-digits integers.
 *
 * For each integer in this list:
 * The hundreds digit represents the depth D of this node, 1 <= D <= 4.
 * The tens digit represents the position P of this node in the level it belongs to, 1 <= P <= 8. The position is
 * the same as that in a full binary tree.
 * The units digit represents the value V of this node, 0 <= V <= 9.
 * Given a list of ascending three-digits integers representing a binary with the depth smaller than 5. You need to
 * return the sum of all paths from the root towards the leaves.
 *
 * Example 1:
 * Input: [113, 215, 221]
 * Output: 12
 * Explanation:
 * The tree that the list represents is:
 *
 *     3
 *    / \
 *   5   1
 *
 * The path sum is (3 + 5) + (3 + 1) = 12.
 *
 * Example 2:
 * Input: [113, 221]
 * Output: 4
 * Explanation:
 * The tree that the list represents is:
 *
 *     3
 *      \
 *       1
 *
 * The path sum is (3 + 1) = 4.
 *
 * How do we solve problem like this if we were given a normal tree? Yes, traverse it, keep a root to leaf running sum.
 * If we see a leaf node (node.left == null && node.right == null), we add the running sum to the final result.
 *
 * Now each tree node is represented by a number. 1st digits is the level, 2nd is the position in that level (note that
 * it starts from 1 instead of 0). 3rd digit is the value. We need to find a way to traverse this tree and get the sum.
 *
 * The idea is, we can form a tree using a HashMap. The key is first two digits which marks the position of a node in
 * the tree. The value is value of that node. Thus, we can easily find a node's left and right children using math.
 * Formula: For node xy? its left child is (x+1)(y*2-1)? and right child is (x+1)(y*2)?
 *
 * Given above HashMap and formula, we can traverse the tree. Problem is solved!
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const pathSum = nums => {
  const helper = (node, sum) => {
    if (!tree.has(node)) {
      return;
    }

    const level = int(node / 10);
    const pos = node % 10;
    const left = (level + 1) * 10 + pos * 2 - 1;
    const right = (level + 1) * 10 + pos * 2;

    const curSum = sum + tree.get(node);

    if (!tree.has(left) && !tree.has(right)) {
      total += curSum;
      return;
    }

    helper(left, curSum);
    helper(right, curSum);
  };

  if (!nums || nums.length === 0) {
    return 0;
  }

  let total = 0;
  const tree = new Map();

  nums.forEach(num => {
    const key = int(num / 10);
    const value = num % 10;
    tree.set(key, value);
  });

  const root = int(nums[0] / 10);
  helper(root, 0);
  return total;
};

const int = number => {
  return parseInt(number, 10);
};

export default pathSum;
