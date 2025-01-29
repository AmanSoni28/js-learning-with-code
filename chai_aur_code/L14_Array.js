/*     <----------------------------notes----------------------------------->

The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).            */

// <-------------------------------------------------------------------------------------------------------------------------->

const heros= [1, 4, "shaktiman", "krish"];
console.log(heros[3]);                             //return krish
console.log(typeof heros);                         //return object

const number= new Array(4,5,6,7,8);                // write down on google console and knows all the "Number" method(function) and properties
console.log(number);                               //[4,5,6,7,8]
console.log(number.length)                         //return 5

// methods of Array
const myArr = [1,2,3,4,5]; 

myArr.push(6);                                     //Appends new elements to the end of an array
console.log(myArr);                                //return [1,2,3,4,5,6]

myArr.pop();                                       //Removes the last element from an array
console.log(myArr);                                //return [1,2,3,4,5]

myArr.unshift(0)                                   //Inserts new elements at the start of an array
console.log(myArr);                                //return [0,1,2,3,4,5]

myArr.shift();                                     //Removes the first element from an array
console.log(myArr);                                //return [1,2,,3,4,5]

console.log(myArr.includes(2));                    //return true, because 2 is lie in array
console.log(myArr.includes(0));                    //return false
console.log(myArr.indexOf(2));                     //return 1

const newArr=myArr.join();                         //Adds all the elements of an array into a string, separated by the specified separator string.

console.log(newArr);                               //return 1,2,3,4,5
console.log(typeof newArr);                        //return string

//Important slice and splice
const arr= [1,2,3,4,5,6]; 
const my1= arr.slice(1,3);                         //*slice =>Returns a copy of a section of an array, here copy the section(index(1) include to index(3) exclude) of array(arr) assingn in array(my1), dose note change the original array(arr)
console.log(my1);                                  //return [2,3]
console.log(arr);                                  //return [1,2,3,4,5,6]

const my2= arr.splice(1,3);                        //*splice =>Removes elements from an array, here remove element(index(1) include to index(3) include) is remove from array(arr) and assign in array(my2), it is change the original array(arr)
console.log(my2);                                  //return [2,3,4]
console.log(arr);                                  //return [1,5,6]
