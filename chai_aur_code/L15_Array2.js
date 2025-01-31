const marvel_heros=["thor", "Ironman", "spiderman"];
const dc_heros= ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);                           //return [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ], here dc_heros array push as a element in marvel_heros array
console.log(marvel_heros[3]);                        //return [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][1]);                     //return flash
marvel_heros.pop();                                  

const all_heros=marvel_heros.concat(dc_heros);       //combines two or more arrays. This method returns a new array without modifying any existing arrays
console.log(all_heros);                              //return [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// best way of merge two or more arrays by spread operator

const allHeros= [...marvel_heros, ...dc_heros];      // "..." is spread operator  
console.log(allHeros);                               //return [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]    


const num_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const simple_array= num_array.flat(Infinity);        //flat=> Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(simple_array);                           //return [ 1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]


console.log(Array.isArray("Aman"));                  //return false, here ask the "aman" is array
console.log(Array.from("Aman"));                     //retuen [ 'A', 'm', 'a', 'n' ], use to convert in Array
console.log(Array.from({name:"Aman"}));              //return [], return empty array because here we not declare name or value which one is covert in Array


let score1=20;
let score2=40;
let score3=50;

console.log(Array.of(score1,score2,score3));          //return [ 20, 40, 50 ], Returns a new array from a set of elements
