/*<------------------------------------IIFE in js-------------------------------------------------------------------- 
IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs immediately after it is defined. 
It is useful for creating a private scope to avoid polluting the global namespace.

Syntax of IIFE
An IIFE is a function wrapped inside parentheses and followed by () to invoke it immediately:  
basic syntax : ()() , The first () contains the function definition and second () executes the function.

Why Use IIFE?
Avoid Global Scope Pollution: Variables inside an IIFE are not accessible outside, preventing conflicts.
Encapsulation: It helps create private variables that cannot be accessed from outside.
Execution Context: Since it runs immediately, it is useful for initialization tasks.
<----------------------------------------------------------------------------------------------------------------------- */

(function data()                              //named IIFE
{
       console.log("Hello my name is Aman");
}) ();                                                 /* return Hello my name is Aman, here semicolon(;) is important to end the IIFE.
                                                          otherwise when we declare next another IIFE then show error */

// IIFE usin arrow function

( ()=>{                                                    //Anonymous IIFE: Function without a name
    enrollment =240231009;                                 //*'enrollment' can not access outside of function
    console.log("My enrollment No.=", enrollment);
})();


// IIFE with Parameters

( (age)=>{
    console.log(`My age = ${age}`)
})(23);
