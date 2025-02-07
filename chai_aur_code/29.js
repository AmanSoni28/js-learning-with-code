/* for..of Loop
The for..of loop is used to iterate over iterable objects (arrays, strings, maps, sets, etc.).
It provides a simpler syntax compared to traditional loops like for or forEach().           */

const arr = [1, 2, 3, 4, 5]
for (const i of arr) {
    console.log(i);
}

const str = "AMAN SONI"
for (const name of str) {
    console.log(name);
}

/*maps in js
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


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));    //output: 1

map1.set('a', 97);

console.log(map1.get('a'));    //output: 97

console.log(map1.size);        //output: 3

map1.delete('b');

console.log(map1.size);        //output: 2


