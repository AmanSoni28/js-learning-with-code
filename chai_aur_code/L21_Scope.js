//  var : global scope variable.
//  let : block scope variable.
//const : block scope variable.
// <--------------------------------------------------------->

if(true)
{
  const a=1;
  let b=2;
  var c=3;
}
// console.log(a);                 //error, a is not define             
// console.log(b);                 //error, b is not define
console.log(c);                    //return 3, beacase c is global variable

// <--------------------------------------------------------->

const A=23;
let B=34;
var C=36;
if(true)
    {
      const A="Aman";
      let B="Ankit";
      var C="Khushi";
      
      console.log(A);               //return Aman
      console.log(B);               //return Ankit
      console.log(C);               //retuen Khushi  
    }

 console.log(A);                    //return 23
 console.log(B);                    //return 34
 console.log(C);                    //return Khushi
    
