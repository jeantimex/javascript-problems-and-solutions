import { assert } from 'chai';
import MapSum from '../map-sum-pairs';

describe('Map Sum Pairs', () => {
  const pairs = [['apple', 3], ['app', 2]];
  const testCases = [['ap', 5], ['se', 0]];

  let mapSum;

  beforeEach(() => {
    mapSum = new MapSum();

    pairs.forEach(pair => {
      mapSum.insert(pair[0], pair[1]);
    });
  });

  testCases.forEach((testCase, index) => {
    it('should calculate the sum ${index}', () => {
      const prefix = testCase[0];
      const expected = testCase[1];
      const actual = mapSum.sum(prefix);
      assert.equal(actual, expected);
    });
  });
});
