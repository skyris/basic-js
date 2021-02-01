const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const {
    separator = '+',
    addition = '',
    additionSeparator = '|',
    repeatTimes = 1,
    additionRepeatTimes = 1
  } = options;
  const createdSeparator = Array(additionRepeatTimes)
    .fill('' + addition)
    .join(additionSeparator);
  const resultString = Array(repeatTimes)
    .fill(str + createdSeparator)
    .join(separator);

  return resultString;
};
