const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let nameArr = []

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {

      if (typeof arr[i] === 'string') {
        nameArr.push(arr[i].trim().toUpperCase()[0])
      }
      
    }
  } else {
    return false
  }

  return nameArr.sort().join('')
}

module.exports = {
  createDreamTeam
};
