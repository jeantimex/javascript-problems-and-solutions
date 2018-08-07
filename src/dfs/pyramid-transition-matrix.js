/**
 * Pyramid Transition Matrix
 *
 * We are stacking blocks to form a pyramid. Each block has a color which is a one letter string, like `'Z'`.
 *
 * For every block of color `C` we place not in the bottom row, we are placing it on top of a left block of
 * color `A` and  * right block of color `B`. We are allowed to place the block there only if `(A, B, C)` is
 * an allowed triple.
 *
 * We start with a bottom row of bottom, represented as a single string. We also start with a list of allowed
 * triples  * allowed. Each allowed triple is represented as a string of length 3.
 *
 * Return true if we can build the pyramid all the way to the top, otherwise false.
 *
 * Example 1:
 *
 * Input: bottom = "XYZ", allowed = ["XYD", "YZE", "DEA", "FFF"]
 * Output: true
 *
 * Explanation:
 * We can stack the pyramid like this:
 *
 *     A
 *    / \
 *   D   E
 *  / \ / \
 * X   Y   Z
 *
 * This works because ('X', 'Y', 'D'), ('Y', 'Z', 'E'), and ('D', 'E', 'A') are allowed triples.
 *
 * Example 2:
 *
 * Input: bottom = "XXYX", allowed = ["XXX", "XXY", "XYX", "XYY", "YXZ"]
 * Output: false
 *
 * Explanation:
 *
 * We can't stack the pyramid to the top.
 * Note that there could be allowed triples (A, B, C) and (A, B, D) with C != D.
 *
 * Note:
 * bottom will be a string with length in range [2, 8].
 * allowed will have length in range [0, 200].
 * Letters in all strings will be chosen from the set {'A', 'B', 'C', 'D', 'E', 'F', 'G'}.
 */

/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
const pyramidTransition = (bottom, allowed) => {
  const dict = new Map();

  for (let s of allowed) {
    const key = s.substr(0, 2);
    const val = s.substr(2);

    if (!dict.has(key)) {
      dict.set(key, []);
    }
    dict.get(key).push(val);
  }

  return dfs(bottom, dict);
};

const dfs = (bottom, dict) => {
  if (bottom.length === 1) {
    return true;
  }

  for (let i = 0; i < bottom.length - 1; i++) {
    const key = bottom.substr(i, i + 2);

    if (!dict.has(key)) {
      return false;
    }
  }

  const bottoms = [];
  getBottoms(bottom, dict, 0, '', bottoms);

  for (let bottom of bottoms) {
    if (dfs(bottom, dict)) {
      return true;
    }
  }

  return false;
};

const getBottoms = (bottom, dict, index, solution, bottoms) => {
  if (index === bottom.length - 1) {
    return bottoms.push(solution);
  }

  const key = bottom.substr(index, index + 2);

  for (let c of dict.get(key)) {
    getBottoms(bottom, dict, index + 1, solution + c, bottoms);
  }
};

export { pyramidTransition };
