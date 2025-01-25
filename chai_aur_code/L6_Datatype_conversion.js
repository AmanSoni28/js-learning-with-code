let score ="28";
console.log(typeof score);                     //return string
let valueInNumber = Number(score);          
console.log(typeof valueInNumber);             //return number
console.log(valueInNumber );                   //return 28


let age ="twenty";
console.log(typeof age);                       //return string
let ageInNumber = Number(age);
console.log(typeof ageInNumber);               //return number
console.log(ageInNumber );                     //return NaN


let price =null;
console.log(typeof price);                       //return object
let priceInNumber = Number(price);
console.log(typeof priceInNumber);               //return number
console.log(priceInNumber );                     //return 0


let id =undefined;
console.log(typeof id);                       //return undefine
let idInNumber = Number(id);
console.log(typeof idInNumber);               //return number
console.log(idInNumber);                      //return NaN


let speak=true;
console.log(typeof speak);                       //return boolean
let speakInNumber = Number(speak);
console.log(typeof speakInNumber);               //return number
console.log(speakInNumber);                      //return 1

//<-----conversion---->
// "28" => 28
// "twenty"=> NaN
//null => 0
//undefine => NaN
//true => 1  and false => 0

//<-------------------------------------->

/*let isLoggedIn=1;                                 
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);   */                 //return true

/*let isLoggedIn="";                                 
 let booleanIsLoggedIn=Boolean(isLoggedIn);
 console.log(booleanIsLoggedIn);*/                   //return false

let isLoggedIn="Aman";                                 
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);                       //return true

//<-------conversion-------->
//1 => true;  0 =>false
//"" => false
//"Aman" => true


//<----------------------------------------------->

let someValue=35;
let stringValue=String(someValue);
console.log(typeof stringValue);                       //return string
console.log(stringValue);                              //return 35



