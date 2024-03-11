const projects = [
  {
    title: "Emaar Urban Oasis",
    type: "residential",
    imageUrl: "images/urbanemaar01.webp",
    url: "property/urbanemaar.html",
  },
  {
    title: "Elan The Mark",
    type: "commercial",
    imageUrl: "images/elanmark1min.webp",
    url: "property/elanthemark.html",
  },
  {
    title: "Elan The Presidential",
    type: "residential",
    imageUrl: "images/elanpmainmin.webp",
    url: "property/elanpresidential.html",
  },
  {
    title: "Central Park",
    type: "residential",
    imageUrl: "images/centralmain.webp",
    url: "property/centralpark.html",
  },
  {
    title: "Smartworld Dxp one",
    type: "residential",
    imageUrl: "images/SW-113min.webp",
    url: "property/starworlddxpone.html",
  },
  {
    title: "M3m Crown",
    type: "residential",
    imageUrl: "images/m3mcrownnew.jpg",
    url: "property/m3mcrown.html",
  },
  {
    title: "Emaar",
    type: "cresidential",
    imageUrl: "images/emaar1min.webp",
    url: "property/emaar.html",
  },
  {
    title: "M3m Golf Hills",
    type: "residential",
    imageUrl: "images/m3mgolf1.jpg",
    url: "property/m3mgolfhill.html",
  },
  {
    title: "Sobha City",
    type: "residential",
    imageUrl: "images/sobha1.webp",
    url: "property/sobhacity.html",
  },
  // Add more projects...
];

function displayProjects(numProjects) {
  const container = document.querySelector(".row12"); // Assuming the container has a class name
  const startIndex = container.querySelectorAll(".col-xl-4").length; // Get the current number of displayed projects

  for (let i = startIndex; i < startIndex + numProjects; i++) {
    if (i >= projects.length) {
      // Check if all projects have been displayed
      document.getElementById("load-more").style.display = "none"; // Hide the "Load More" button
      break;
    }

    const project = projects[i];
    const colDiv = document.createElement("div");
    colDiv.className = "col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12";
    colDiv.innerHTML = `
  <div class="main-div">
    <div class="main-data">
      <div class="img-data">
        <a class="clr-black" href="${project.url}">
          <img src="${project.imageUrl}" alt="${project.title}" />
        </a>
        <div class="label-badges">
          <ul class="list-unstyled text-left">
            <li class="list-inline-item">
              <a class="badge badge-status-30" href="#"> Explore </a>
            </li>
            <li class="list-inline-item">
              <a class="badge badge-status-30" href="#"> For Sale </a>
            </li>
            <li class="list-inline-item">
              <a class="badge badge-label-194" href="#">
                SmartWorld
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="listing-data">
      <div class="heading-d">
        <h3 class="text-capitalize">
          <a class="clr-black head" href="${project.url}">${project.title}</a>
        </h3>
      </div>
    </div>
  </div>
`;
    container.appendChild(colDiv);
  }
}

function loadMoreProjects() {
  displayProjects(6); // Display 6 more projects
}

window.onload = function () {
  displayProjects(6);
};
