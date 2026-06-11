

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {

    // alert("button clicked")

    btn.innerText = "text changed"

})



const form = document.getElementById("form");


form.addEventListener("submit", (event) => {
    event.preventDefault();


    const name = document.getElementById("name").value

    console.log("input name is ", name);


})