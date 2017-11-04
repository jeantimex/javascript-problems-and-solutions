import { assert } from 'chai';
import { serializeTree, deserializeTree } from 'utils/tree-util';
import killProcess from '../kill-process';

describe('Kill Process', () => {
  const testCases = [[[1, 3, 10, 5], [3, 0, 5, 3], 5, [5, 10]]];

  testCases.map((testCase, index) => {
    it(`should kill process`, () => {
      const pid = testCase[0];
      const ppid = testCase[1];
      const kill = testCase[2];
      const expected = testCase[3];
      const actual = killProcess(pid, ppid, kill).sort((a, b) => a - b);
      assert.deepEqual(actual, expected);
    });
  });
});
