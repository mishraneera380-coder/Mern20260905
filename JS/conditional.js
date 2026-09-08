// if-else statement
/* if(condition){
*    //  code
*   }
*/
const age = 18;
const gender ="F";
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

/*Nested if-else statement*/

if(age>=18){
    if(gender == "F"){
        console.log("Adult Female:");
    }else{
        console.log("Adult Male");
    }
    console.log("Adult");

} else{
    if(gender == "F"){
        console.log("Children Female:");
    }else{
        console.log("Children Male");
    }
    console.log("Children");
}

/* switch statement*/
const day = "Sunday";
switch(day){
    case "Sunday":
        console.log("Sunday");
        break;
    case "Monday":
        console.log("Monday");
        //code
        break;
     case "Tuesday":
        console.log("Tuesday");
        //code
        break;
     case "Wednesday":
        console.log("Wednesday");
        //code
        break;
     case "Thursday":
        console.log("Thursday");
        //code
        break;
     case "Friday":
        console.log("Friday");
        //code
        break;
    case "Saturday":
        console.log("Saturday");
        //code
        break;
    default:
        console.log("Invalid day");
        //code
        break;
    
}
// ternary Operator