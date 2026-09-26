const fs = require("fs");

//Non-blocking operation
fs.readFile("text.txt", "utf-8", (error,data) =>{
    if(error) throw error;

    console.log(data);
});  


const result = fs.readFileSync("text.txt", "utf-8")

console.log(result); 

console.log("Hello World"); 

const name  = "samikshya";  
console.log(`hello ${name}`);     
  

