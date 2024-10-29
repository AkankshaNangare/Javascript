
// WITHOUT PARAMETER

// function printCounting(){
//     for (let i = 1; i <= 100; i++) {
//         console.log(i);   
//     }
// }
// printCounting();


// WITH PARAMENTER

function printCounting(num){
    console.log(" print number :",num)
}
printCounting(5);


function getAverage(num1,num2){
    let avg=(num1+num2)/2
    console.log(" average :",avg)
}
getAverage(5,7);


// RETURN FUNCTION

function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}

let ans = getSum(1,2,3);
console.log("print sum",ans);

// 

function getMyName(firstName,lastName){
    let fullName=firstName + lastName;
    return fullName;
}

let fullName = getMyName("akanksha","nangare");
console.log(" ",fullName);