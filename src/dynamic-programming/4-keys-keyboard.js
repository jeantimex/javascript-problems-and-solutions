/**
 * 4 Keys Keyboard
 *
 * Imagine you have a special keyboard with the following keys:
 *
 * Key 1: (A): Print one 'A' on screen.
 * Key 2: (Ctrl-A): Select the whole screen.
 * Key 3: (Ctrl-C): Copy selection to buffer.
 * Key 4: (Ctrl-V): Print buffer on screen appending it after what has already been printed.
 *
 * Now, you can only press the keyboard for N times (with the above four keys),
 * find out the maximum numbers of 'A' you can print on screen.
 *
 * Example 1:
 *
 * Input: N = 3
 * Output: 3
 *
 * Explanation:
 * We can at most get 3 A's on screen by pressing following key sequence:
 * A, A, A
 *
 * Example 2:
 *
 * Input: N = 7
 * Output: 9
 *
 * Explanation:
 * We can at most get 9 A's on screen by pressing following key sequence:
 * A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
 *
 * Note:
 * 1 <= N <= 50
 * Answers will be in the range of 32-bit signed integer.
 */

/**
 * Recursion
 *
 * @param {number} N
 * @return {number}
 */
const maxA = N => {
  let result = N;
  for (let i = 1; i < N - 2; i++) {
    result = Math.max(result, maxA(i) * (N - i - 1));
  }
  return result;
};

/**
 * Dynamic Programming
 *
 * @param {number} N
 * @return {number}
 */
const maxA_II = N => {
  const dp = Array(N + 1).fill(0);

  for (let n = 1; n <= N; n++) {
    dp[n] = dp[n - 1] + 1;

    for (let i = 1; i < n - 2; i++) {
      dp[n] = Math.max(dp[n], dp[i] * (n - i - 1));
    }
  }

  return dp[N];
};

export { maxA, maxA_II };
