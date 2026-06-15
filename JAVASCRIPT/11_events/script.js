

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



const doubleClick = document.getElementById("dbl");


doubleClick.addEventListener("dblclick", () => {

    alert("double clicked")
})




const randomText = document.getElementById("mouseOver");


randomText.addEventListener("mouseover", () => {

    randomText.style.color = "red"
})

randomText.addEventListener("mouseout", () => {

    randomText.style.color = "black"
})


let key = document.getElementById("key")

key.addEventListener("keyup", (e) => {
    console.log(e.key)
})