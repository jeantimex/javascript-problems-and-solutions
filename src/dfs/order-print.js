/**
 * Order Print
 *
 * Given two strings s1 and s2, return a list of strings in which each string
 * contains the characters of s1 and s2, and keep their appearance order.
 *
 * Example 1:
 *
 * Input:
 * s1 = 'ab'
 * s2 = 'cd'
 *
 * Output: [ 'abcd', 'acbd', 'acdb', 'cabd', 'cadb', 'cdab' ]
 */

/**
 * @param {String} s1
 * @param {String} s2
 * @return {String[]}
 */
const orderPrint = (s1, s2) => {
  if (!s1 && !s2) {
    return [];
  }

  if (!s1) {
    return [s2];
  }

  if (!s2) {
    return [s1];
  }

  const list1 = orderPrint(s1.substr(1), s2).map(s => s1[0] + s);
  const list2 = orderPrint(s1, s2.substr(1)).map(s => s2[0] + s);

  return [...list1, ...list2];
};

export { orderPrint };
