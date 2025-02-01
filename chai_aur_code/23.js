
/* The this keyword in JavaScript refers to the context in which a function is executed.Its value depends on how and where the function is called.     

1. this in the Global Scope
In the global execution context (outside of any function), this refers to:

window object (in browsers)
global object (in Node.js)

console.log(this);            // In a browser, Output: window       */

console.log(this);            //return {}, In note.js


/* 2. this Inside an Object (Method Call)
  When used inside an object method, this refers to the object that owns the method.      */

const user = {
    name: "Aman",
    age: 23,
    welcome: function () {
        console.log(`${this.name}, weclome to website`);
        console.log(this);               //this refer to the current context                        
    }
}

user.welcome();                      //return Aman, weclome to website
user.name="Ankit";
user.welcome();                      //return Ankit, weclome to website

// this.name refers to user.name because welcome() is called on user.

/* 3. this in a Regular Function (Default Binding)
In a regular function (not inside an object), this depends on how the function is called.

In strict mode ("use strict"), this is undefined.
Otherwise, this refers to the global object (window in browsers, global in Node.js).

function show() {
     console.log(this); 
}

show();                  // In browsers: window (or undefined in strict mode)           */

function AMAN()
{
    console.log(this);
}
AMAN();                  //In node.js :globar object


