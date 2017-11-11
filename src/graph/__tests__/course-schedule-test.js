import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import canFinish from '../course-schedule';

describe('Course Schedule', () => {
  const testCases = [[1, [], true], [2, [[0, 1]], true], [2, [[0, 1], [1, 0]], false]];

  testCases.forEach((testCase, index) => {
    it(`should check whether the course can be finished ${index}`, () => {
      const numCourses = testCase[0];
      const prerequisites = testCase[1];
      const expected = testCase[2];
      const actual = canFinish(numCourses, prerequisites);
      assert.equal(actual, expected);
    });
  });
});
