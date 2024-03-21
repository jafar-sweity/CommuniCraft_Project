const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get("id");
const list = document.getElementById("room");
fetch(`http://localhost:3000/employee/${id}/myProjects`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((object) => {
    let projectNames = [...new Set(object.projectsNames)];
    projectNames.forEach((element) => {
      const option = document.createElement("option");
      option.value = element;
      option.textContent = element;
      list.appendChild(option);
    });
  });

// <option value="JavaScript">JavaScript</option>
// <option value="Python">Python</option>
// <option value="PHP">PHP</option>
// <option value="C#">C#</option>
// <option value="Ruby">Ruby</option>
// <option value="Java">Java</option>
