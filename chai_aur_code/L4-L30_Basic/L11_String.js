/* The String object is used to represent and manipulate a sequence of characters.
   Strings can contain letters, numbers, symbols, and spaces. */

const name = "aman";
const age = 23;

console.log("Hello my name is " + name + " and my age is " + age );                     //not a good way 

// by string interpulation
console.log(`Hello my name is ${name} and my age is ${age}`);                           //we are prefer backticks (` `),   

// <-------------------------------------------------------------------------------------------------------------------------------------->

const brotherName = new String("Ankit");               //*write down on google console and knows all the string method(function) and properties, new keyword is used to create an instance of an object that has a constructor function      

// accese all the method by using dot(.)
console.log(brotherName[2]);                          //return k
console.log(brotherName.__proto__);                   //return {},  it is use to show all the prototype
console.log(brotherName.toUpperCase());               //return ANKIT
console.log(brotherName.charAt(3));                   //return i
console.log(brotherName.indexOf("t"));                //return 4

const fullName="ShubhamSharma";

console.log(fullName[2]);                          //return u
console.log(fullName.toUpperCase());               //SHUBHAMSHARMA
console.log(fullName.charAt(3));                   //return b
console.log(fullName.indexOf("h"));                //*return 1
console.log(fullName.indexOf("t"));                //*return -1

console.log(fullName.substring(0,4));              //*return Shub, 4 is  enclude and negative value not allow if negative value put that treat as 0

const newString=fullName.substring(-4,5);
console.log(newString);                            //return Shubh

console.log(fullName.slice(0,6));                  //return Shubha
console.log(fullName.slice(-8,10));                //*return amasha, -8 =>8 index from back side to 10 index from begining ,negative values is allow


const subject="      Mathematics   ";

console.log(subject);                              //return       Mathematics
console.log(subject.trim());                       //return Mathematics,   trim() =>Removes the leading and trailing white space
console.log(subject.trimStart());                  //return Mathematics,   trimStart() =>Removes the leading white space 
console.log(subject.trimEnd());                    //return       Mthematics,   trimEnd() =>Removes the trailing white space


const broders="Aman-Ankit";

console.log(broders.replace("-","&"));              //return Aman&Ankit
console.log(broders.includes("Aman"));              //return true
console.log(broders.includes("amma"));              //return false

console.log(broders.split("-"));                    //return ['Aman', 'Ankit']

console.log(broders.split(""));                     //return [ 'A', 'm', 'a', 'n', '-', 'A', 'n', 'k', 'i', 't' ]







