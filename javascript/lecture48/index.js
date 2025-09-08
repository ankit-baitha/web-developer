console.log(Math.PI);   // return 3.14
console.log(Math.max(3,5,6,8,4,3,64,2));   //Math.max() → Returns the largest number from the given arguments.
console.log(Math.min(3,5,6,8,4,3,64,2));  //Math.min() → Returns the smallest number from the given arguments.
console.log(Math.round(1.5)) //Rounds to the nearest integer.
console.log(Math.floor(1.8)); //Rounds down to the nearest integer (always toward -∞).

console.log(Math.ceil(1.9)); //Math.ceil(x) always rounds up, no matter the decimal part.

console.log(Math.abs(-5)); //Math.abs(x)  //returns the non-negative value of a number.
console.log(Math.random());  //Math.random() always gives a floating-point number ≥ 0 and < 1.
console.log(Math.sqrt(5)); //Returns the square root of x.
console.log(Math.pow(3,2));  //Returns base raised to the power of exponent.



//date object
let curr= new Date();
console.log(curr);

let date=new Date('june 20 2000 04:3');
console.log(date)

let newdate = new Date(1930, 6, 20, 7);
console.log(newdate)

