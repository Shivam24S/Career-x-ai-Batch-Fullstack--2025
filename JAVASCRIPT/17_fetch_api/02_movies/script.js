document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const movieName = document.getElementById("movieName").value.trim();

    console.log("movie name", movieName);

    const container = document.getElementById("container");

    container.innerHTML = ""

    try {
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=thewdb&s=${movieName}`,
        );

        const data = await res.json();

        console.log("data", data);

        if (data.Response !== "True") {
            container.innerHTML = `<h1>no  movie data found</h1>`;
        } else {
            data.Search.forEach((movie) => {
                const img = document.createElement("img");

                ((img.src = movie.Poster),
                    (img.alt = movie.Title),
                    (img.style.width = "250px"),
                    (img.style.margin = "10px"));


                container.appendChild(img)
            });
        }
    } catch (error) {

        console.log("error", error.message)
    }
});
