const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this._isCorrectPosition(position)) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this._clearChain();
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const output = this.chain.join('~~');
    this._clearChain();
    return output;
  },
  _isCorrectPosition(position) {
    return (
      !isNaN(position) && Number.isInteger(position) && position < this.chain.length && position > 0
    );
  },
  _clearChain() {
    this.chain.length = 0;
  },
};

module.exports = {
  chainMaker,
};
