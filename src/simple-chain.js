const CustomError = require("../extensions/custom-error");

const chainMaker = {
  _chain: [],
  getLength() {
    return this._chain.length;
  },
  addLink(value = '') {
    this._chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position)) {
      this._chain = [];
      throw Error('Wrong type');
    }
    try {
      this._chain.splice(position - 1, 1);
      return this;
    } catch (err) {
      this._chain = [];
      throw Error(err.message);
    }
  },
  reverseChain() {
    this._chain.reverse();
    return this;
  },
  finishChain() {
    const chain = this._chain
      .map(link => `( ${link} )`).join('~~')
    this._chain = []
    return chain
  }
};

module.exports = chainMaker;
