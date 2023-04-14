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
function minesweeper(arr) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr[index].length; i++) {
     
      if(arr[0][i] === true){
        arr[0][i+1] = 2
        arr[1][i] = 2
        arr[0][i] = 1
      } else if (arr[index][i] === false | arr[index][i] === true){
        arr[index][i] = 1
      }
      
    }    
}
  return arr
}

module.exports = {
  minesweeper
};
