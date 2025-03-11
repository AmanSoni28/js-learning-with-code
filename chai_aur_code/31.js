<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Object Model (DOM) Learning</title>
    <style>
        body{
            background-color: rgb(70, 70, 70);
            color: white;
        }
    </style>
</head>
<body>
    <div class="bg-black">
        <h1 class="heading">Document Object Model Learning</h1>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
</body>
</html>

<!--  ++++++++++++++++++++++    Notes:      ++++++++++++++++++++++

Document Object Model (DOM) in JavaScript ;-

The Document Object Model (DOM) is a programming interface for web documents. 
It represents the page so that programs can manipulate its structure, style, and content dynamically. 
The DOM treats an HTML or XML document as a tree-like structure where each node represents an element, attribute, 
or text. JavaScript interacts with the DOM to modify web pages dynamically without requiring a page reload.

Basic DOM Structure

Below is a simple representation of a DOM tree:

Document
│
├── <html>
│   ├── <head>
│   │   ├── <title>Page Title</title>
│   │   └── <meta>
│   │
│   └── <body>
│       ├── <h1>Heading</h1>
│       ├── <p>Paragraph</p>
│       ├── <div>
│       │   ├── <ul>
│       │   │   ├── <li>Item 1</li>
│       │   │   ├── <li>Item 2</li>
│       │   │   ├── <li>Item 3</li>
│       │   │
│       │   └── <button>Click Me</button>
│       │
│       └── <script>JavaScript Code</script>


model :-

                     [ window ]
                        │
                    [ document ]
                        │
                    [ <html> ]
                     /      \
         [ <head> ]         [ <body> ]
         /       \            /          \
 [ <title> ]  [ <meta> ]  [ <h1> ]   [ <div> ]
                                 │          /       |        \
                               [ <p> ]  [ <ul> ]  [ <button> ]
                                          /  |  \
                                [ <li> ] [ <li> ] [ <li> ]
                                       

DOM Manipulation in JavaScript :-

DOM Manipulation refers to modifying the document structure, content, or styles using JavaScript.
Common actions include:

1. Selecting Elements

document.getElementById("id")
document.getElementsByClassName("class")
document.getElementsByTagName("tag")
document.querySelector("selector")
document.querySelectorAll("selector")

2. Modifying Content

document.getElementById("demo").innerHTML = "Hello World!";
document.querySelector("h1").textContent = "Updated Heading";

3. Changing Styles

document.getElementById("demo").style.color = "red";
document.querySelector("p").style.backgroundColor = "yellow";

4. Adding & Removing Elements

let newElement = document.createElement("p");  
newElement.textContent = "New Paragraph";  
document.body.appendChild(newElement);  

document.getElementById("demo").remove();

5. Event Handling

document.getElementById("myButton").addEventListener("click", function () {
    alert("Button Clicked!");
});


Conclusion :-

The DOM provides a way for JavaScript to interact with web pages dynamically. 
By using DOM manipulation techniques, we can update content, change styles, and respond to user interactions efficiently.



/* +++++++++++++++++++++ Dom Manipulation ++++++++++++++++++++++ */



DOM Manipulation in JavaScript (Revision Notes)

1. Selecting Elements
document.getElementById("id") → Selects an element by its ID. (Returns a single element.)
document.getElementsByClassName("class") → Selects elements by class name. (Returns an HTMLCollection.)
document.getElementsByTagName("tag") → Selects elements by tag name. (Returns an HTMLCollection.)
document.querySelector("selector") → Selects the first matching element based on a CSS selector. (Returns a single element.)
document.querySelectorAll("selector") → Selects all matching elements based on a CSS selector. (Returns a NodeList.)

2. Modifying Elements
.innerHTML → Changes or gets the HTML content inside an element.
.textContent → Changes or gets the text content inside an element. (Ignores HTML.)
.setAttribute("attr", "value") → Adds/updates an attribute of an element.
.getAttribute("attr") → Gets the value of an attribute.
.removeAttribute("attr") → Removes an attribute from an element.

3. Modifying Styles & Classes
.style.property = "value" → Changes the CSS style of an element.
.classList.add("class") → Adds a CSS class.
.classList.remove("class") → Removes a CSS class.
.classList.toggle("class") → Toggles a CSS class.

4. Event Handling
element.addEventListener("event", function) → Attaches an event listener to an element.
element.removeEventListener("event", function) → Removes an event listener.

5. Creating & Removing Elements
document.createElement("tag") → Creates a new element.
parent.appendChild(child) → Adds a child element to a parent.
parent.insertBefore(newElement, referenceElement) → Inserts an element before another.
element.remove() → Removes an element from the DOM.



-->