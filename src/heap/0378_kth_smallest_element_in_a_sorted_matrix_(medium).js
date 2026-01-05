/**
 * Kth Smallest Element in a Sorted Matrix
 *
 * Given a n x n matrix where each of the rows and columns are sorted in ascending order,
 * find the kth smallest element in the matrix.
 *
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 *
 * Example:
 *
 * matrix = [
 *    [ 1,  5,  9],
 *    [10, 11, 13],
 *    [12, 13, 15]
 * ],
 * k = 8,
 *
 * return 13.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ n2.
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (matrix, k) => {
  // create a min heap that stores { val, i, j }
  const pq = new PriorityQueue({ comparator: (a, b) => a.val - b.val });

  // put matrix[0][0] to the min heap
  pq.offer({ val: matrix[0][0], i: 0, j: 0 });

  while (--k > 0) {
    const { i, j } = pq.poll();

    // put matrix[i + 1][j] to the min heap if it hasn't been visited
    if (i < matrix.length - 1 && matrix[i + 1][j] !== null) {
      pq.offer({ val: matrix[i + 1][j], i: i + 1, j });
      matrix[i + 1][j] = null;
    }

    // put matrix[i][j + 1] to the min heap if it hasn't been visited
    if (j < matrix[0].length - 1 && matrix[i][j + 1] !== null) {
      pq.offer({ val: matrix[i][j + 1], i, j: j + 1 });
      matrix[i][j + 1] = null;
    }
  }

  return pq.peek().val;
};

export { kthSmallest };
