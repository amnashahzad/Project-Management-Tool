// Project and Task data
let projects = [];

// DOM elements
const projectList = document.getElementById('project-list');
const projectTitle = document.getElementById('project-title');
const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');
const addProjectBtn = document.getElementById('add-project-btn');

// Function to display projects in the project list
function renderProjects() {
  projectList.innerHTML = '';
  projects.forEach((project, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = project.title;
    listItem.addEventListener('click', () => displayProjectDetails(index));
    projectList.appendChild(listItem);
  });
}

// Function to display project details and tasks
function displayProjectDetails(index) {
  const project = projects[index];
  projectTitle.textContent = project.title;
  taskList.innerHTML = '';
  project.tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
  });
}

// Function to add a new task to the current project
function addTask(event) {
  event.preventDefault();
  const currentProjectIndex = projects.findIndex(project => project.title === projectTitle.textContent);
  if (currentProjectIndex !== -1) {
    const task = taskInput.value.trim();
    if (task !== '') {
      projects[currentProjectIndex].tasks.push(task);
      displayProjectDetails(currentProjectIndex);
      taskInput.value = '';
    }
  }
}

// Function to add a new project
function addProject() {
  const projectTitle = prompt('Enter project title:');
  if (projectTitle !== null && projectTitle.trim() !== '') {
    const project = {
      title: projectTitle,
      tasks: []
    };
    projects.push(project);
    renderProjects();
  }
}

// Event listeners
addTaskForm.addEventListener('submit', addTask);
addProjectBtn.addEventListener('click', addProject);

// Initial rendering
renderProjects();
