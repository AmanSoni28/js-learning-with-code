// <-------primitive datatype-------->
//7 type: Number, String, Boolean, Null, Undefined, Symbol, BigInt

const score=100.3;
const name="Aman";
const isLoggedIn=false;
const outsideTemp=null;
let userEmail;

const id =Symbol("123");                              // Symbel use to make unique
const anotherId=Symbol("123");
console.log(id===anotherId);                          //*return false, because Sybbol gives uniqueness


const bigNumber=284397684884579883n;

console.log(typeof score);                            //return number
console.log(typeof name);                             //return string
console.log(typeof isLoggedIn);                       //return boolean
console.log(typeof outsideTemp);                      //*return object
console.log(typeof userEmail);                        //return undefined
console.log(typeof id);                               //return symbol
console.log(typeof bigNumber);                        //return bigint

// <--------Reference(Non primitive) datatype--------->
// Array, Object, Function

const hero =["shaktiman", "naagraj", "krish"];

let myObj = {
    fullName: "Ankit",
    age: 25
}
const myFunction=function(){
    console.log("hello Word");
}

console.log(typeof hero);                              //return object 
console.log(typeof myObj);                             //return object
console.log(typeof myFunction);                        //return function,     function => aka "object function"



