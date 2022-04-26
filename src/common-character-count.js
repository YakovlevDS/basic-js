const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

    // throw new NotImplementedError('Not implemented');
    const arrStr1 = s1.split("").sort()
    const arrStr2 = s2.split("").sort()

    let len1 = arrStr1.length
    let len2 = arrStr2.length
    console.log(len1);
    console.log(len2);
    tempMaxArr = len1 >= len2 ? [...arrStr1] : [...arrStr2]
    tempMinArr = len1 < len2 ? [...arrStr1] : [...arrStr2]
    console.log(tempMaxArr);
    console.log(tempMinArr);
    let sum = 0
    for (let i = 0; i < tempMaxArr.length; i++) {
        if (tempMinArr.includes(tempMaxArr[i])) {
            tempMinArr[tempMinArr.indexOf(tempMaxArr[i])] = -1
            sum += 1
        }
    }
    return sum

}


module.exports = {
    getCommonCharacterCount
};