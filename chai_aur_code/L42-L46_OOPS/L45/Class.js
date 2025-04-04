/*In JavaScript, a class is a blueprint for creating objects. 
It allows you to define properties and methods in an organized way, following the principles of object-oriented programming (OOP).     */

class User {
    constructor(username, email, password){      //constructor function call when 'new' create an object
        this.username=username; 
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return (`${this.password}abc`);
    }
    
   capitalUsername(){
    return `${this.username.toUpperCase()}`
   }
}

const chai = new User("Ankit","ankitsoni@27","123");
console.log(chai);                        //return : User { username: 'Ankit', email: 'ankitsoni@27', password: '123' }
console.log(chai.encryptPassword());      //return : 123abc
console.log(chai.capitalUsername());      //return : ANKIT


// <---------------Behind The Scene(if Class is not available in js)------------------->

// function User (username, email, password){
//     this.username=username; 
//     this.email=email;
//     this.password=password;
// }
// User.prototype.encryptPassword= function(){
//     return (`${this.password}abc`);
// }
// User.prototype.capitalUsername= function(){
//     return `${this.username.toUpperCase()}`
// }

// const chai= new User("Ankit","ankitsoni@27","123");

// console.log(chai);                        //return : User { username: 'Ankit', email: 'ankitsoni@27', password: '123' }
// console.log(chai.encryptPassword());      //return : 123abc
// console.log(chai.capitalUsername());      //return : ANKIT