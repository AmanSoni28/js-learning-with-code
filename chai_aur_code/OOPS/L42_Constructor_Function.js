// <------------------------Object Literal Notation--------------------------------->
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }

}
console.log(user.username)
console.log(user.getUserDetails());
// console.log(this);


// <--------------------Object Constractor Notation---------------------->

function User(username, loginCount, isLoggedIn){
    this.username = username;                     //left side 'username' is varieble of the 'User' function and right side 'username' is parameter of 'User' functipon, 'this' talk about the current contex
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false)       //value is overwrite
// console.log(userOne); 

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);


// The 'new' keyword is fundamental in JavaScript for creating instances of objects that have constructor functions. 
// When you invoke a function with the' new' keyword, the following steps occur:​

// 1.Creation of a New Object: An empty object is created.​
// 2.Prototype Assignment: The new object's internal [[Prototype]] is set to the constructor function's prototype property.​
// 3.Binding this: The 'this' keyword within the constructor function is bound to the newly created object.​
// 4.Execution of Constructor Function: The constructor function is executed with the provided arguments, initializing the object.​
// 5.Return of Object: If the constructor function doesn't explicitly return an object, the newly created object is returned