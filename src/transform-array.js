const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  debugger;
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not array');
  }
  const {length} = arr;
  if (!length) return [];

  const DISCARD_PREV = '--discard-prev';
  const DISCARD_NEXT = '--discard-next';
  const DOUBLE_PREV = '--double-prev';
  const DOUBLE_NEXT = '--double-next';
  const isInArray = place => place < length;
  const result = [];

  for (let i = 0; i < length; i++) {
    if (arr[i] === DISCARD_NEXT) {
      if (arr[i + 2] === DISCARD_PREV || arr[i + 2] === DOUBLE_PREV) {
        i += 2;
      } else if (isInArray(i + 1)) {
        i += 1;
      } else {
        break;
      }

    } else if (arr[i] === DOUBLE_NEXT) {
      if (isInArray(i + 1)) {
        result.push(arr[i + 1]);
      }

    } else if (arr[i + 1] === DISCARD_PREV) {
      i += 1;

    } else if (arr[i + 1] === DOUBLE_PREV) {
      result.push(arr[i], arr[i]);
      i += 1;

    } else if (arr[i] === DOUBLE_PREV || arr[i] === DISCARD_PREV) {
      continue;

    } else {
      result.push(arr[i]);
    }
  }

  return result;
};
