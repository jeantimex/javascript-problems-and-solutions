/**
 * Binary Indexed Tree
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
