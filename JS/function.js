/*
 * Function: Perfrom specific tasks
 * 
 * function <functionName> (params)? {
 * //code
 * }
 * 
*/

function square(value){
    console.log("square:", value * value);
}
square(6);
square(4);
square(3);


function greet(name){
    console.log("Hello",name);
}
greet("Samikshya")
greet("Neera")

function sum(value1, value2){
    console.log(value1 + value2);
}
sum(12, 45); //function call
sum(1, 4);

// ("============ Next method using return ===========")

function sumReturn(value1, value2){
    const result = value1 + value2;

    return result;
}

const addedResult = sumReturn(34,65);
square(addedResult)
console.log(addedResult);

// ==================================
function myValue(val1, val2){
    const addedvalue = val1 + val2;
    const sqValue = addedvalue * addedvalue;
    return addedvalue;
    
}

const addedval= myValue(2,5);
square(addedval)
console.log(addedval);