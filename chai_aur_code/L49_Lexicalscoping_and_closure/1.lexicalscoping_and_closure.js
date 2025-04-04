  // <--------------------------lexical scoping------------------------------->
  function outer(){
    let username = "hitesh"

    function inner(){
        let secret = "my123" 
        console.log("inner", username);                 //note: variable of outer fuction is access by inner function
    }
    inner();
    // console.log("OUTER", secret);                    //error :'srcret' is variable of inner fuction so it is not access outside of inner function
}
outer();
// console.log("TOO OUTER", username);                    //error : 'username' is variable of Outer fuction so it is not access outside of Outer function

// <-------------------------------Closure------------------------------------------>
// A closure is created when a function is defined inside another function and it 'remembers' the variables from the outer function — even after the outer function has finished executing.
// A closure is a function that remembers variables from where it was created, even if you call it somewhere else.

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;              // here makeFunc() return the function displayName() as well as lexical scope of displayName(), means all varieble(name) of makeFunc()       
}

const myFunc = makeFunc();           //return : Mozilla, here comes the function displayName() as well as lexical scope of displayName(), means all varieble(name) of makeFunc()
myFunc();