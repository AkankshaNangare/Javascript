
function greetMe(greet , fullName){
    console.log("Hello",fullName);
    greet();
}

let greet=function(){
    console.log("greetings!!!!")
}
greetMe(greet,"ak")

// greet();

function solve(num){
    return function(num){
        return num*num;
    }
}
let ans = solve(5);

console.log(ans(5));
