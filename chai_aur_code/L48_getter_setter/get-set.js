/* In JavaScript, getters and setters allow you to control how an object's properties are accessed and updated. 
   They act like functions but are used as if they were normal properties.

 * Benefits of Getters and Setters
 1.Encapsulation – Hide internal data and control access.
 2.Computed Properties – Return calculated values without storing them explicitly.
 3.Validation – Prevent invalid values from being assigned.                                    */

//1.getter and setter in class (95% use in classes)
class User {
    constructor(email,password){
     this.email=email;
     this.password=password;
    }

    get email(){
     return this._email.toUpperCase();
    }

    set email(value){
        this._email=value;
    }

    get password(){
        return `${this._password}aman`;
    }

    set password(value){
        this._password=value;
    }

}
const identity = new User("amansoni0228@gmail.com","ankit");
console.log(identity.email);
console.log(identity.password);

//2.getter and setter in function(5% use in functions)
function Person(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {                        
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })

}

const chai = new Person("chai@chai.com", "chai");

console.log(chai.email);
console.log(chai.password);

//3.getter and setter in Object(rary use in Objects)

const man = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(man);         //Object.create() => factory function
console.log(tea.email);