const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} 
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arrN = n.toString().split('').map(i => +i)

    let minNum
    if (arrN[0] < arrN[1]) { minNum = arrN[0] } else {
        minNum = Math.min(...arrN)
    }


    let ind = arrN.indexOf(minNum)
    if (ind !== -1) arrN.splice(ind, 1)
    const str = arrN.join('')
    return +str
}

module.exports = {
    deleteDigit
};