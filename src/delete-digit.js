const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('')
  let resArr = []
    //152
    for (let i = 0; i < arr.length; i++) {
    let arrLocal = [...arr]

    
    for (let index = 0; index < arrLocal.length; index++) {
      arrLocal[i] = null;
      resArr.push(arrLocal.slice(0))
    }
  }
  
  return Math.max(...resArr.map(el => +el.join('')))
}

module.exports = {
  deleteDigit
};
