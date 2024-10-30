let obj={
age:13,
wt:50,
};

console.log(obj);

obj.color = "white";

console.log(obj);

let src={
    age:13,
    wt:50,
};

let dest=Object.assign({},src);

src.age=60;
console.log(src);
console.log(dest);