const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!")
    }
    let temp = [...arr]
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === "--double-next") {
            if (temp[i + 1]) {
                temp[i] = temp[i + 1]
                temp[i + 1] = temp[i + 1]
            } else {
                temp[i] = ''
            }
        }
        if (temp[i] === "--discard-prev") {
            if (temp[i - 1]) {
                temp[i - 1] = ''
                temp[i] = ''
            } else {
                temp[i] = ''
            }
        }
        if (temp[i] === "--discard-next") {
            if (temp[i + 1]) {
                temp[i + 1] = ''
                temp[i] = ''
            } else {
                temp[i] = ''
            }
        }
        if (temp[i] === "--double-prev") {
            if (temp[i - 1]) {
                temp[i] = temp[i - 1]
                temp[i - 1] = temp[i - 1]
            } else {
                temp[i] = ''
            }
        }
    }
    temp = temp.filter(i => i != '')
    return temp
}

module.exports = {
    transform
};