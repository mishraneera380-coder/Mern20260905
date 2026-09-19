/***
 * 1. Template literals
 * 2. Destructuring (Array, Object)
 * 3. Spread operator
 * 4. Array methods
 * 5. Arrow function
*/

const name = "Samikshya Mishra";
const age = 18;
const address  = "Laxmipur";

const result = "Myself " + name +" and I'm " + age +" years old. I live in "+address;
console.log(result);

// Template literals

const templateresult = `Myself ${name} and I'm ${age} years old. I live in ${address}.`

console.log(templateresult);