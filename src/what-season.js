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
    if (date === undefined) return 'Unable to determine the time of year!'
    console.log((date));
    // console.log(Object.prototype.toString.call(date));


    // const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

    // console.log(isDateValid("December 17, 1995 03:24:00"));
    if ((typeof date) === 'number') return new Error('Invalid date!')
    if ((typeof date) === 'string') {
        date = new Date(Date.parse(date))
    }
    if (isNaN(date)) return new Error('Invalid date!')
        // console.log(Object.prototype.toString.call(date) === "[object Date]");
    const w = Object.prototype.toString.call(date)
        // || w === "[object Number]"
    if (!w === "[object Date]") {
        // console.log('Value: ');
        return new Error('Invalid date!')
    } else {
        // console.log('прошел ');


        const seasons = ["spring", "summer", "autumn", "winter"];
        let m = date.getMonth()
        let day = +date.getDate()
        const year = date.getFullYear()
        console.log(day, m, year);

        if (year < 0) return new Error('Invalid date!')
            // if (year < 1970) return new Error('Invalid date!')
            // if (date - new Date(0) < 0) return new Error('Invalid date!')

        const m1 = [0, 2, 4, 6, 7, 9, 11]
        const m2 = [3, 5, 8, 10, ...m1]

        if (day < 0 || day > 31) return new Error('Invalid date!')


        if (day === 31 && !m1.includes(m)) return new Error('Invalid date!')
        if (day === 30 && !m2.includes(m)) return new Error('Invalid date!')
        if (day > 29 && m === 1) return new Error('Invalid date!')


        const a = year % 4 === 0
        const b = year % 100 === 0
        const c = year % 400 === 0
        const ily = a && b && c
            // a && b && c //условие высокосного года
        if (m === 1 && day === 29) {
            if (!ily) return new Error('Invalid date!')
        }

        if (m === 1 && day === 28) {
            if (ily) return new Error('Invalid date!')
        }

        if (m < 0 || m > 11) return new Error('Invalid date!')
        if (m >= 0 && m < 2 || m === 11) return seasons[3]
        if (m > 1 && m < 5) return seasons[0]
        if (m > 4 && m < 8) return seasons[1]
        if (m > 7 && m < 11) return seasons[2]
    }
}





module.exports = {
    getSeason
};