const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    // throw new NotImplementedError('Not implemented');
    let repeatTimes,
        additionRepeatTimes,
        separator,
        addition,
        additionSeparator;
    let str1 = str + ''
    let res = ''

    if (options.hasOwnProperty('separator')) {
        separator = options.separator
        console.log(separator);
    } else {
        separator = '+'
    }
    if (options.hasOwnProperty('repeatTimes')) {
        repeatTimes = options.repeatTimes
        console.log(repeatTimes);
    } else {
        return str1 + options.addition

    }
    if (options.hasOwnProperty('addition')) {
        addition = '' + options.addition
        console.log(addition);
    } else {
        addition = ''
    }
    if (options.hasOwnProperty('additionRepeatTimes')) {
        additionRepeatTimes = options.additionRepeatTimes
        console.log(additionRepeatTimes);
    } else {
        additionRepeatTimes = 0
    }
    if (options.hasOwnProperty('additionSeparator')) {
        additionSeparator = options.additionSeparator
        console.log(additionSeparator);
    } else {
        additionSeparator = '|'
    }







    for (let i = 0; i < repeatTimes; i++) {
        res += str1
        for (let j = 0; j < additionRepeatTimes - 1; j++) {
            res += addition + additionSeparator
        }
        res += addition + separator
    }
    res = res.slice(0, -separator.length)
    return res
}

module.exports = {
    repeater
};