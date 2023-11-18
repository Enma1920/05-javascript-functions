/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate a rounded number depending on a limit
 * @param {number} limit 
 * @returns {number} randomNumber
 */

function generateRandomNumberInRange(limit) {

    const randomNumber = Math.round(Math.random() * limit);

    return randomNumber;

}

export default generateRandomNumberInRange;