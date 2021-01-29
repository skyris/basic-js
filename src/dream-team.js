const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  const isFirstLetter = str => /[a-z]/i.test(str[0])
  return members
    .filter(name => typeof name === 'string')
    .map(name => name.trim())
    .filter(name => name.length)
    .filter(isFirstLetter)
    .map(name => name[0].toUpperCase())
    .sort()
    .join('')
};
