async function fetchUserData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await res.json();

        console.log("data", data);
    } catch (error) {
        console.log(error)
    }
}

// fetchUserData();

// now using promise 

const getUser = fetch("https://jsonplaceholder.typicode.com/users");

console.log("fetch", getUser);

getUser
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log("user", res);
    })
    .catch((err) => {
        console.log(err);
    });
