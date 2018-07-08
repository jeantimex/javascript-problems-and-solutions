/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @param {number} min
 * @param {number} max
 * @param {boolean} inclusive
 */
export const random = (min, max, inclusive = false) => Math.random() * (max - min + inclusive ? 1 : 0) + min;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 *
 * @param {number} min
 * @param {number} max
 * @param {boolean} inclusive
 */
export const randomInt = (min, max, inclusive = false) =>
  Math.floor(Math.random() * (max - min + inclusive ? 1 : 0)) + min;
