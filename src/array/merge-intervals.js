/**
 * Merge Intervals
 *
 * Given a collection of intervals, merge all overlapping intervals.
 *
 * For example,
 * Given [1,3],[2,6],[8,10],[15,18],
 * return [1,6],[8,10],[15,18].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = intervals => {
  // Step 1. sort the intervals by start time
  intervals.sort((a, b) => a.start - b.start);

  // Step 2. go through the intervals
  let i = 0;

  for (let j = 1; j < intervals.length; j++) {
    const curr = intervals[i];
    const next = intervals[j];

    if (next.start <= curr.end) {
      curr.end = Math.max(curr.end, next.end);
    } else {
      intervals[++i] = next;
    }
  }

  return intervals.slice(0, i + 1);
};
