// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.


const accountId=2001;
console.log(accountId);                   //return 2001

// accountId=2002;                          //update is not possible in const
// console.log(accountId);                 //TypeError: Assignment to constant variable.

// const accountId=1000;                //erroe:cannot redeclared const

{
const rollno=5;                          //rollno=5 valid only this scope
console.log(rollno);
}
{
    const rollno=6;                       //rollno.=6 is possible because const variable is A block scope variable this is a new scope
    console.log(rollno);
}

// <--let-->
let name="AMAN";
console.log(name);                       //return AMAN
name="ANKIT";                            //update let variable is posible
console.log(name);                       //return ANKIT
// let name="KHUSHI";                     //error: redeclaretion is not posible


// <--var-->
var id=5;
console.log(id);                         //return 5
id=6;                                    //update is possible
console.log(id);                         //return 6
var id=7;                                //redeclared is possible
console.log(id);                         //return 7

{
var pass=45;
console.log(pass);                        //return 45 
}                                        
{                      
    console.log(pass);                    //return 45 because var is globle scope variable
}

// <------------------------------>
let a;
console.log(a);                            //undefined

var b;
console.log(a);                            //undefined

// const c;                                 //error: for const initialization is impostant

/*prefer not use var
because of issue in block scope and functional scope
*/