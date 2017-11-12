import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import findOrder from '../course-schedule-ii';

describe('Course Schedule II', () => {
  const testCases = [[1, [], [0]], [2, [[0, 1]], [1, 0]], [2, [[0, 1], [1, 0]], []]];

  testCases.forEach((testCase, index) => {
    it(`should return the correct course list ${index}`, () => {
      const numCourses = testCase[0];
      const prerequisites = testCase[1];
      const expected = testCase[2];
      const actual = findOrder(numCourses, prerequisites);
      assert.deepEqual(actual, expected);
    });
  });
});
