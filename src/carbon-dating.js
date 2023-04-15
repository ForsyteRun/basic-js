const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// (ln(MODERN_ACTIVITY/A)*HALF_LIFE_PERIOD)/0.693;
/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(str) {
  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  if(typeof str !=='string' | Number(str) > MODERN_ACTIVITY){
    return false
  }

  if(Number(str) < 0){
    return false
  } 

  if (Number(str)) {
    return Math.ceil((Math.log(MODERN_ACTIVITY/str)*HALF_LIFE_PERIOD)/0.693)
  } else {
    return false
  }
}

module.exports = {
  dateSample
};
