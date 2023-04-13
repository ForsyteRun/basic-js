const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(mat) {
  let arr = [];

  for (let index = 0; index < mat.length; index++) {
    for (let i = 0; i < mat[index].length; i++) {

      if(index > 0){
        mat[index-1][i] !== 0 && arr.push(mat[index][i])
      } else {
        arr.push(mat[index][i])
      }

    }    
  }

  return arr.reduce((a, b) => a + b)
}

module.exports = {
  getMatrixElementsSum
};
