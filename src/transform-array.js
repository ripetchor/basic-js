const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

const isDiscardNext = (str) => str === '--discard-next';

const isDiscardPrev = (str) => str === '--discard-prev';

const isDoubleNext = (str) => str === '--double-next';

const isDoublePrev = (str) => str === '--double-prev';

function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [...arr];

  arr.forEach((element, index) => {
    isDiscardNext(element) && arr[index + 1] && result.splice(index + 1, 1);
    isDiscardPrev(element) && arr[index - 1] && result.splice(index - 1, 1);
    isDoubleNext(element) && arr[index + 1] && result.splice(index + 1, 0, result[index + 1]);
    isDoublePrev(element) && arr[index - 1] && result.splice(index - 1, 0, result[index - 1]);
  });

  return result.filter((element) => {
    return (
      !isDiscardNext(element) &&
      !isDiscardPrev(element) &&
      !isDoubleNext(element) &&
      !isDoublePrev(element)
    );
  });
}

module.exports = {
  transform,
};
