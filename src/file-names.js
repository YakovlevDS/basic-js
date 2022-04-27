const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    let temp = []
    let res = []

    for (let j = 0; j < names.length; j++) {

        temp = names[j]
        let k = 0
        res.push(temp)
        console.log(res);

        for (let i = 0; i < names.length; i++) {
            if (names[i] === temp) {
                if (k === 0) { k++ } else {
                    names[i] = `${names[i]}(${k})`
                    k++
                }
            }
        }
    }
    return res

}

module.exports = {
    renameFiles
};