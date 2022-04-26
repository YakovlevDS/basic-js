const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(arr) {
        // throw new NotImplementedError('Not implemented');
        Array.isArray(arr) ? 1 + this.calculateDepth(arr[0]) : 0;
        // let s1 = JSON.stringify(arr)
        // let m1 = [...s1]
        // var m2 = m1.filter(i => (i == "[" || i == "]"))
        // var s2 = m2.join("")
        // console.log(s2);
        // let sum = 0;
        // while (s2.length != 0) {
        //     Попап реализован на обеих страницах: +15.(/\[\]/g, "");
        // }
        //     sum++

        // return sum
    }
}

module.exports = {
    DepthCalculator
};