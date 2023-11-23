import checkCollectionToString from "../exercise_06/checkCollectionHasElements.js";
/**
 * Write JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */
/**
 * Tranform collection into string
 * @param {Array} collection 
 * @returns string
 */

const transformCollectionToString = function(collection){

   return checkCollectionToString(collection) ? collection.join(' | ') : '';

}

export default transformCollectionToString;
/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */
