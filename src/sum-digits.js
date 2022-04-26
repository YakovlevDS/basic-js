const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

    // throw new NotImplementedError('Not implemented');

    const getSum = (a) => ('' + a).split('').reduce((sum, i) => sum + +i, 0)

    let temp = getSum(n)

    while (('' + temp).split('').length > 1) {
        temp = getSum(temp)
    }
    return temp
}



module.exports = {
    getSumOfDigits
};