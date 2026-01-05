/**
 * Insert Delete GetRandom O(1)
 *
 * Design a data structure that supports all following operations in average O(1) time.
 *
 * 1. insert(val): Inserts an item val to the set if not already present.
 * 2. remove(val): Removes an item val from the set if present.
 * 3. getRandom: Returns a random element from current set of elements.
 *    Each element must have the same probability of being  * returned.
 *
 * Example:
 *
 * // Init an empty set.
 * RandomizedSet randomSet = new RandomizedSet();
 *
 * // Inserts 1 to the set. Returns true as 1 was inserted successfully.
 * randomSet.insert(1);
 *
 * // Returns false as 2 does not exist in the set.
 * randomSet.remove(2);
 *
 * // Inserts 2 to the set, returns true. Set now contains [1,2].
 * randomSet.insert(2);
 *
 * // getRandom should return either 1 or 2 randomly.
 * randomSet.getRandom();
 *
 * // Removes 1 from the set, returns true. Set now contains [2].
 * randomSet.remove(1);
 *
 * // 2 was already in the set, so return false.
 * randomSet.insert(2);
 *
 * // Since 2 is the only number in the set, getRandom always return 2.
 * randomSet.getRandom();
 */

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

/**
 * Initialize your data structure here.
 */
class RandomizedSet {
  constructor() {
    // Stores vals
    this.nums = [];
    // Track val's location in nums array
    this.locs = new Map();
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (this.locs.has(val)) {
      return false;
    }

    this.locs.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    if (!this.locs.has(val)) {
      return false;
    }

    const loc = this.locs.get(val);

    // The key is to swap the location of val with the last val
    if (loc !== this.nums.length - 1) {
      const lastVal = this.nums[this.nums.length - 1];
      this.nums[loc] = lastVal; // swap in nums
      this.locs.set(lastVal, loc); // swap in locs
    }

    this.locs.delete(val);
    this.nums.pop();
    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}

export { RandomizedSet };
