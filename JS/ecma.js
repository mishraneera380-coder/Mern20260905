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

// Desturcturing

const course = {
    title: "MERN Stack",
    duartion:" 3 months",
    instructor: "Samikshya",
    fee: 2500,
};


// const title = course.title;
// const duartion  = course.duartion;
// const fee = course.fee;

// Object destructuring
const{title, duartion, instructor ,fee: fees} = course;
console.log(course.title);
console.log(fees);