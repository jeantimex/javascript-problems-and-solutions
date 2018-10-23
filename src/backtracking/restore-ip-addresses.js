/**
 * Restore IP Addresses
 *
 * Given a string containing only digits, restore it by returning
 * all possible valid IP address combinations.
 *
 * Example:
 *
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = s => {
  const result = [];
  backtracking(s, 0, 0, [], result);
  return result;
};

const backtracking = (s, index, segment, solution, result) => {
  if (index === s.length && segment === 4) {
    result.push(solution.join('.'));
    return;
  }

  // Too many characters left
  if (s.length - index > (4 - segment) * 3) {
    return;
  }

  // Not enough characters left
  if (s.length - index < 4 - segment) {
    return;
  }

  for (let i = index; i < index + 3; i++) {
    const ip = parseInt(s.substring(index, i + 1), 10);

    // Doesn't satisfy IP segment definition
    if (ip > 255 || (s[index] === '0' && i > index)) {
      return;
    }

    solution.push(ip);
    backtracking(s, i + 1, segment + 1, solution, result);
    solution.pop(ip);
  }
};

export { restoreIpAddresses };
