import isTypeOf from "./isTypeOf.js";
console.log(isTypeOf(10, "number"));
console.log(isTypeOf(true, "boolean"));
console.log(isTypeOf("hello", "string"));
console.log(isTypeOf([1, 2, 3], "array"));
console.log(isTypeOf("hello", "array"));
console.log(isTypeOf(10, "string"));
