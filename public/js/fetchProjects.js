const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");

fetch("http://localhost:3000/:userId")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
