const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    let arr = email.split('@')
    part = arr[arr.length - 1].split('.')
    let len = part.length - 1

    res = `${part[len-1]}.${part[len]}`
    return res
}

module.exports = {
    getEmailDomain
};