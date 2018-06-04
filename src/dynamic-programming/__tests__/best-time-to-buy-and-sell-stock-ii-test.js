import { assert } from 'chai';
import { maxProfit_I, maxProfit_II } from '../best-time-to-buy-and-sell-stock-ii';

describe('Best Time to Buy and Sell Stock II', () => {
  const testCases = [[[7, 1, 5, 3, 6, 4], 7], [[1, 2, 3, 4, 5], 4], [[7, 6, 4, 3, 1], 0], [null, 0], [[], 0]];

  testCases.forEach(([prices, expected], index) => {
    it(`should calculate the max profit I, ${index}`, () => {
      const actual = maxProfit_I(prices);
      assert.equal(actual, expected);
    });

    it(`should calculate the max profit II, ${index}`, () => {
      const actual = maxProfit_II(prices);
      assert.equal(actual, expected);
    });
  });
});
