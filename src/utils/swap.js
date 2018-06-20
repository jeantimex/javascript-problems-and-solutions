/**
 * Swap array elements
 *
 * @param {Array} elements
 * @param {number} i
 * @param {number} j
 */
export const swap = (elements, i, j) => {
  const temp = elements[i];
  elements[i] = elements[j];
  elements[j] = temp;
};
