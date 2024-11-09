const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    addition,
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;

  const strArr = Array.from({ length: repeatTimes }, () => {
    return str;
  });

  const addArr = Array.from({ length: additionRepeatTimes }, () => {
    return addition !== undefined ? `${addition}` : '';
  });

  const result = Array.from({ length: repeatTimes }, (_, index) => {
    return strArr[index] + addArr.join(additionSeparator);
  });

  return result.join(separator);
}

module.exports = {
  repeater,
};
