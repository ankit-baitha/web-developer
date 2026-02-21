
// var is function scoped
// When we declare a variable using var inside a function, we canot access the variable outside the function.



// var age = 234;
// if (true ){
//     console.log(age);
// }

// function example() {
//     var x = 10;
//     console.log(x);
// }

// example();       // 10
// console.log(x);       // Throws ReferenceError: x is not defined



// // Re assignment using var
// var x = 10;
// console.log(x);    // Output : 10

//  var x = "Mayank";

// console.log(x);    // Output : Mayank

// let
// In JavaScript, the let keyword is used to declare variables
//  that are block-scoped, meaning they are only accessible within
//  the block in which they are defined. Block scope refers to any 
// code block delimited by curly braces {} such as loops, conditionals, 
// or function bodies.


let x = 10;
if (true) {
    let y = 20;
    console.log(x); // Output: 10
    console.log(y); // Output: 20
}
console.log(x); // Output: 10
console.log(y); // Throws ReferenceError: y is not defined




// Re assignment using 'let'

let f = 10;
console.log(x);    // Output : 10

f = "Mayank";
console.log(x);    // Output : Mayank




// Re definition using 'let'

// let d = 10;

// let d = "Mayank";
// console.log(x);    // Output : Error!



// const
// In JavaScript, the const keyword is used to declare constants.
//  Constants are variables whose values cannot be reassigned once they are
//  initialized. This means that once a value is assigned to a constant using const,
//  it cannot be changed or reassigned throughout the execution of the script.


const s = 20;
console.log(x);      // Output : 20

s = 30;
console.log(x);      // Output : Error!

