/**
 * Insertion Sort
 */

/**
 * @param {number[]} nums
 */
const insertionSort = nums => {
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    let j;
    for (j = i - 1; j >= 0 && nums[j] > value; j--) {
      nums[j + 1] = nums[j];
    }

    nums[j + 1] = value;
  }
};

export default insertionSort;
