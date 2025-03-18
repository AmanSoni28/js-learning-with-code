function one()
{
   const name = "Aman";
   function two()
   {
    const age = 23;
    console.log(name);
   }
//    console.log(age);                    //erron,age is not defined because age is declare in the scope of function two
   two();
}

// one();                                  //return Aman

// <-------------------------------------------------------------------->

if(true)
{
    const name = "Aman";
    if(name==="Aman")
    {
        const age = 25;
        console.log(name+age);
    }
    // console.log(age);                    //error, age is not defined because age is declare in the scope of inner "if" statement 
}

// console.log(name);                       //error, name is not defined

// <----------------------------------Hoisting in js--------------------------------------------------------->

console.log(addOne(1));                    //return 2
function addOne(num)                       //here Function is create by the way of "Function Declaration"
{
    return (num+1);
}

console.log(addOne(1));                   //return 2


// console.log(addTwo(1));                //*erroe, Cannot access 'addTwo' before initialization
const addTwo= function (num){             //here Function is create by the way of "Function Expression"
    return (num+2);
}
console.log(addTwo(1));                   //return 3


/*<----------This note in very important----------------->
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before the code is executed. 
This means you can use functions and variables before they are declared in your code.

1. Hoisting with var
When a variable is declared with var, JavaScript moves (hoists) the declaration to the top but does not initialize it.

Example 1: Hoisting with var

console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10

The declaration var a; is hoisted to the top.
The initialization a = 10; stays in place.
Since the variable is declared but not initialized at the time of console.log(a);, it prints undefined.
Internally, JavaScript treats the above code as:

var a; // Hoisted declaration
console.log(a); // undefined
a = 10;
console.log(a); // 10

2. Hoisting with let and const
Unlike var, variables declared with let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.

Example 2: Hoisting with let

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

Example 3: Hoisting with const
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;

let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until they are initialized.
Accessing them before declaration results in a ReferenceError.

3. Hoisting with Functions
Function declarations are fully hoisted, meaning you can call them before they are defined.

Example 4: Hoisting with Function Declaration
greet(); // Output: Hello, world!

function greet() {
    console.log("Hello, world!");
}

The entire function declaration is hoisted to the top, allowing it to be called before its definition.
However, function expressions (assigned to a variable) are not fully hoisted.

Example 5: Hoisting with Function Expression
sayHello(); // TypeError: sayHello is not a function

var sayHello = function() {
    console.log("Hello!");
};

var sayHello; is hoisted, but the function is not assigned at that point.
Since sayHello is undefined when called, it throws an error.

4. Summary
Feature	                         Hoisted?	                              Can be Used Before Declaration?
var	                            ✅ Yes (Declaration Only)	                 ❌ Yes, but value is undefined
let	                            ✅ Yes (Declaration Only)	                 ❌ No, ReferenceError
const                          	✅ Yes (Declaration Only)	                 ❌ No, ReferenceError
Function Declaration	        ✅ Yes (Entire Function)	                     ✅ Yes
Function Expression	            ✅ Yes (Variable Only)	                     ❌ No, TypeError

Conclusion:
Hoisting moves declarations, but not initializations.
var is hoisted but initialized as undefined.
let and const are hoisted but stay in the Temporal Dead Zone.
Function declarations are fully hoisted.
Function expressions are hoisted as variables (not as functions).                                
<-------------------------------------------------------------------------->

Temporal Dead Zone (TDZ)
The Temporal Dead Zone (TDZ) is a critical concept in JavaScript hoisting. 
It refers to the period between the entering of a scope (such as a function or block) and the actual initialization of a variable declared with let or const.
During this time, any reference to the variable before its initialization will throw a ReferenceError.

How does the TDZ Work?

Variables declared with let and const are hoisted to the top of their scope, but they are not initialized until their declaration line is reached.
Any attempt to access these variables before their declaration will result in an error.
The TDZ exists only for variables declared using let and const. Variables declared with var do not have this issue, as they are hoisted and initialized to undefined.
*/