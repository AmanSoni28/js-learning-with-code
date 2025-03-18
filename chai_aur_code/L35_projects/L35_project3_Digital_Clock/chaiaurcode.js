const clock=document.getElementById("clock");
setInterval(function (){
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
},1000);


/*setInterval() is a JavaScript function that repeatedly executes a specified function at fixed time intervals. 
 It is commonly used for tasks like animations, updating UI elements, or polling for updates.
 note: time in milisecond     (1000 milisecond->1 second)      */
