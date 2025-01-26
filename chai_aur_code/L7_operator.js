// <-----------------operations------------->

console.log(2+3 );                         //return 5
console.log(2/3 );                         //return 0.66666
console.log(2*3);                          //return 6
console.log(2**3);                         //return 8  , (2 power 3) => 8

let str1="Aman";
let str2="Soni";
let str3=str1+str2;
console.log(str3);                          //return AmanSoni


console.log("1"+2);                         //return 12
console.log(1+"2");                         //return 12
console.log("1"+"2");                       //return 12
console.log("1"+2+3);                       //return 123
console.log(1+2+"3");                       //return 33
console.log(1+"2"+"3")                      //return 123
console.log(1+2+"3"+4+5)                    //return 3345
//conclusion => after string all value treat as string


console.log(true);                           //return true
console.log(+true);                          //return 1, but try to do not use because code is complex
console.log(+false)                          //return 0, but try to do not use because code is complex
console.log("");                             //return <space>, but try to do not use because code is complex
console.log(+"");                            //return 0, but try to do not use because code is complex


// <----------------prefix and postfix------------------>

//The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

let count=3;
let newcount=count++;
console.log(count);                          //return 4
console.log(newcount);                       //return 3


//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let Count=3;
let newCount=++Count;
console.log(Count);                           //return 4
console.log(newCount);                        //return 4




//for read documentation search on google=> prefix and postfix js mdn 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion