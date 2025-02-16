// <------------compare same datatype-------------------->
console.log(2>1);                           //return true
console.log(2<1);                           //return false
console.log(2>=1);                          //return true
console.log(2<=1);                          //return false
console.log(2==1);                          //return false
console.log(2!=1);                          //return true


// <-------------compare different datatypes------------->
console.log("2">1);                         //return true
console.log("02">1);                        //return true


console.log(null>0);                        //return false
console.log(null<0);                        //return false
console.log(null==0);                       //*return false
console.log(null>=0);                       //*return true

/*The reason is that an equality check == and comparisons >,<,>=,<= work differently.         <= most imp line
Comparisons convert null to a number, treating it as 0.
That's why (18)null>=0 is true and (15)null>0 is false.   */ 



console.log(undefined>0);                        //return false
console.log(undefined<0);                        //return false
console.log(undefined==0);                       //return false
console.log(undefined>=0);                       //return false

//avoid the comparison with null,undefined


// < "===" check value as well as datatype >
console.log("5"==5);                             //return true
console.log("5"===5);                            //return false

