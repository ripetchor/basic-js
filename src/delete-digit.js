const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = null;

  const nArr = Array.from(String(n), (element) => Number(element));

  for (let i = 0; i < nArr.length; i += 1) {
    const next = nArr[i + 1];

    if (nArr[i + 1] > nArr[i]) {
      nArr.splice(i, 1);
      max = Number(nArr.join(''));
    }

    if (next < nArr[i] && nArr.length === 2) {
      nArr.pop();
      max = Number(nArr.join(''));
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};
