
//1 compile time error

//syntax error
// console.log(1    

//2 Runtime error
// console.log(x) 
// ReferenceError: x is not defined



// error handling



try{
    console.log("try block starts here : ");
    console.log(x);
    console.log("try block ends herev: ");

}
catch(err){
    //define karte h, error k sath app kya karna chahte hai
    //retry logic
    //fallblack mechanism
    //logging
    //custom error

    console.log("I am inside catch bloack")
    console.log("your error is here: ",err)
}

// finaly block -> will run everytime
finally{
    console.log("I will run everytime , as I amd finally block : ")

}

// custom error

// let's create a custom error
// try{
//     console.log(x);

// }
// catch(err){
//     throw new Error("bhai pehle declare kro , fir print karna");
// }