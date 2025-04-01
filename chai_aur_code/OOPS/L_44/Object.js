//function is function as well as Object
function multipleBy5(num){
    return num*5;
}

multipleBy5.aman = 2;

console.log(multipleBy5(5));             //return 25
console.log(multipleBy5.aman);           //retutn 2
console.log(multipleBy5.prototype);      //{}


function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){                  //here create our own prototype(method or property)
    this.score++;                                             //'this' is use for current-contex(increment the score which is call the method)
}
createUser.prototype.printMe = function(){                    //here create our own prototype
    console.log(`price is ${this.score}`);                     //'this' is use for current-contex(print the score which is call the method)
}

const chai = new createUser("chai", 25)                      //chai is Object,  'new' keyword create an object and link it 'cretUser' function and all its prototypes as well as linked newly creted prototypes
const tea = new createUser("tea", 250)

chai.printMe();                 //return : price is 25                 //Use the creted prototype

tea.increment();                               
tea.printMe();                  //retutn : price is 251


/*

Here's what happens behind the scenes when the 'new' keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/