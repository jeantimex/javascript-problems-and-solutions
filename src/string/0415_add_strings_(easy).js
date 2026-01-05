/**
 * Add Strings
 *
 * Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
 *
 * Note:
 *
 * 1. The length of both num1 and num2 is < 5100.
 * 2. Both num1 and num2 contains only digits 0-9.
 * 3. Both num1 and num2 does not contain any leading zero.
 * 4. You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = (num1, num2) => {
  const result = [];

  let carry = 0;

  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
    const x = i >= 0 ? num1[i] - '0' : 0;
    const y = j >= 0 ? num2[j] - '0' : 0;

    result.unshift((x + y + carry) % 10);
    carry = Math.floor((x + y + carry) / 10);
  }

  return result.join('');
};
