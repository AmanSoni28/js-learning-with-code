// <---------------Numbers in js---------------->

const score= 200;                                    //here js detect 100 is number type
console.log(score);

const balance = new Number(400);                     //*now this is 100% sure 400 is number,   write down on google console and knows all the "Number" method(function) and properties, new keyword use to creat an abjectb, here Number type of object is created 
console.log(balance);

// accese all the method by using dot(.)
console.log(balance.toString().length);              //*number covert in string, now we can apply all the properties of string on number

const price=128.8786436;

console.log(price.toFixed(2));                       //return 128.88, fixed the value 2 digit after decimal
console.log(price.toPrecision(4));                   //return 128.9,  precise the value from begining  

const badget=100000000;
console.log(badget.toLocaleString("en-IN"));         //return 10,00,00,000,  use to apply comma

// <---------knows some number related knowledge------------>
console.log(Number.MAX_SAFE_INTEGER);                //return 9007199254740991, max range of safe int number
console.log(Number.MIN_SAFE_INTEGER);                //return -9007199254740991, min range of safe int number



// <------------------------------Maths in js------------------------------->

console.log(Math);                                    //write down on google console and knows all the "Math" method(function) and properties, Math is an object have many properties and methods(function) for mathematical constants and functions  

console.log(Math.PI);                                 //return 3.141592653589793,  property
console.log(Math.abs(-5));                            //return 5,    method     
console.log(Math.max(5,7,8,99));                      //return 99
console.log(Math.min(5,7,8,99));                      //return 5
console.log(Math.pow(2,3));                           //return 8
console.log(Math.sqrt(81));                           //return 9
console.log(Math.round(5.7));                         //return 6
console.log(Math.round(5.4));                         //return 5
console.log(Math.ceil(4.2));                          //return 5,  return Least Integer Function
console.log(Math.floor(4.2));                         //return 4,  return Greatest Integer Function

console.log(Math.random());                           //return the random value greater than or equal to 0 and less than 1
console.log((Math.random()*10)+1);                    //return the random value greater than or equal to 1 and less than 11
console.log(Math.floor(Math.random()*10)+1);          //return the value from 1 to 10

//*min and max (both included)=> Math.floor(Math.random()*(max-min+1))+min;     

//Example, value from 10 to 20
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);

//* min (included) and max (excluded)=> Math.floor(Math.random() * (max - min) ) + min;   

//Example, value from 10(include) to 20(exclude)
console.log(Math.floor(Math.random() * (max - min) ) + min);
