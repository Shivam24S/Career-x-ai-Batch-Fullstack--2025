let heading = document.getElementById("heading");

console.log("heading", heading);

heading.innerText = "dom manipulation";

heading.innerHTML = "<h5>dom inner html</h5>";

let paragraph = document.getElementsByClassName("para");

console.log("paragraph", paragraph);

paragraph[1].innerText = "change paragraph 1";

let heading5 = document.getElementsByTagName("h5");

console.log("heading5", heading5);


heading5[1].innerText = "change heading 5"


// query Selector 


const query1 = document.querySelector("#q-1");

query1.innerText = "query 1 changed text"


const classQuery = document.querySelector(".q-1");

classQuery.innerText = "change class query text"


// query selector all 

const allSameClassQuery = document.querySelectorAll(".q-1");

allSameClassQuery.forEach((value) => value.innerText = "now all the class text will be same ")


// creating new element and adding to html bo

const heading4 = document.createElement("h4")

heading4.innerText = "this is heading 4 created using js";


document.body.appendChild(heading4);


// 


const colorChange = document.getElementById("color");

colorChange.style.color = "red"