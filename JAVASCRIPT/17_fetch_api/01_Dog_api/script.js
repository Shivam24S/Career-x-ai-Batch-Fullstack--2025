document.getElementById("btn").addEventListener("click", async () => {
  const image = document.getElementById("img");

  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await res.json();

    console.log("data", data);

    if (data.status !== "success") {
      throw new Error("failed to fetch dog image");
    } else {
      image.src = data.message;
    }
  } catch (error) {
    console.log(error.message)
  }
});
