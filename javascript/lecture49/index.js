// Object Cloning && Garbage collector in js


//What is Object Cloning?

//Object cloning means creating a copy of an object.
//There are two main types:

//Shallow Copy → Copies only top-level properties. Nested objects still reference the same memory.

//Deep Copy → Creates a completely independent copy, including nested objects.




// dynamic nature  => object

let obj = {
    age:24,
    wt:64,
    ht:190
};

// console.log(obj)

// obj.color="white"
// console.log(obj)


//1. Shallow Copy Methods
//   a) Spread Operator (...)


// let src= {
//     age:24,
//     wt:64,
//     ht:190,
//     addess:{
//         city:"newde;hi"
//     }
// };

// let dest= {...src}
// dest.addess.city="delhi"
// console.log( " src ",src)
// console.log( " dest ",dest)


//b) Object.assign()


// let src= {
//     age:24,
//     wt:64,
//     ht:190,

// };
// let dest = Object.assign({},src);
// src.color="white"
// console.log( "scr", src);
// console.log( "dest", dest);



let src= {
    age:24,
    wt:64,
    ht:190,

};
let dest={};
for (let key in src){
    let newKey=key;
    let newValue= src[key];

    //insert newKey and value in dest and create a clone
    dest[newKey]=newValue;
}

console.log("src", src)
console.log("dest", dest)




