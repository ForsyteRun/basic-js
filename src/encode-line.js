const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let resStr = ''
  for (let i = 0; i < arr.length; i++) {
  
    if (arr[i] !== arr[i+1]) {
      let res =  arr.filter(item => item === arr[i]).length
      resStr += `${res}${arr[i]}`
    }
  }

  return resStr
}

module.exports = {
  encodeLine
};
