// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth',
      });
  });
});

// Dynamic project loading
const projects = [
  {
      title: "Project 1",
      description: "A web application built with React to manage tasks.",
      link: "#"
  },
  {
      title: "Project 2",
      description: "A Python script that automates data processing.",
      link: "#"
  },
  {
      title: "Project 3",
      description: "A mobile app developed in Flutter for tracking fitness goals.",
      link: "#"
  }
];

const projectListContainer = document.getElementById("project-list");
let projectCount = 0;

function loadProjects() {
  const projectsToDisplay = projects.slice(projectCount, projectCount + 2);
  projectsToDisplay.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');
      projectElement.innerHTML = `
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
      `;
      projectListContainer.appendChild(projectElement);
  });
  projectCount += projectsToDisplay.length;
}

document.getElementById('load-more-btn').addEventListener('click', loadProjects);

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const formResponse = document.getElementById('form-response');

  if (name && email && message) {
      formResponse.textContent = "Thank you for contacting me, I'll get back to you soon!";
      formResponse.style.color = "green";
      // Optionally, you could send form data to a backend here
      this.reset();
  } else {
      formResponse.textContent = "Please fill out all fields before submitting.";
      formResponse.style.color = "red";
  }
});
