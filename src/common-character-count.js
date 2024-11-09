const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1CharCount = {};

  const s2CharCount = {};

  for (let i = 0; i < s1.length; i += 1) {
    s1CharCount[s1[i]] = (s1CharCount[s1[i]] || 0) + 1;
  }

  for (let i = 0; i < s2.length; i += 1) {
    s2CharCount[s2[i]] = (s2CharCount[s2[i]] || 0) + 1;
  }

  let count = 0;

  for (const char in s1CharCount) {
    if (char in s2CharCount) {
      count += Math.min(s1CharCount[char], s2CharCount[char]);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount,
};
