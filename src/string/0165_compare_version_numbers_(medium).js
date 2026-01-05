/**
 * Compare Version Numbers
 *
 * Compare two version numbers version1 and version2.
 * If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
 *
 * You may assume that the version strings are non-empty and contain only digits and the . character.
 * The . character does not represent a decimal point and is used to separate number sequences.
 * For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level
 * revision of the second first-level revision.
 *
 * Example 1:
 *
 * Input: version1 = "0.1", version2 = "1.1"
 * Output: -1
 * Example 2:
 *
 * Input: version1 = "1.0.1", version2 = "1"
 * Output: 1
 * Example 3:
 *
 * Input: version1 = "7.5.2.4", version2 = "7.5.3"
 * Output: -1
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = (version1, version2) => {
  const levels1 = version1.split('.');
  const levels2 = version2.split('.');

  const length = Math.max(levels1.length, levels2.length);

  for (let i = 0; i < length; i++) {
    const v1 = i < levels1.length ? parseInt(levels1[i]) : 0;
    const v2 = i < levels2.length ? parseInt(levels2[i]) : 0;

    if (v1 > v2) return 1;
    if (v2 > v1) return -1;
  }

  return 0;
};

export { compareVersion };
