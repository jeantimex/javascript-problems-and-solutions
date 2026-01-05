import { assert } from 'chai';
import minWindow from '../minimum-window-substring';

describe('Minimum Window Substring', () => {
  const testCases = [['ADOBECODEBANC', 'ABC', 'BANC']];

  testCases.forEach(([s, t, expected], index) => {
    it(`should get the minimum window substring ${index}`, () => {
      const actual = minWindow(s, t);
      assert.equal(actual, expected);
    });
  });
});
