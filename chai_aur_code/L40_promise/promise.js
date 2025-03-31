// <------------------------------------create a promise-------------------------------->

const promiseOne = new Promise(function(resolve,reject){                //promise has callback function
    setTimeout(function(){
      console.log("Async task is complete");      
      resolve();                             //Use to connect with 'then()'
    },1000);
});
promiseOne.then(function(){                                             //'then()' has callback function
  console.log("Promise Consumed");
});

// OR
new Promise(function(resolve,reject){                
  setTimeout(function(){
    console.log("Async task Two is complete");
    resolve();                     
  },1000);
}).then(function(){                                            
  console.log("Promise Two Consumed");
});


const promiseThree = new Promise (function(resolve,reject){
setTimeout(function(){
  resolve({username : "AMAN" , email : "amansoni0228@gamil.com"})            //pass object
},1000);
});

promiseThree.then(function(details){
  console.log(details);
});


const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
  let error = false;
   if(!error){
    resolve({username : "ANKIT" , password : "12345"})
   }
   else{
    reject("ERROR: Smething went wrong");                        //Use to connect with 'catch()'
   }
  },2000);
});

// promiseFour
//       .then((data)=>{console.log(data.username)})             //Runs if resolved
//       .catch((data)=>{console.log(data)})                     // Runs if rejected
//       .finally(()=>{console.log("The promise is either resolve or reject")});       //finally is alway run

// OR
// Chainning of promises
promiseFour
.then((data)=>{console.log(data)
 return data.username;                                //'then()' retuen the value to next 'then()'
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
   console.log(error);
})
.finally(()=>{console.log("The promise is either resolve or reject")})              //finally is alway run


// Alternative: Async/Await
// Instead of .then()  and .catch(), we can use async/await for better readability.
const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
  let error = false;
   if(!error){
    resolve({username : "ANKIT" , password : "12345"})                      
   }
   else{
    reject("ERROR: Smething in js went wrong");                        
   }
  },2000);
});

async function promiseFiveConsume(){
     try{
      const response = await promiseFive;                  //await->wait for promiseFive is resolve
      console.log(response);
     } catch (error){                                       
       console.log(error);                  
     }
};

promiseFiveConsume();


// <---------------------------------fetch()----------------------------------------->
// In JavaScript, fetch() is a built-in function used to make network requests, typically to retrieve data from an API. 
// It provides a modern and flexible way to handle HTTP requests and responses, returning a Promise that resolves to a Response object.
// fetch() return the promise

// using async/await
async function getAllusers() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");     //await-> wait till the fetch the value 
    const datas=await response.json();                        //await-> wait till the value in respose is convert into json 
    console.log(datas);
  } catch(error){
    console.log("error:",error);
  }
};
getAllusers();

//OR
//using .then,.catch
fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=> response.json())                            //single line so does not need to write 'return' and {}
.then((datas)=>console.log(datas))
.catch((error)=>console.log("Error:",error));



/* <--------------------------------------NOTES------------------------------------------->
   A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
   It helps handle asynchronous code more efficiently, avoiding callback hell.

   Why Use Promises?
   1. Avoid Callback Hell – Promises improve code readability compared to nested callbacks.

   2. Better Error Handling – Errors can be caught using .catch(), making debugging easier.

   3. Chaining – Multiple asynchronous operations can be chained using .then(), making execution flow more manageable.

   States of a Promise
   A Promise can be in one of three states:

   1. Pending – The operation has not yet completed.

   2. Fulfilled (Resolved) – The operation completed successfully.

   3. Rejected – The operation failed.       

   When to Use Promises?
   When handling API requests (fetch or Axios).

   When working with timers (setTimeout, setInterval).

   When dealing with file reading, database queries, or any async operation.     */
   