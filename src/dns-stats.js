const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arr = domains.map((domain) => domain.split('.'));

  const result = {};

  const counts = {};

  arr.flat().forEach((name) => {
    counts[name] = (counts[name] || 0) + 1;
  });

  arr.forEach((element) => {
    const [c, b, a] = element;

    if (a) {
      result[`.${a}`] = counts[a];
      result[`.${a}.${b}`] = counts[b];
      result[`.${a}.${b}.${c}`] = counts[c];
    } else {
      result[`.${b}`] = counts[b];
      result[`.${b}.${c}`] = counts[c];
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
