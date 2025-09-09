
// DOM manipulation -Access /isert/update/delete elements
// What is DOM?

// DOM stands for Document Object Model.

// It’s a programming interface for web documents (HTML/XML).

// It represents the webpage as a tree of objects where each element (tags, attributes, text) is a node.

// With JavaScript, you can access, modify, add, or delete elements dynamically.

// Think of the DOM as a live blueprint of your webpage.


// DOM Tree Example
// Document
//  └── html
//       ├── head
//       │    └── title
//       └── body
//            ├── h1
//            └── p


// Accessing DOM Elements

// document.getElementById("myId");

// // Select by class
// document.getElementsByClassName("myClass");

// // Select by tag
// document.getElementsByTagName("p");

// // Modern query selectors
// document.querySelector(".myClass");    // First match
// document.querySelectorAll("p");      // All matches



// Update existing Element
// 1.innerHTML
// let mydiv = document.querySelector('#mydiv');
// mydiv.innerHTML = "<p>Replaced content</p>";

// 2. outerHTML.
// 3.text-useContext
// 4.innerText


// Add Element
// 1. createElement()
// let fheading=document.createElement('h');
// console.log(fheading)
// fheading.textContent= "my name is ankit kumar"

// let bodytag = document.querySelector('body');

// 2 .appendChild()
//  appendChild() adds a new node (like an element or text node) as the last child of a selected element.
// bodytag.appendChild(fheading);



// Quick Recap of insertAdjacentElement positions:
// a)position
// "beforebegin"	Inserts element before the target element itself.
// "afterbegin"	Inserts element inside, at the start of the target element.
// "beforeend"	Inserts element inside, at the end of the target element.
// "afterend"	Inserts element after the target element itself.

//example
// let mydiv = document.querySelector('#mydiv');
// let newElement = document.createElement('span');
// newElement.textContent = "this is my span";
// mydiv.insertAdjacentElement('beforebegin', newElement);
// mydiv.insertAdjacentElement('afterbegin', newElement);
// mydiv.insertAdjacentElement('beforeend', newElement);
// mydiv.insertAdjacentElement('afterend', newElement);


//  removal
// removeChild() removes a specific child node from a parent element.

let parent = document.querySelector('#mydiv');
let child = document.querySelector('#fpara');
parent.removeChild(child);


