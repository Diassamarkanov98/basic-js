const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const sampleActiveNumber = Number(sampleActivity); 
    if (isNaN(sampleActiveNumber)                 || 
        sampleActiveNumber <= 0                   || 
        sampleActiveNumber > 15                   || 
        typeof sampleActivity !== String) {
      return false;
    } else {
      const yearCnt = (Math.log((MODERN_ACTIVITY / sampleActiveNumber) / (0.639 / HALF_LIFE_PERIOD)));
      return yearCnt;
    }
};
