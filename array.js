
let obj={
    name:"akanksha",
    age:22,
    weight:50,
    greet:function(){
        console.log("hello");
    }
};

console.log(obj);
obj.greet(); 

// creation of array

// let arr=[1,2,3,4,5];
// console.log(arr);

// ARRAY CONSTRUCTOR

let brr=new Array(1, true,"ak");

// BUILT IN METHODS IN ARRAY

brr.push("abcd");
brr.pop();
brr.shift();
// brr.unshift("ak abcd");

brr.push(20);
brr.push(30);
brr.push(50);

brr.slice(2,4)

brr.splice(1,2,"xyz");

console.log(brr);

// console.log(brr[2]);

let arr=[10,20,30,40,50,11,21];

 
// arr.map((number)=>{
//     return number;
// });

// let evenArray=arr.filter((number)=>{

//     if(number%2===0){
//         return true;

//     }else{
//         return false;
//     }
// });
// console.log(evenArray);


let ans = arr.reduce((acc,curr) => {
    return acc+curr;

}, 0);
console.log(ans)

arr.sort();
console.log(arr);

console.log(arr.indexOf(50));

let length=arr.length;
console.log("length : ",length);

arr.forEach((value,index)=>{
    console.log("Number : " ,value, "Index :",index)
})