const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
    // throw new NotImplementedError('Not implemented');
    if (!date instanceof Date && !isNaN(date)) { throw new Error('Invalid date!') }
    if (date === undefined) { return 'Unable to determine the time of year!' }

    const seasons = ["spring", "summer", "autumn", "winter"];
    const m = date.getMonth()
    const day = +date.getDate()
    const year = date.getFullYear()

    if (!m || !day || !year) { throw new Error('Invalid date!') }

    if (year < 1970) { throw new Error('Invalid date!') }
    if (date - new Date(0) < 0) { throw new Error('Invalid date!') }
    if (day < 1 || day > 31) { throw new Error('Invalid date!') }
    if (day === 31 && m !== 0 || m !== 2 || m !== 4 || m !== 6 || m !== 7 || m !== 9 || m !== 11) { throw new Error('Invalid date!') }
    if (day === 30 && m !== 3 || m !== 5 || m !== 8 || m !== 10) { throw new Error('Invalid date!') }
    if (day === 29 && m !== 1) { throw new Error('Invalid date!') }
    if (day === 28 && m !== 1) { throw new Error('Invalid date!') }



    if (m === 1 && day === 28 && (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) { throw new Error('Invalid date!') }
    if (m === 1 && day === 29 && !(year % 4 === 0 && year % 100 !== 0) || !year % 400 === 0) { throw new Error('Invalid date!') }



    if (m < 0 || m > 11) { throw new Error('Invalid date!') }
    if (m >= 0 && m < 2 || m === 11) return seasons[3]
    if (m > 1 && m < 5) return seasons[0]
    if (m > 4 && m < 8) return seasons[1]
    if (m > 7 && m < 11) return seasons[2]
}



module.exports = {
    getSeason
};