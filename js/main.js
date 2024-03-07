fetch("data/project.json")
  .then((response) => response.json())
  .then((data) => {
    createComponents(data);
  })
  .catch((error) => console.error("Error:", error));

// Function to dynamically create the components based on the cards data
function createComponents(data) {
  const projects = document.getElementById("projects");

  data.forEach((chip) => {
    // Create <project-card> element
    const myProjects = document.createElement("project-card");
    myProjects.setAttribute("name", chip.name);
    myProjects.setAttribute("description", chip.description);
    myProjects.setAttribute("year", chip.year);
    myProjects.setAttribute("url", chip.url);
    myProjects.setAttribute("number", chip.number);

    // Loop through each tag to create <my-chip> and append to <project-card>
    chip.tag.forEach((tag) => {
      const myChip = document.createElement("custom-chip");
      myChip.setAttribute("label", tag.label);
      myChip.setAttribute("color", tag.color);
      myProjects.appendChild(myChip);
    });

    // Append <project-card> to the DOM
    projects.appendChild(myProjects);
  });
}
