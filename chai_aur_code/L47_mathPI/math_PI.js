console.log(Math.PI);      //return : 3.141592653589793
Math.PI=5;
console.log(Math.PI);      //return : 3.141592653589793

const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");          //getOwnPropertyDescriptor=>provide the knowledge of 'PI'
console.log(descriptor);                                              //return : { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

//because 'writable: false' thats the reson we not over write the value of 'PI'

// <------------------------------------Now declare and  set the property of Object----------------------------------------------------->
const chai = {
    name : "ginger",
    price : 15,
    isAvailable : true
}

console.log(chai);                                                    //return : { name: 'ginger', price: 15, isAvailable: true }
 
console.log(Object.getOwnPropertyDescriptor(chai,"name"));            //return : { value: 'ginger, writable: true, enumerable: true, configurable: true }
 
Object.defineProperty(chai, "name", {                                 //Use to defined the property of object
    writable : false,
    enumerable : false
});

console.log(Object.getOwnPropertyDescriptor(chai,"name"));           //return : { value: 'ginger, writable: false, enumerable: false, configurable: true }

chai.name="Lemon";
console.log(chai.name);                                              //return : ginger,  'name' not change because 'writable : false' for 'name'

for(let [key,value] of Object.entries(chai))
{
    console.log(`${key} : ${value}`)                                //return : price : 15, isAvailable : true,      note: 'name' is not itretable because 'enumerable : false' for 'name'
}