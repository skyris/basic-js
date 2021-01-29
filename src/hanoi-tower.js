const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2**disksNumber - 1
  const SECONDS_IN_HOUR = 3600
  const seconds = Math.floor(SECONDS_IN_HOUR * turns / turnsSpeed)
  return {turns: turns, seconds: seconds}
};
