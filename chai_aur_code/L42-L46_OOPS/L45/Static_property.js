/* The static keyword in JavaScript is used to define methods and properties that belong to a class itself rather than instances of the class. 
   This means you can call static methods and properties without creating an object of the class.              */

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return console.log(`123`);
    }
}

const hitesh = new User("hitesh")
hitesh.logMe();                               //return : Username: hitesh
//console.log(hitesh.createId())              //ERROR : hitesh.createId is not a function, can not call static method using instance of  class

User.createId();        //123 ,  The createId() method is static, so it can only be called using User.createId(), not from an instance of User.


//note : static method (Or variable) is inherit by other class
class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();               //return : Username: iphone

// console.log(iphone.createId());         //Error : iphone.createId is not a function

Teacher.createId();           //return : 123
