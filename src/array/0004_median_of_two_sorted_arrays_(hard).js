/**
 * Median of Two Sorted Arrays
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 */

/**
 * Find the median from two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const k = Math.floor((nums1.length + nums2.length) / 2);

  if ((nums1.length + nums2.length) % 2 === 0) {
    return (findKth(nums1, nums2, k) + findKth(nums1, nums2, k + 1)) / 2;
  } else {
    return findKth(nums1, nums2, k + 1);
  }
};

/**
 * Find the k-th number from two sorted arrays
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 */
const findKth = (nums1, nums2, k) => {
  const m = nums1.length;
  const n = nums2.length;

  if (m > n) {
    return findKth(nums2, nums1, k);
  }

  if (m === 0) {
    return nums2[k - 1];
  }

  if (k === 1) {
    return Math.min(nums1[0], nums2[0]);
  }

  const c1 = Math.min(Math.floor(k / 2), m);
  const c2 = k - c1;

  if (nums1[c1 - 1] === nums2[c2 - 1]) {
    return nums1[c1 - 1];
  } else if (nums1[c1 - 1] < nums2[c2 - 1]) {
    return findKth(nums1.slice(c1), nums2, k - c1);
  } else {
    return findKth(nums1, nums2.slice(c2), k - c2);
  }
};

export default findMedianSortedArrays;
