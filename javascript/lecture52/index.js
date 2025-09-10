
// css manipulate  using javascript
// 1. .style


// let felement =document.getElementById('fpara');
// felement.style.backgroundColor = "blue"
// felement.style.color ="white"


//  2.  .style.cssText 
// It lets you set or get multiple inline CSS styles at once as a single string.

// Basically, it replaces all inline styles on that element.

// It’s like writing a full style="" attribute in HTML.


let secondElement = document.getElementById("spara");

secondElement.style.cssText ="background-color:black ; color: white;  padding:0.5rem;"


// 3. .setAttribute(name, value)

// Sets (or updates) the value of an attribute on an HTML element.

// If the attribute doesn’t exist, it creates it.

// let firstElement =document.querySelector('#fdiv');

// firstElement.setAttribute('class','divclass');
// firstElement.setAttribute('style',"padding:0.4");


// 4. .className
// It gets or sets the entire class attribute of an HTML element.

// If you set it, it replaces all existing classes with the new one(s).


let firstElement = querySelector('#fpara');

// get
console.log(firstElement.className)
// set
firstElement.className = "gohan bubul"




// 5 .classList
// The .classList property in JavaScript gives you easy access to an element’s CSS classes and lets you add, remove, toggle, and check classes without messing with the entire className string.

// Method	Description	Example
// add()	Adds one or more classes	element.classList.add("highlight")
// remove()	Removes one or more classes	element.classList.remove("hidden")
// toggle()	Adds the class if not present; removes if present	element.classList.toggle("active")
// contains()	Checks if a class exists	element.classList.contains("active")
// replace()	Replaces an existing class with another	element.classList.replace("old", "new")



let firstElement = querySelector('#fpara');
console.log(firstElement.classList)

firstElement.classList.add("newclass");
firstElement.classList.remove("gohan");

firstElement.classList.toggle('secondclass');

firstElement.classList.contains("secondclass");
