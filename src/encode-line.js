const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    let arrRes = str.match(/(.)\1*/g) || []
    let strRes = arrRes.reduce((sum, v) => sum + v.length + v[0], 0)
    if (strRes == 0) { return '' }
    return ("" + strRes).split('1').join('')
}

module.exports = {
    encodeLine
};