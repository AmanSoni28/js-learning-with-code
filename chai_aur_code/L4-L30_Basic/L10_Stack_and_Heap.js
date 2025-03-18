// Stack store primirive datatype
// Heap store Non-primitive datatype

/*stack passed the copy of original values
  Heap passed the reference of original values */   


// <------primitive, values store in stack memory------->
let name="Aman";
let Sname = name ;                     //*name passed copy of "Aman" not original value 
Sname = "Ankit";                       //*change in copied value not in original value

console.log(name);                     //return Aman
console.log(Sname);                    //return Ankit


// <-----Non-primitive, values store in Heap memory----->
let user1 = {
       email: "amangmail",
       accountNo: 76487874
}

let user2= user1;                       //*user1 passed the reference on original values

user2.email="ankitgmail";               //*change in original values because take the reference of original values
 
console.log(user1.email);               //return ankitgmail
console.log(user2.email);               //return ankitgmail