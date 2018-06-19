import { assert } from 'chai';
import { serializeUndirectedGraph, deserializeUndirectedGraph } from 'utils/graph-util';
import alienOrder from '../alien-dictionary-ii';

describe('Alien Dictionary II', () => {
  const testCases = [
    ['', ''],
    [null, ''],
    [['zoro'], 'zoro'],
    [['wrt', 'wrf', 'er', 'ett', 'rftt'], 'wertf'],
    [['z', 'x'], 'zx'],
    [['z', 'x', 'z'], ''],
  ];

  testCases.forEach((testCase, index) => {
    it(`should get the alien dictionary ${index}`, () => {
      const words = testCase[0];
      const expected = testCase[1];
      const actual = alienOrder(words);
      assert.equal(actual, expected);
    });
  });
});
