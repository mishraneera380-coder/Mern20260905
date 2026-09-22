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