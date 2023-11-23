//imports
import transformCollectionToString from "./transformCollectionToString.js";

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */
console.log(transformCollectionToString(["apple", "grapes", "strawberries"])); // "apple | grapes | strawberries"
/**
 * CASE #2
 * input: []
 * output: ""
 */
console.log(transformCollectionToString([])); // ""
