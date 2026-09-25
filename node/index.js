const fs = require("fs");

//Non-blocking operation
fs.readFile("text.txt", "uft-8", (error,data) =>{
    if(error) throw error;

    console.log(data);
}); 

console.log("Hello World");

const name = "samikshya";
console.log(`hello ${name}`);


