/*
Default JavaScript Behavior:--

JavaScript -> 1. Synchronous ( Synchronous means one thing at a time then other thing like : one by one execution)
              2. Single Threaded  

<+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++>

synchronous (async) code in JavaScript allows certain tasks to run in the background without blocking the rest of the code execution. This is useful for operations like:

 ✅ Fetching data from an API
 ✅ Reading files
 ✅ Waiting for user input
 ✅ Delaying execution (setTimeout)

 <-----------Synchronous vs Asynchronous Code------------------>

 Synchronous (Blocking) Code
 Executes line by line.
 Waits for one task to finish before moving to the next.            */

console.log("Step 1");
console.log("Step 2"); 
console.log("Step 3");

/* Output:
 Step 1
 Step 2
 Step 3
 👉 Each step runs in order, waiting for the previous one.

 Asynchronous (Non-Blocking) Code
 Doesn't wait for tasks to complete.
 Moves on to the next task while waiting for a response.          */

console.log("Step 1");

setTimeout(() => {
  console.log("Step 2 (after 2 seconds)");
}, 2000); // Runs after 2 seconds

console.log("Step 3");

/* Output:
 Step 1
 Step 3
 Step 2 (after 2 seconds)
 🔹 Why?

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Change Project</title>
    <style>
        body {
            background-color: rgb(0, 0, 0);
            color: white;
        }
    </style>
</head>

<body>
    <h1>Color Change Project</h1>
    <hr>
    <button id="start">Start</button><br><br>
    <button id="stop">Stop</button>
</body>
<script>
    const randomColor = function () {
        const hex = '0123456789abcdef';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let IntervalId
    const startChangingColor = function () {
        if (!IntervalId) {
            IntervalId = setInterval(changeBgColor, 1000);
        }
        function changeBgColor() {
            document.body.style.backgroundColor = randomColor()
        }
    }

    const stopChangingColor = function () {
        clearInterval(IntervalId)
    }

    document.querySelector("#start").addEventListener('click', startChangingColor);
    document.querySelector("#stop").addEventListener('click', stopChangingColor);
</script>

</html>

 setTimeout is asynchronous. It schedules the function but does not block the next line.
 Step 3 runs immediately, while Step 2 waits for 2 seconds.                 */

/* How to Handle Asynchronous Code?
There are three main ways to handle async code in JavaScript:

1. Callbacks (Old Method)
A function passed as an argument to another function, which runs after the async task completes.

function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched!");
    callback();
  }, 2000);
}

fetchData(() => {
  console.log("Processing Data...");
});
Problem: Callbacks can lead to "callback hell" when there are multiple nested callbacks.

2. Promises (Better Way)
A Promise represents a value that will be available in the future.

let fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 2000);
});

fetchData.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});
✅ Promises avoid callback hell and make the code cleaner.

3. Async/Await (Best Way)
A modern, cleaner way to write async code.

async function fetchData() {
  console.log("Fetching data...");
  let response = await new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });
  console.log(response);
}

fetchData();
✅ Easier to read and write compared to Promises.

Conclusion:
Method	                   Description
Callback	       Older method, leads to callback hell
Promise	           Handles async operations better
Async/Await	       Best way, makes async code look like sync */