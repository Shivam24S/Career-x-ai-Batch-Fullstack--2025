


document.getElementById("form").addEventListener("submit", (e) => {


    e.preventDefault();


    const email = document.getElementById("email").value.trim();


    const password = document.getElementById("password").value.trim();


    const errorMessage = document.getElementById("errorMessage");



    if (email === "") {

        return errorMessage.textContent = "email is required"
    } else if (!email.includes("@")) {
        return errorMessage.textContent = "invalid email"
    }


    if (password.length < 6) {

        return errorMessage.textContent = "password must be atleast 6 character long"
    } else if (password === "password") {

        return errorMessage.textContent = "password can not contain password word  as password"
    }


    alert("login successfully")





})