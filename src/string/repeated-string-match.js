/**
 * Repeated String Match
 *
 * Given two strings A and B, find the minimum number of times A has to be repeated
 * such that B is a substring of it. If no such solution, return -1.
 *
 * For example, with A = "abcd" and B = "cdabcdab".
 *
 * Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it;
 * and B is not a substring of A repeated two times ("abcdabcd").
 *
 * Note:
 * The length of A and B will be between 1 and 10000.
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = (A, B) => {
  const lenA = A.length;
  const lenB = B.length;

  for (let i = 0; i < lenA; i++) {
    let j = 0;

    while (j < lenB && B[j] === A[(i + j) % lenA]) {
      j++;
    }

    if (j === lenB) {
      return Math.ceil((i + j) / lenA);
    }
  }

  return -1;
};

export { repeatedStringMatch };
