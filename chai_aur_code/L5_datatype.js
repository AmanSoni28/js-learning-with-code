"use strict";    //treat all js code as newer version

//<--------Primitive datatypes :------------>
//Number => 2 to power 53
//BigInt 
//String => " "
//Boolean => true/false
//Null => standalone value
//Undefined
//Symbol => unique

//<------------Non primitive datatype---------->
//object

let age=28;
let fullName="Aman";
let mobileno=BigInt(8976738697);
let id=Symbol("Hello");
let gender;
let otherName=null;
let single=true;

console.log(typeof age);                         //number      
console.log(typeof fullName);                    //string
console.log(typeof mobileno);                    //bigint
console.log(typeof id);                          //symbol
console.log(typeof gender);                      //undefined
console.log(typeof otherName);                   //object
console.log(typeof single);                      //boolean

console.log(typeof "Shubham");                    //string

console.log(typeof null);                         //object,  null is object type
console.log(typeof undefine);                     //undefine

console.table( [age,fullName,mobileno,id,gender,otherName,single]);          //use to console multiple value in tabular form


//<--two way of execute typeof opration-->
console.log(typeof age);                //first way
console.log(typeof (age));              //second way























