/*
1. Definition:
The Call Stack is a LIFO (Last In, First Out) data structure that manages function execution in JavaScript.

2. How It Works:
✅ When a function is invoked, it gets pushed onto the stack.
✅ When execution is complete, it gets popped off the stack.
✅ If a function calls another function, the new function is pushed on top.
✅ JavaScript uses a single-threaded execution model, meaning only one function executes at a time.

3. Diagram Explanation:
Example Code:

function first() {
  second();
  console.log("First function");
}

function second() {
  third();
  console.log("Second function");
}

function third() {
  console.log("Third function");
}

first();

4. Call Stack Execution Diagram:
(Step 1) – first() is called
📌 Stack: [ first ]

(Step 2) – first() calls second()
📌 Stack: [ first, second ]

(Step 3) – second() calls third()
📌 Stack: [ first, second, third ]

(Step 4) – third() executes and prints "Third function", then pops out
📌 Stack: [ first, second ]

(Step 5) – second() prints "Second function", then pops out
📌 Stack: [ first ]

(Step 6) – first() prints "First function", then pops out
📌 Stack: [] (Empty Stack, execution complete)

5. Call Stack Overflow:
If functions keep calling each other infinitely (without a base condition), the call stack exceeds its limit, leading to a "Maximum call stack size exceeded" error.

Example of Stack Overflow:

function recursion() {
  recursion();
}

recursion(); // Causes stack overflow

💡 Conclusion:

JavaScript uses a single call stack for synchronous function execution.
Functions follow LIFO (Last In, First Out) execution.
Recursive functions should have a base case to prevent stack overflow.      */