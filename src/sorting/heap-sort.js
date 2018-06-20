/**
 * Heapify a subtree rooted with node i which is
 * an index in nums[]. n is size of heap
 *
 * @param {number[]} nums
 * @param {number} n
 * @param {number} i
 */
const heapify = (nums, n, i) => {
  let largest = i; // Initialize largest as root
  const l = i * 2 + 1; // left = 2*i + 1
  const r = i * 2 + 2; // right = 2*i + 2

  // If left child is larger than root
  if (l < n && nums[l] > nums[largest]) {
    largest = l;
  }

  // If right child is larger than largest so far
  if (r < n && nums[r] > nums[largest]) {
    largest = r;
  }

  // If largest is not root
  if (largest !== i) {
    const temp = nums[i];
    nums[i] = nums[largest];
    nums[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(nums, n, largest);
  }
};

/**
 * Heap Sort
 *
 * @param {number[]} nums
 */
const heapSort = nums => {
  const n = nums.length;

  // Step 1. Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(nums, n, i);
  }

  // Step 2. One by one extract an elment from heap
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end
    const temp = nums[0];
    nums[0] = nums[i];
    nums[i] = temp;

    // Call max heapify on the reduced heap
    heapify(nums, i, 0);
  }
};

export default heapSort;
