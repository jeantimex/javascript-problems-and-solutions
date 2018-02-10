# Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], return 6.

![rainwatertrap](https://user-images.githubusercontent.com/565300/36057813-8a5c75a2-0dc8-11e8-8870-c9b965a9ccac.png)

The above elevation map is represented by array [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]. In this case, 6 units of rain water (blue section) are being trapped.

```javascript
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
    // Scan from left
    left[i] = leftMax;
    leftMax = Math.max(leftMax, height[i]);

    // Scan from right
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
```
