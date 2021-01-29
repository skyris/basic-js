const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    const activity = parseInt(sampleActivity, 10)
    // Input validation
    if (typeof sampleActivity !== 'string') return false
    if (isNaN(activity)) return false
    if (activity > MODERN_ACTIVITY || activity <= 0) return false
    // Radioisotope Dating Formula     
    return Math.log(activity / MODERN_ACTIVITY) * HALF_LIFE_PERIOD / 0.693
};
