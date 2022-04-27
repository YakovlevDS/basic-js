const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    function count(data, i, j) {
        let c = 0;

        const prevRow = data[i - 1];
        const currentRow = data[i]
        const nextRow = data[i + 1];

        [prevRow, currentRow, nextRow].forEach(row => {
            if (row) {
                if (row[j - 1] === true) c++;
                if (row[j] === true) c++;
                if (row[j + 1] === true) c++;
            }
        })

        return c;
    }
    return matrix.map((a, i) => {
        return a.map((b, j) => {
            return b === true ? 1 : count(matrix, i, j)
        })
    })
}


module.exports = {
    minesweeper
};