
// global scope

const age=12;
console.log(age);

{
    console.log(age);
}

if(true){
    console.log(age);
}

// function scope

function sayHello(){
    let fullName="abcd";
    console.log("hello!!", fullName);
}
console.log(fullName);
sayHello();

// block scope

console.log(height);
{
    var height = 155;

}
console.log(height);