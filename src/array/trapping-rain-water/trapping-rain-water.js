/**
 * Trapping Rain Water
 *
 * Given n non-negative integers representing an elevation map where the width of each bar is 1,
 * compute how much water it is able to trap after raining.
 *
 * For example,
 * Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const trap = height => {
  const n = height.length;

  const left = [];
  const right = [];

  let leftMax = 0;
  let rightMax = 0;

  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    left[i] = leftMax;
    leftMax = Math.max(leftMax, height[i]);

    right[j] = rightMax;
    rightMax = Math.max(rightMax, height[j]);
  }

  let total = 0;
  for (let i = 0; i < n; i++) {
    let water = Math.min(left[i], right[i]) - height[i];
    total += water > 0 ? water : 0;
  }

  return total;
};

export default trap;
