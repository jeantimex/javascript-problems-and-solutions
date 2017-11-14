import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import findItinerary from '../reconstruct-itinerary';

describe('Reconstruct Itinerary', () => {
  const testCases = [
    [[['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']], ['JFK', 'MUC', 'LHR', 'SFO', 'SJC']],
    [
      [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']],
      ['JFK', 'ATL', 'JFK', 'SFO', 'ATL', 'SFO'],
    ],
  ];

  testCases.forEach((testCase, index) => {
    it(`should reconstruct the itinerary ${index}`, () => {
      const tickets = testCase[0];
      const expected = testCase[1];
      const actual = findItinerary(tickets);
      assert.deepEqual(actual, expected);
    });
  });
});
