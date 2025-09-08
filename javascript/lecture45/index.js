// fucntion hoisting 


// sayMyName("ankit");
// function sayMyName(finalName){
//     console.log(finalName);
// }




// console.log(age);
var  age = 24  //ouput :  undefined 


// console.log(name);  output : ReferenceError: Cannot access 'name' before initialization   
let  name= "ankit ";


// console.log (gender);   output : ReferenceError: Cannot access 'gender' before initialization 
const gender = "male"



// fucntion => fist class citizens
// 1 assign to variable
// 2 as argument 
// 3 returnn fucntion
// 4 use function in data structure
// 5 porpertiy defined


function greetMe(greet, fullName){
    console.log("hello");
    greet()
}

let greet = function(){
    console.log("greeting  for the day");

}
// greetMe(greet,"ankit");


//return function

function solve(number){
    return function(number){
        return number * number ;

    }
}
let ans= solve(3);
let finalAns = ans(10);
// console.log(finalAns)


 
 const arr= [
    function (a,b){
        return a+b;
    },
    function (a,b){
        return a-b;
    },
    function (a,b){
        return a*b;
    }
 ]

 let fist=arr[0];
 let Ans1= fist(5,10);
//  console.log(Ans1);

 let second=arr[1];
 let Ans2= second(5,10);
//  console.log(Ans2);

 let third=arr[2];
 let Ans3= third(5,10);
//  console.log(Ans3);

 let obj ={
    age:34,
    wt:46,
    ht:180,
    greet : ()=>{
        console.log("hello dunia ")
    }
 }

 console.log(obj.age);
 obj.greet();




