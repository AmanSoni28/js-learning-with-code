
/* <-----------------------------------notes--------------------------------------->
   The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.
   Objects can be created using the Object() constructor or the object initializer / literal syntax.     
   In object constractor create "singleton" object
   In object literal does not created "singleton" object
   "Singleton" ensures only one instance of an object is created and shared across the program.
<------------------------------------------------------------------------------------------------>        */

// <------------------------Object Literal Notation--------------------------------->

const mydetail = {                              //In object we define,   key : value
    name : "Aman",                               
    age : 23,
    add : "varanasi",
    email : "amansoni0228@gmail.com" ,
    garduate: true,
    hobies: ["singing", "Dancing"]
}

//two way of acces object 
console.log(mydetail.name);                     //return Aman,   1 way by dot(.) operator
console.log(mydetail["name"]);                  //return Aman,   2 way by square bracket 

console.log(typeof mydetail);                   //return object
console.log(typeof mydetail.name);              //return string
console.log(typeof mydetail.age);               //return number

console.log(mydetail.hobies[1]);                //return dancing

//add a function  in object
mydetail.greeting = function () {
    console.log("Hello good morning");
}
console.log(mydetail.greeting);                 //*return  [Function (anonymous)], here function not execute only return reference of function
console.log(mydetail.greeting());               //return Hello good morning          

mydetail.greeting2 = function () {
    console.log(`hello my name is ${this.name}`);
}
console.log(mydetail.greeting2());               //return hello my name is Aman

console.log(mydetail);                                                                                                                      

//chage the values of object
mydetail.name = "Ankit";
console.log(mydetail.name);                     //return Ankit
                      
//freeze the value of object
Object.freeze(mydetail);                        //now does not change the values of object

mydetail.age= 25;
console.log(mydetail.age);                      //return 23, chenge is not applied


const obj = {
    "full Name" : "Aman Soni"
}
//now we can not access the "full Name" by using dot(.) operator, only access by using square bracket
console.log(obj["full Name"]);                  //return Aman Soni


//* Q.create a symbol and use it as a key of an object
const mySym = Symbol("Hello!");

const newobj = {
    [mySym] : "Hii"
}
//it is access by only square bracket 
console.log(newobj[mySym]);                      //return Hii, here we does not use ""                 
console.log(newobj);                             //return { [Symbol(Hello!)]: 'Hii' }, this shows key is Symbol

