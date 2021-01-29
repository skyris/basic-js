const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
      return 'Unable to determine the time of year!'
    }
    const isDate = date => date instanceof Date;
    if (!isDate(date)) {
      throw new Error('Not a Date');
    }
    const months = {
        '1': 'winter',
        '2': 'winter',
        '3': 'spring',
        '4': 'spring',
        '5': 'spring',
        '6': 'summer',
        '7': 'summer',
        '8': 'summer',
        '9': 'autumn',
        '10': 'autumn',
        '11': 'autumn',
        '12': 'winter'
    }
    const monthNumber = (date).toLocaleDateString().split('/')[0]
    return months[monthNumber]
};
