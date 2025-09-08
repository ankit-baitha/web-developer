// 1 function definetion

function printCounting(){
    for(let i=1; i<=100; i++){
        console.log(i);

    }
}

//function call
// printCounting()


// 2 with parameter
function printNumber(num){
    console.log("printing number : ",num);
}
// printNumber(8)


function getAverage(num1,num2){
    let avg=(num1 + num2)/2;
    console.log(avg);
}
// getAverage(4,6)


const greet = function(name){
    return `hello world,${name}!`;
}
// console.log(greet("ankit"))



// Arrow function
const greet_ = (name)=>{
    return `hello world,${name}!`;
}
console.log(greet("john "));