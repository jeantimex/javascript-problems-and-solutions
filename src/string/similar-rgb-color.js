/**
 * Similar RGB Color
 *
 * In the following, every capital letter represents some hexadecimal digit from 0 to f.
 *
 * The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand.
 * For example, "#15c" is shorthand for the color "#1155cc".
 *
 * Now, say the similarity between two colors "#ABCDEF" and "#UVWXYZ" is -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2.
 *
 * Given the color "#ABCDEF", return a 7 character color that is most similar to #ABCDEF,
 * and has a shorthand (that is, it can be represented as some "#XYZ"
 *
 * Example 1:
 *
 * Input: color = "#09f166"
 * Output: "#11ee66"
 *
 * Explanation:
 * The similarity is -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64 -9 -0 = -73.
 * This is the highest among any shorthand color.
 *
 * Note:
 *
 * - color is a string of length 7.
 * - color is a valid RGB color: for i > 0, color[i] is a hexadecimal digit from 0 to f
 * - Any answer which has the same (highest) similarity as the best answer will be accepted.
 * - All inputs and outputs should use lowercase letters, and the output is 7 characters.
 *
 * Solution:
 *
 * Because color similarity is a sum of the similarity of individual color components,
 * we can treat each colored component separately and combine the answer.
 *
 * As in the previous approach, we want the colored component to be the closest to a multiple of 17.
 * We can just round it to the closest such value.
 */

/**
 * @param {string} color
 * @return {string}
 */
const similarRGB = color => {
  return '#' + round(color.substring(1, 3)) + round(color.substring(3, 5)) + round(color.substring(5));
};

const round = comp => {
  let q = parseInt(comp, 16);

  q = Math.floor(q / 17) + (q % 17 > 8 ? 1 : 0);

  return q === 0 ? '00' : (17 * q).toString(16);
};

export { similarRGB };
