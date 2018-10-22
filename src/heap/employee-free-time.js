/**
 * Employee Free Time
 *
 * We are given a list schedule of employees, which represents the working time for each employee.
 *
 * Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.
 *
 * Return the list of finite intervals representing common, positive-length free time for all employees,
 * also in sorted order.
 *
 * Example 1:
 *
 * Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
 * Output: [[3,4]]
 *
 * Explanation:
 *
 * There are a total of three employees, and all common
 * free time intervals would be [-inf, 1], [3, 4], [10, inf].
 * We discard any intervals that contain inf as they aren't finite.
 *
 * Example 2:
 *
 * Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
 * Output: [[5,6],[7,9]]
 *
 * (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals,
 * not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0]
 * is not defined.)
 *
 * Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.
 */

import PriorityQueue from 'common/priority-queue';

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[][]} schedule
 * @return {Interval[]}
 */
const employeeFreeTime = schedule => {
  const result = [];

  const pq = new PriorityQueue({ comparator: (a, b) => a.start - b.start });
  schedule.forEach(list => list.forEach(e => pq.offer(e)));

  let current = pq.poll();

  while (!pq.isEmpty()) {
    if (current.end < pq.peek().start) {
      // no intersect
      result.push(new Interval(current.end, pq.peek().start));
      // becomes the next current interval
      current = pq.poll();
    } else {
      // intersect or sub merged
      current = Math.max(current.end, pq.peek().end);
      pq.poll();
    }
  }

  return result;
};

export { employeeFreeTime };
