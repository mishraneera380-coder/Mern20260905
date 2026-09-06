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
    console.log(test[4].Faculty)
    