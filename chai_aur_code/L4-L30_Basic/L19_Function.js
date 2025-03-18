/* A function in JavaScript is a block of reusable code that performs a specific task. Functions help organize code, avoid repetition, and improve readability.
 A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
The parentheses may include parameter names separated by commas: (parameter1, parameter2, ...)
The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
  
Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.     

<-------------------------------------------------------------------------------------------------------------------->     */

function myName ()                                //function definition
{
    console.log("Aman");
}
myName();                                         //return Aman, function call


function Add(num1,num2)
{
     console.log(num1+num2);
     
}

Add();                                            //return NaN
Add(4,6);                                         //return 10
Add(4,"8");                                       //return 48
Add(4,"a");                                       //return 4a
console.log(typeof Add);                          //return function


const result=Add(4,5);                            //return 9, but no any value assign in result
console.log(result);                              //*return undefined, because Add function does not return anything

function Add2(num1,num2)
{
     return (num1+num2);                             //"return" the value at function call
     name:"Aman Soni " ;                             //after "return" code is Unreachable(not run)
}

Add2(3,8);                                           //do not print anything, becaause function run and "return" value at Add2(), but not print
const Result= Add(3,8);
console.log(Result);                                 //return 11
console.log(Add(1,2))                                //return 3
console.log(Add2());                                 //NaN


function print(userName)
{
    return (`username is ${userName}`);
}

console.log(print());                               //return username is undefined


function print1(userName)
{
    if(userName===undefined)
    { 
        console.log("Please Enter Username ");
        return;
    }
    return (`username is ${userName}`);
}
console.log(print1());                              //return Please Enter Username
console.log(print1("AMAN"));                        //return username is AMAN

//in js undefine,null and ("")  treat as false, above if condition also written as
function print2(userName)
{
    if(!userName)
    { 
        console.log("Please Enter Username ");
        return;
    }
    return (`username is ${userName}`);
}

console.log(print2());                              //return  Please Enter Username
console.log(print2("AMAN"));                        //return username is AMAN


function number(num = 5)                            //if we does not pass argument then num thakes 5
{
       return (num);
}

console.log(number());                              //return 5
console.log(number(8));                             //return 8