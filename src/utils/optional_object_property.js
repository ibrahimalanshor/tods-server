const nullOrUndefined = require('./null_or_undefined.js');

module.exports = (cond, key, val) =>
  !nullOrUndefined(cond) ? { [key]: val } : {};
