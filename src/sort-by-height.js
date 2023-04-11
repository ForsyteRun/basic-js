const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
      let prevNum = arr[j]
      if (prevNum >= 0) {
        let num = j+1
        while (arr[num] < 0) {
          num++
        }
        if (arr[j] > arr[num] && arr[num] >= 0) {
          arr[j] = arr[num] 
          arr[num] = prevNum
        }
      }
    }
   }
   return arr
}

module.exports = {
  sortByHeight
};
