// if-else statement
/* if(condition){
*    //  code
*   }
*/
const age = 18;
if(age <=18){
    console.log("Is a minor.");
}
else{
    console.log("Not a minor.");
}

/*  if else if - else ladder statement */ 

if( age <= 5){
    console.log("Toddler");
}
else if( age >=6 && age <= 12){
    console.log("Children");
}
else if(age >=13 && age <=19){
    console.log("Teenager");
}
else if(age >=20 && age <=35){
    console.log("Adult");
}
else if(age >=36 && age <=60){
    console.log("Elderely");
}
else{ 
    console.log("Invalid age");
}

// switch statement
// ternary Operator