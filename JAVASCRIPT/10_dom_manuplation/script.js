let heading = document.getElementById("heading");

console.log("heading", heading);

heading.innerText = "dom manipulation";

heading.innerHTML = "<h5>dom inner html</h5>";

let paragraph = document.getElementsByClassName("para");

console.log("paragraph", paragraph);

paragraph[1].innerText = "change paragraph 1";

let heading5 = document.getElementsByTagName("h5");

console.log("heading5", heading5);


heading5[1].innerText ="change heading 5"
