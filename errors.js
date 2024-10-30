
// compile time error :syntax error

// console.log(1; 



//  run  time error :reference error

// console.log(x);


try{
    console.log("starts try block");
    console.log(x);
}catch(err){
    console.log("catch block starts");
    console.log("error : ",err);
}
finally{
    console.log("will run every time");
}

// custom error

try{
    console.log("starts try block");
    console.log(x);
}catch(err){
    throw new Error("Invalid Json!!");
}