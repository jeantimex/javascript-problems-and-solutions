/**
 * Binary Indexed Tree
 *
 * Example:
 *
 * nums = [3, 2, -1, 6, 5, 4, -3, 3, 7, 2, 3]
 *
 * The index tree looks like this:
 *
 *            0
 *      ______|_______
 *     /    /   \     \
 *    1    2     4     8
 *         |     | \   | \
 *         3     5  6  9  10
 *                  |      |
 *                  7      11
 *
 * When calculating the sum, traverse all its parent's sum (index -= index & -index)
 * When updating the sum, traverse all the index to that of parent (index += index & -index)
 */

class BinaryIndexedTree {
  constructor(n) {
    // Initialize bitree[] as 0
    this.bitree = Array(n + 1).fill(0);
  }

  update(index, val) {
    // index in BITree[] is 1 more than the index in arr[]
    index++;
    // Traverse all ancestors and add 'val'
    while (index < this.bitree.length) {
      // Add 'val' to current node of BIT Tree
      this.bitree[index] += val;
      // Update index to that of parent in update View
      index += index & -index;
    }
  }

  getSum(index) {
    let sum = 0;
    // index in BITree[] is 1 more than the index in arr[]
    index++;
    // Traverse ancestors of BITree[index]
    while (index > 0) {
      sum += this.bitree[index];
      index -= index & -index;
    }
    return sum;
  }
}

export default BinaryIndexedTree;
