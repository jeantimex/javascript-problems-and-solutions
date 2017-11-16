import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import calcEquation from '../evaluate-division';

describe('Evaluate Division', () => {
  const testCases = [
    [
      [['a', 'b'], ['b', 'c']],
      [2.0, 3.0],
      [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']],
      [6.0, 0.5, -1.0, 1.0, -1.0],
    ],
    [[['a', 'b'], ['c', 'b']], [2.0, 4.0], [['a', 'c'], ['b', 'a']], [0.5, 0.5]],
  ];

  testCases.forEach((testCase, index) => {
    it(`should evaluate the division ${index}`, () => {
      const equations = testCase[0];
      const values = testCase[1];
      const queries = testCase[2];
      const expected = testCase[3];
      const actual = calcEquation(equations, values, queries);
      assert.deepEqual(actual, expected);
    });
  });
});
