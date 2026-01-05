import { assert } from 'chai';
import { restoreIpAddresses } from '../restore-ip-addresses';

describe('Restore IP Addresses', () => {
  const testCases = [
    ['25525511135', ['255.255.11.135', '255.255.111.35']],
    ['100111', ['1.0.0.111', '10.0.1.11', '10.0.11.1', '100.1.1.1']],
  ];

  testCases.forEach(([s, expected], index) => {
    it(`should restore all possible IP addresses ${index}`, () => {
      const actual = restoreIpAddresses(s);
      assert.deepEqual(actual, expected);
    });
  });
});
