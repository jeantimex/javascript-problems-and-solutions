/**
 * Task Scheduler
 *
 * Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters
 * represent different tasks.Tasks could be done without original order.
 * Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.
 *
 * However, there is a non-negative cooling interval n that means between two same tasks,
 * there must be at least n intervals that CPU are doing different tasks or just be idle.
 *
 * You need to return the least number of intervals the CPU will take to finish all the given tasks.
 *
 * Example 1:
 *
 * Input: tasks = ["A","A","A","B","B","B"], n = 2
 * Output: 8
 *
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 *
 * Note:
 *
 * - The number of tasks is in the range [1, 10000].
 * - The integer n is in the range [0, 100].
 *
 * Solution:
 *
 * Example 1:
 *
 * AAAABBBEEFFGG 3
 *
 * step 1: A---A---A---A
 * step 2: AB--AB--AB--A
 * step 3: ABE-ABE-AB--A
 * step 4: ABEFABE-ABF-A
 * step 5: ABEFABEGABFGA
 *
 * Example 2:
 *
 * ACCCEEE 2
 *
 * step 1: CE-CE-CE
 * step 2: CEACE-CE
 */

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {
  // Step 1. count the max occurance and how many tasks have the same max count
  let max = 0;
  let maxCount = 0;

  const map = {};
  for (let task of tasks) {
    map[task] = ~~map[task] + 1;
    if (map[task] === max) {
      maxCount++;
    } else if (map[task] > max) {
      max = map[task];
      maxCount = 1;
    }
  }

  // Step 2. group the max occurance chars together, e.g. CE-CE-CE
  // update the left cooling intervals in each group
  const groups = max - 1;
  const coolingLeft = n - (maxCount - 1);

  // Step 3. put the rest tasks into the empty slots
  const emptySlots = groups * coolingLeft;
  const tasksLeft = tasks.length - max * maxCount;

  // Step 4. calculate the idle tasks
  const idle = Math.max(0, emptySlots - tasksLeft);

  return tasks.length + idle;
};

export { leastInterval };
