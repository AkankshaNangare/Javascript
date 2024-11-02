
// let mydiv=document.querySelector("#mydiv");

// let newElement = document.createElement("span");

// newElement.textContent=" welcome to vs !!";

// mydiv.insertAdjacentElement("beforebegin" , newElement);


// let parent=document.querySelector("#mydiv");
// let child=document.querySelector("#para");
// parent.removeChild(child);

// function changeText(){
// let fpara=document.getElementById("fpara");
// fpara.textContent="hello akanksha";
// }


// // let fpara=document.getElementById("fpara");

// fpara.addEventListener('click' , changeText);

// fpara.removeEventListener('click' , changeText);


// let anchorElement = document.getElementById("fanchortag");

// anchorElement.addEventListener('click' ,function(event){
//     event.preventDefault();
//     anchorElement.textContent="click done";
// } );


// let para= document.querySelectorAll("p");

// for(let i =0 ;i<para.length ;i++){
//     let paras= para[i];
//     paras.addEventListener("click", function(){
//         alert("you have clicked on para : " + (i+1));
//     })

// }



// FOR CREATES MULTIPLE PARAGRAPHS

// for(let i=1 ;i<=100;i++){
//     let para = document.createElement("p");
//     para.textContent="paragraph"+i;
//     document.body.appendChild(para);
// }

// // ANOTHER METHOD

// let mydiv=document.createElement("div");
// for(let i=1 ;i<=100;i++){
//     let para = document.createElement("p");
//     para.textContent="paragraph"+i;
//     mydiv.appendChild(para);
// }
// document.body.append(mydiv);

// DOCUMENT FRAGMENT

// let fragment= document.createDocumentFragment();

// for (let i = 1; i <=100; i++) {
//     let para = document.createElement("p");
//     para.textContent="para "+i;

//     // no reflow and repaint for below line
//     fragment.appendChild(para);
    
// }

// document.body.appendChild(fragment);

// PROMISE

// let firstPromise = new Promise((resolve , reject)=>{
//     let success = true;

//     if(success){
//         resolve("Promise fullfilled");

//     }else{
//         reject("Promise rejected");
//     }
// });

// firstPromise.then((message)=>{
//     console.log("then : " +message);
// }).catch((error)=>{
//     console.log("Error : "+error);
// });


// ASYNCHRO FUNCTION

// async function getData() {
//     setTimeout(function(){
//         console.log("inside set timeout block");
//     } , 3000);
    
// }

// let output =getData();

// FETCH API

// scenario:
// url-- sync
// fetch data -- network call -- async
// process data -- sync



// async function getData() {
//     // get req -async
//     let response = await fetch("https:jsonplaceholder.typicode.com/posts");
//     let data = await response.json;
//     // console.log(response);
//     console.log(data);
// }
// getData();


function init(){
    let name = "Mozilla";
    function displayName(){
        let name ="akanksha";
    console.log(name);
    }
    displayName();

}
init(); 