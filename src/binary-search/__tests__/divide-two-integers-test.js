import { assert } from 'chai';
import divide from '../divide-two-integers';

describe('Divide Two Integers', () => {
  const testCases = [[0, 1, 0], [10, 3, 3]];

  testCases.forEach(([dividend, divisor, expected], index) => {
    it(`should divide correctly ${index}`, () => {
      const actual = divide(dividend, divisor);
      assert.equal(actual, expected);
    });
  });
});
