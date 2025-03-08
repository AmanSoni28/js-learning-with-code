const num=[1,2,3,4,5,6,7,8,9,10];

const mynum=num.forEach((item)=>{                  //forEach assing(return) nothing
  return item;
});            
console.log(mynum);                                //output: undefined

/*In JavaScript, the filter() method is used on arrays to create a new array containing elements that pass a specific test (a function you provide).
  It does not modify the original array.           */

// const number=num.filter((item)=>{return item>4});       //filtor method also has the callback function
const number=num.filter((item)=>(item>4));                //*here no need of return keyword because we used () bracket but when we use {} then we need to use return keyword
console.log(number);                    //output [ 5, 6, 7, 8, 9, 10 ]


//by using forEach
const newnum=[];

num.forEach((item)=>{
    if(item>4)
    newnum.push(item);
});
console.log(newnum);


const book=[
  {
    book_id : 1, genre : "math", publish : 1808,edition : 2010
  },
  {
    book_id : 2, genre : "os", publish : 1856,edition : 2011
  },
  {
    book_id : 3, genre : "math", publish : 1801,edition : 2015
  },
  {
    book_id : 4, genre : "os", publish : 1905,edition : 2020
  },
  {
    book_id : 5, genre : "eglish", publish : 2008,edition : 2025
  }
];


const newbook=(book.filter((obj)=>obj.genre==="math"));
console.log(newbook);

console.log(book.filter((obj)=>obj.publish>=1900));  
     
console.log(book.filter((obj)=>{return obj.book_id==4}));          //here we use curlly braket "{}" so we use "return" keyword

console.log(book.filter((obj)=>{
  return obj.genre==="os" && obj.publish>=1900 ;
})); 


/*The .map() method in JavaScript is an array method used to create a new array by applying a function to each element of an existing array. 
It does not modify the original array but returns a new one. 
array.map(callback(currentValue, index, array), thisArg);       */


const arr=[1,2,3,4,5,6,7,8,9,10];                   
const newarr=arr.map((val)=>val + 10);               //map also has the callback function
console.log(newarr);                                 //output [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// <----------------chaining => use multiple method in single statement------------->
// in chaining result of one method is pass out to the next method

const myarr= arr.map((val)=>val * 10).map((val)=>val + 8);
console.log(myarr);                    //output [ 18, 28, 38, 48,  58, 68, 78, 88, 98, 108]

const array=arr
             .map((item)=>item+5)
             .filter((item)=>item>=12);
console.log(array);                    //output [ 12, 13, 14, 15 ]


// <---------------reduce method------------------->
/* The reduce() method in JavaScript is used to iterate over an array and reduce it to a single value. 
   It applies a function to each element of the array, accumulating a result along the way. 
   array.reduce(callbackFunction, initialValue); */                

const arr1=[1,2,3];
const result=arr1.reduce(function(acc,currval){
  console.log(`acc=${acc} ans currval=${currval}`);
  return acc+currval;
},0);                                         //initial value of acc is 0, and next iteration (acc+currval) is the value of acc;
console.log(result);                        

// using arrow function
const result1=arr1.reduce((acc,currval)=>acc+currval,2);
console.log(result1);                         //output 8

const shoppingCard=[
  {
    item: "js",
    price:2999
  },
  {
    item: "C++",
    price:2499
  },
  {
    item: "java",
    price:2800
  }
];

const totalExpenses=shoppingCard.reduce((acc,currval)=>acc+currval.price,0);
console.log(totalExpenses);                          //output 8298