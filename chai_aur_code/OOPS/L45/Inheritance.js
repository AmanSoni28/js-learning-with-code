// <--------------------------------Inheritance--------------------------------------->
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)                            //when Using class we not need to use call(this,username),super(username)=call(this,username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse();        //return : A new course was added by chai
chai.logMe();            //USERNAME is chai

const masalaChai = new User("masalaChai");
masalaChai.logMe();             //return : USERNAME is masalaChai
 
//masalaChai.addCourse()       //error : Teacher inherit the properties of User,User does not inherit the properties of Teacher

console.log(chai === Teacher)                   //false, chai is instance of Teacher, not equal to Teacher
console.log(chai instanceof Teacher);           //true
console.log(chai instanceof User);              //true
console.log(masalaChai instanceof User);        //true
console.log(masalaChai instanceof Teacher);     //false

