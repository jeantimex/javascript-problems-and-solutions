import { assert } from 'chai';
import { maxProfit } from '../best-time-to-buy-and-sell-stock-ii';

describe('Best Time to Buy and Sell Stock II', () => {
  const testCases = [[[7, 1, 5, 3, 6, 4], 7], [[1, 2, 3, 4, 5], 4], [[7, 6, 4, 3, 1], 0], [null, 0], [[], 0]];

  testCases.forEach(([prices, expected], index) => {
    it(`should calculate the max profit, ${index}`, () => {
      const actual = maxProfit(prices);
      assert.equal(actual, expected);
    });
  });
});
