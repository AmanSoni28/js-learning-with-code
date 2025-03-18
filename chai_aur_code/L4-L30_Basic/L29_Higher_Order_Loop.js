/* <-------------------for..of Loop have values------------------->
The for..of loop is used to iterate over iterable objects (arrays, strings, maps, sets, etc.).
It provides a simpler syntax compared to traditional loops like for or forEach().           */

const arr = [2, 3, 4, 5,6]
for (const val of arr) {              //here val is the vale of arr not index
    console.log(val);                 //output: 2,3,4,5,6
}

const str = "AMAN SONI"
for (const name of str) {
    console.log(name);               
}

/* <--------------------------maps in js---------------------------->
1. Introduction
A Map is a built-in JavaScript object that holds key-value pairs.
Unlike regular objects ({}), Map maintains the insertion order of elements.
Keys in Map can be of any data type (objects, functions, numbers, etc.).

2. Methods & Properties of Map
Method	                               Description	                                    Example
.set(key, value)	              Adds a key-value pair                     	map.set("city", "New York");
.get(key)                         Retrieves value for the key	                map.get("name"); // John
.has(key)                         Checks if key exists	                        map.has("age"); // true
.delete(key)                      Removes a key-value pair                    	map.delete("country");
.size	                          Returns number of entries	                    map.size; // 2
.clear()	                      Removes all elements	                        map.clear();                            

note : map have only unique value                                               */

const map1 = new Map();

map1.set("a", 1);
map1.set("b", 2);
map1.set("c", 3);
map1.set("a", 1);

console.log(map1);

for(let val of map1)
{
    console.log(val);
}

for(let [key,value] of map1)
{
    console.log(key,"=", value);
}

console.log(map1.get('a'));    //output: 1
map1.set('a', 97);
console.log(map1.get('a'));    //output: 97
console.log(map1.size);        //output: 3
map1.delete('b');
console.log(map1.get('b'));     //undefined
console.log(map1.size);        //output: 2  
console.log(map1.has("c"));     //output: true
console.log(map1.has("d"));     //output: false

// <-----------------for object for..of loop not work------------------->
const myObj={
    game1 : "cricket",
    game2 : "chess",
    game3 : "hockey"
}
//   for(const [key,value] of myObj)
//   {
//     console.log(val);         //TypeError: myObj is not iterable
//   }

//for Object we use for..in loop,for..in loop have keys

for(const key in myObj)
{
    console.log(key);          //output: game1,game2,game3
}

// foe values

for(const key in myObj)
    {
        console.log(myObj[key]);          //output: cricket,chess,hockey
    }

 //array by for..in loop

 const arr1=[3,4,5,6,];

for (const key in arr1) {                  //for..in loop have keys  
    console.log(key);                      //Output: 0,1,2,3
}
//for value
for (const key in arr1) {                   
    console.log(arr1[key]);                 //Output: 3,4,5,6
}

//map is not iteratable by for..in loop

for(const key in map1)
{
    console.log(key);              //output:nothing
}

// <--------------for..each loop---------------->
//specially for arrays

const lang=["c++","js","java","py","ruby"]
// syntax :  lang.forEach(function(){})
// syntax :  lang.forEach(()=>{}), using arrow function

//1 way
lang.forEach( function (val) {             //forEach()=>has callback function and callback function does not have name, so here we not have function name
console.log(val);
});

//2 way
lang.forEach((val)=> {             
console.log(val);
});

//3 way
function aman(val)
{
    console.log(val);
}
lang.forEach(aman);
 
// <-----------Extra feature of for..each loop------------->

lang.forEach((a,b,c)=> {              //a=>values,b=>index,c=>print array 
    console.log(a,b,c);
    });

// <----------------[{},{},{},{}]----------------->

const arra=[
    {
        langu : "javascript",
        langsort: "js"
    },
    {
        langu : "C plush,plush",
        langsort: "C++"
    },
    {
        langu : "Object Oriented Programing",
        langsort: "OOP"
    }
]

arra.forEach((item)=>{
    console.log(item.langu);
    console.log(item.langsort);
}); 