// Print in console
console.log("hello");
console.error("This is error")
console.warn('This is warning')
console.info("This is info")

//Variable: Memory(RAM) Element: const, let, var
/*
  syntax: let/const/var <var_name> -<value>
*/
var age = 20;
var age = 30;   //bad
var name = "samikshya";
var isFemale = true;
console.log(age);

let marks = 30;
marks = 40;
marks = 20;

console.log(marks);

const address = "Jhapa";

console.log(address);

// Note: NEVER USE var

// Data Types
/*
 * 1. String "samikshya"
 * 2. Number 50, 56.3
 * 3. Boolean True, False
 * 4. Object {key : value}
 * 5. Array [12,43,53,13,32]
 * 6. Null, undefined
 */ 

const studentName="Samikshya Mishra" //string
const Faculty = "BSC CSIT" 
const GPA = 3.78  //Number
const isPass = true;  //Boolean

console.log(studentName, Faculty, GPA, isPass);

// object , key -> Value Pair
const details = {
    name: "Samikshya Mishra",
    GPA:3.78,
    isPass: true,
    address:{
        city: "Jhapa",
        province:"Koshi",
    },
    phone : [98245345234, 123231378],
};

console.log(details["name"]);
console.log(details.isPass);

// Array: list
// Array has index starting from 0(Zero)
const grades=[3.78, 3.88,3.76];
const test=[
    321, 
    "Samikshya", 
    true, 
    false, 
    {class: 10,Faculty :"BSCCSIT"},
    [23,33, "mishra"],
];
console.log(test);
console.log(grades[2]);
console.log(test[1]);
console.log(test[5][0]);
console.log(test[4].Faculty);

console.log('=============Operators==============');

/**
 * Operators
 * 1. Arithmetic Operators : +, -, *, /, %
 * 2. Relational Operators: ==, !=, >, < , <=, >= ,===, !==
 * 3.Logical Operators: && (AND), ||(OR),!(NOT)
  */ 


//Arithmetic Operators
console.log(5+6);
console.log(15-6);
console.log(12*3);
console.log(12/6);
console.log(18%5) //Remainder

console.log(5+ "2"); // 52 (it occurs append)
console.log(15- "8"); //9
console.log("10" + "3"); //103

//Relational operators
console.log(10<5);
console.log(10>5);
console.log(10!=5);
console.log(10 ==5);
console.log(10<= 10);
console.log(10>=11);
console.log(10 === 11);
console.log(10 !== 19);
console.log(10 !== "10");
console.log(10 === "10");

//Logical Operators
/*
*AND : If any one input is false, then result is false
* OR: If any one input is true, then result is true
* NOT: If input is true, then result is false and vice-versa
*/ 

console.log("=========AND===========");
console.log(true && false);

console.log( true && true);


console.log("=========OR===========");
console.log(true || false);
console.log( true|| true);
console.log(false || false);

console.log("=========NOT===========");
console.log(!true);
console.log(!false);