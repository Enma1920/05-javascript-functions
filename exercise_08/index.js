//imports
import formatStringByWordsLength from "./formatStringByWordsLength.js";


// CASE #1
const case1= formatStringByWordsLength("This is a long, long, long sentence.");
console.log(case1); // "THIS IS A LONG, LONG, LONG SENTENCE."

// CASE #2
const case2 = formatStringByWordsLength("This is short one.");
console.log(case2); // "this is short one."
