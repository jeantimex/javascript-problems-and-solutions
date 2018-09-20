/**
 * Multiply Strings
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also
 * represented as a string.
 *
 * Example 1:
 *
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 * Example 2:
 *
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 * Note:
 *
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 * You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const m = num1.length;
  const n = num2.length;

  const pos = Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0');
      const p1 = i + j;
      const p2 = i + j + 1;
      const sum = mul + pos[p2]; // sum

      pos[p1] += Math.floor(sum / 10); // carry
      pos[p2] = sum % 10; // value
    }
  }

  let result = '';
  for (let p of pos) {
    if (p > 0 || result) {
      result += p;
    }
  }

  return result ? result : '0';
};

export { multiply };
