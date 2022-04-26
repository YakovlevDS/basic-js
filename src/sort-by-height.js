const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    // throw new NotImplementedError('Not implemented');

    let temp = [...arr]
    let h = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > -1) { h.push(arr[i]) }
    }
    h.sort((a, b) => a - b)
    let k = 0
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > -1) {
            temp[i] = h[k];
            k++
        }
    }
    return temp
}

module.exports = {
    sortByHeight
};