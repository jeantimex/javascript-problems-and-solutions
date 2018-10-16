/**
 * Pour Water
 *
 * For example:
 *
 * heights = [5, 4, 2, 1, 2, 3, 2, 1, 0, 1, 2, 4]
 * location = 5
 * water = 13
 *
 * Your output should be: [ 0, 0, 1, 2, 1, 0, 1, 2, 3, 2, 1, 0 ]
 *
 * This is how the container looks like
 *
 *          | water
 *          |
 *          v
 *     +
 *     ++         +
 *     ++WWW+WWWWW+
 *     +++W+++WWW++
 *     ++++++++W+++
 *     ++++++++++++
 */

/**
 * @param {number[]} heights
 * @param {number} location
 * @param {number} water
 */
const pourWater = (heights, location, water) => {
  const waters = Array(heights.length).fill(0);
  let pourLocation;

  while (water > 0) {
    // Handle left-hand side
    // Search for the lowest valley on the left
    let left = location - 1;

    while (left >= 0) {
      if (heights[left] + waters[left] > heights[left + 1] + waters[left + 1]) {
        break;
      }
      left--;
    }

    if (heights[left + 1] + waters[left + 1] < heights[location] + waters[location]) {
      pourLocation = left + 1;
      waters[pourLocation]++;
      water--;
      continue;
    }

    // Handle right-hand side
    // Search for the lowest valley on the right
    let right = location + 1;

    while (right < heights.length) {
      if (heights[right] + waters[right] > heights[right - 1] + waters[right - 1]) {
        break;
      }
      right++;
    }

    if (heights[right - 1] + waters[right - 1] < heights[location] + waters[location]) {
      pourLocation = right - 1;
      waters[pourLocation]++;
      water--;
      continue;
    }

    // Handle the original pour location
    pourLocation = location;
    waters[pourLocation]++;
    water--;
  }

  return waters;
};

/**
 * @param {number[]} heights
 * @param {number[]} waters
 */
const print = (heights, waters) => {
  const n = heights.length;

  let maxHeight = 0;
  for (let i = 0; i < n; i++) {
    maxHeight = Math.max(maxHeight, heights[i] + waters[i]);
  }

  let row = '';
  for (let height = maxHeight; height >= 0; height--) {
    for (let i = 0; i < n; i++) {
      if (height <= heights[i]) {
        row += '+';
      } else if (height > heights[i] && height <= heights[i] + waters[i]) {
        row += 'W';
      } else {
        row += ' ';
      }
    }
    if (height > 0) row += '\n';
  }

  return row;
};

export { pourWater, print };
