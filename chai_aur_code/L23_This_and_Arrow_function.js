
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
        // console.log(this);               //this refer to the current context                        
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

function show()
{
    console.log(this);
}
show();                  //In node.js :globar object

/*<---------------------------------------------------------------------------------------------->  */

function course()
{
    let subject = "Mathematics";
    console.log(this.subject);        // return undefined ( this is not work in the function)     
}
course(); 

const fun= function (){
    let subject = "Mathematics";
    console.log(this.subject);  
}
fun();                // return undefined

/* <--------------------------Arrow function----------------------------> */

// Arrow Function 

const fun1 = () => {
    let subject = "Mathematics";
    console.log(this.subject);  
}
fun1()     // return undefined


//basic syntax of arrow function  () => {} 

const addTwo= (num1,num2) => {
    return (num1+num2);
}

console.log(addTwo(4,6));               //return 10


// implicit return arrow function

const addTwo2 = (num1,num2) => (num1+num2);         // no need of return keyword because we used () bracket but when we use {} then we need to use return keyword
console.log(addTwo2(2,4));              //return 6          


//when we want to return object
const uncle = (naam,umar) => ({Name:naam, age:umar})
console.log( uncle("Punit",40));            //return { Name: 'Punit', age: 23 }

/*<------------------------------------------------------------------------------------------>

4. this in an Arrow Function
Arrow functions do not have their own this. Instead, they inherit this from their surrounding scope.  */

const person = {
    name: "Shubham",
    greet: function () {
        const arrowFunc = () => console.log(this.name);
        arrowFunc();
    }
};

person.greet();       // return Shubham

// this inside arrowFunc() refers to this of greet(), which is person.

