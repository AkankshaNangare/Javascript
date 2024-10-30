
class Human{
    // properties

    age=12; //publicaly
    #wt=40; //privately :does not access out of the class
    ht=155;


constructor(newAge , newHeight){
    this.age=newAge;
    this.ht=newHeight;
}



    // behavior

    walking(){
        console.log("I am walking" , this.#wt);
    }

    running(){
        console.log("I am running");
    }

    get fetchWeight(){
        return this.#wt;
    }

    set modifyingWeight(val){
        this.#wt=val;
    }
}

let obj = new Human(15,160);
console.log(obj.ht)

console.log(obj.age);

console.log(obj.fetchWeight);
// console.log(obj.#wt);

obj.walking();


// default parameter

function sayName(fname="abcd"){
    console.log("name : " , fname)
}
sayName("aditya");