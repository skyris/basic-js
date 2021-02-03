const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth(arr) {
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return 1;
    }

    return 1 + Math.max(...arr.map(this.calculateDepth));
  }

  return 0;
  }
};
