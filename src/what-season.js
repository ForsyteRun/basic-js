const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let seasons = {
    "January": 'winter',
    "February": 'winter',
    "March": "spring",
    "April": "spring", 
    "May": "spring",
    "June": "summer",
    "July": "summer",
    "August": "summer",
    "September": "automn|fall",
    "October": "automn|fall",
    "November": "automn|fall",
    "December": 'winter',
  }
  
  try {
      if(date !== undefined){
        let month = date.toLocaleString('en-us', {month: 'long'});
        if (seasons[month]) {
          return seasons[month]
        } else {
          throw new Error('Invalid date!')
        }
      } return 'Unable to determine the time of year!'
  } catch (error) {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
}
