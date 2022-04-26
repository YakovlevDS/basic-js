const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    // throw new NotImplementedError('Not implemented');

    if (!domains.length) { return {} }
    let arr = []
    domains.map(i => {
        arr.push(i.split('.'))

    })
    let max = arr[0].length
    let ind = 0
    arr.map((i, index) => {
        if (i.length > max) {
            max = i.length;
            ind = index;
        }
    })
    let tempArr = arr[ind]
    obj = {}
    let prop = ''
    for (let d = tempArr.length - 1; d >= 0; d--) {
        prop += '.' + tempArr[d]
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            for (let i = arr[j].length - 1; i >= 0; i--) {
                if (tempArr[d] === arr[j][i]) {
                    count += 1
                }
            }
        }
        obj[prop] = count
    }
    return obj
}






module.exports = {
    getDNSStats
};