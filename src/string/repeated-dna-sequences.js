/**
 * Repeated DNA Sequences
 *
 * All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG".
 * When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
 *
 * Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
 *
 * Example:
 *
 * Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
 *
 * Output: ["AAAAACCCCC", "CCCCCAAAAA"]
 */

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = s => {
  const seen = new Set();
  const repeated = new Set();

  for (let i = 0; i + 9 < s.length; i++) {
    const sequence = s.substring(i, i + 10);

    if (seen.has(sequence)) {
      repeated.add(sequence);
    }

    seen.add(sequence);
  }

  return Array.from(repeated);
};

export { findRepeatedDnaSequences };
