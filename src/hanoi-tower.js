const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
    // throw new NotImplementedError('Not implemented');

    const v = turnsSpeed / 3600;
    let res = {};
    let turns;
    let seconds;
    turns = 2 ** disksNumber - 1;
    seconds = Math.floor(turns / v)
    res['turns'] = turns
    res['seconds'] = seconds
    return res
}

module.exports = {
    calculateHanoi
};