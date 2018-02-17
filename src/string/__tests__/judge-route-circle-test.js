import { assert } from 'chai';
import judgeCircle from '../judge-route-circle';

describe('Judge Route Circle', () => {
  const testCases = [['UD', true], ['LL', false]];

  testCases.forEach(([moves, expected], index) => {
    it(`should judge the route circle ${index}`, () => {
      const actual = judgeCircle(moves);
      assert.equal(actual, expected);
    });
  });
});
