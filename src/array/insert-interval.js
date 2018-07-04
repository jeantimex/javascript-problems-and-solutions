/**
 * Insert Interval
 *
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 *
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
const insert = (intervals, newInterval) => {
  const result = [];

  let i = 0;

  // add all the intervals ending before newInterval starts
  while (i < intervals.length && intervals[i].end < newInterval.start) {
    result.push(intervals[i++]);
  }

  // merge all overlapping intervals to one considering newInterval
  while (i < intervals.length && intervals[i].start <= newInterval.end) {
    newInterval = new Interval(
      Math.min(intervals[i].start, newInterval.start),
      Math.max(intervals[i].end, newInterval.end)
    );
    i++;
  }

  // add the union of intervals we got
  result.push(newInterval);

  // add all the rest
  while (i < intervals.length) {
    result.push(intervals[i++]);
  }

  return result;
};
