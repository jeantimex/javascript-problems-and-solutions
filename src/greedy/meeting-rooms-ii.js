/**
 * Meeting Rooms II
 *
 * Given an array of meeting time intervals consisting of start and end times
 * [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
 *
 * Example 1:
 *
 * Input: [[0, 30],[5, 10],[15, 20]]
 * Output: 2
 * Example 2:
 *
 * Input: [[7,10],[2,4]]
 * Output: 1
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

import PriorityQueue from 'common/priority-queue';

/**
 * @param {Interval[]} intervals
 * @return {number}
 */
const minMeetingRooms = intervals => {
  if (!intervals || intervals.length === 0) {
    return 0;
  }

  const timeline = {};
  for (let { start, end } of intervals) {
    // 1 new event will be starting at [start]
    timeline[start] = ~~timeline[start] + 1;
    // 1 new event will be ending at [end];
    timeline[end] = ~~timeline[end] - 1;
  }

  let ongoing = 0;
  let result = 0;

  for (let v of Object.values(timeline)) {
    result = Math.max(result, (ongoing += v));
  }

  return result;
};

/**
 * Solution II - Priority Queue
 * @param {Interval[]} intervals
 * @return {number}
 */
const minMeetingRoomsII = intervals => {
  if (!intervals || intervals.length == 0) {
    return 0;
  }

  // Sort the intervals by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Use a min heap to track the minimum end time of merged intervals
  const heap = new PriorityQueue({
    comparator: (a, b) => a[1] - b[1],
  });

  // start with the first meeting, put it to a meeting room
  heap.offer(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];

    // get the meeting room that finishes earliest
    const interval = heap.poll();

    if (current[0] >= interval[1]) {
      // if the current meeting starts right after
      // there's no need for a new room, merge the interval
      interval[1] = current[1];
    } else {
      // otherwise, this meeting needs a new room
      heap.offer(current);
    }

    // don't forget to put the meeting room back
    heap.offer(interval);
  }

  return heap.size();
};

export { minMeetingRooms, minMeetingRoomsII };
