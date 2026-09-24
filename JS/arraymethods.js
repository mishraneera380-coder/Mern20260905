const list = [ 
    3,5,2,3,2,6,6,2,3,5,1,5,7,12,7,3,
];

/**Double all the numbers in the list*/ 
const dblList =[];

for(let i=0; i< list.length; i++){
    const dblvalue = list[i] * 2;

    dblList.push(dblvalue);
}

console.log(dblList);



// /**Double all the numbers in the list*/

const dbllList = [];
for(let i = 0; i< list.length; i++){
    const dblvalue = list[i] *3;

    dbllList.push(dblvalue);
}

console.log(dblList);

// /***Map: array.map()*/
// [a,b,c] => Map(y) => [x,y,z]
// /

const dblMapList = list.map( function(item, index){
    const dblvalue = item *2;

    return dblvalue;
});

console.log('================MAP==============');
console.log(dblMapList);

(item, index) =>{
    const dblvalue = item *2;
    return dblvalue;
}

const dblMapLlist = list.map(function(value, index){
    const dblvalue = value * 2;

    return dblvalue;
});

console.log("============MAP===========");
console.log(dblMapLlist);

const dblMMapList = list.map((value, index) => value * 2);

/***
 * Filter: array.filter() => array
 * [a,b,a,a,]=> fiter(a) =>[a,a,a]
 */ 


const evenList = [];
for(let i = 0; i< list.length; i++){
    const isEven = list[i] % 2==0;
    
    if(isEven){
        evenList.push(list[i]);
    }
}

console.log(evenList);

const filterList  = list.filter((value, index) => value % 2 ==0);
console.log("=============FILTER============");
console.log(filterList);

const filteredlist = list.filter(value => value >= 100);

console.log(filteredlist);


const students = [
    {
        name:"Samikshya",
        age: "18",
        faculty:"Bsc.CSIT",
    },
    {
        name:"Sushil",
        age: "19",
        faculty:"BTechAI",
    },
    {
        name:"Nirmala",
        age: "18",
        faculty:"BCA",
    },
    {
        name:"Hemanta",
        age: "20",
        faculty:"BITM",
    },
];

/**Find: array.find()
 * [a,b,c,d]=> find(a)=>a
 * 
 */ 

const foundResult = students.find((value)=> value.name == "Samikshya"); //first found result
console.log(foundResult);

/***
 *Include: array.include(a) => boolean
 *Some: array.some(a) => boolean //if any one result is true the output will be true
 *Every: array.some(a)=> boolean //if all the results are true then only the result will be true otherwise it will be false
*/ 

 const includeResult  =list.includes(12);
console.log(includeResult);

const someResult = list.some((value) => value <= 100); //true
const everyResult = list.every((value)=> value <= 10); // false

console.log( "some:" ,someResult);
console.log("every:"  ,everyResult);

/***Sort: array.sort(a,b)
 * a-b => (ASC) Ascending Order
 * b-a => (DESC) Descending Order
 */ 

list.sort((a,b) => a-b); //asc
console.log(list);

students.sort((a,b) => b.age-a.age); //desc
console.log(students);

/***Reduce/
 */
 
let sum = 0;
for(let i = 0; i< list.length; i++){
    sum = sum +list[i];
}

console.log(sum);

const sumResult = list.reduce((prev, current)=>prev +current, 0);

console.log(sumResult);

 
