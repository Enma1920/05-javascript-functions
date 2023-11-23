//imports
import getDistanceMessageFromSumTo100 from "./getDistanceMessageFromSumTo100.js";


/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */
console.log(getDistanceMessageFromSumTo100(70)); // true

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */
console.log(getDistanceMessageFromSumTo100(30)); // false